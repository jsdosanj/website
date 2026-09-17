'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * The motion layer: Lenis smooth scroll + GSAP ScrollTrigger.
 *
 * Every animation here obeys the same three HIG constraints — motion is
 * purposeful, brief, and optional:
 *
 *  - prefers-reduced-motion is checked once, up front, and every builder below
 *    takes its "already finished" branch. Nothing is merely slowed down.
 *  - Lenis runs only on fine-pointer devices. A phone's native scroll is
 *    already momentum-based and hardware-accelerated; replacing it with a JS
 *    lerp makes it worse, not more premium.
 *  - No element depends on JS to become visible. Every target's resting CSS
 *    state is the finished state, so a failed chunk or a blocked script costs
 *    the animation, never the content.
 *
 * Under the App Router the whole rig is rebuilt on pathname change, which is
 * what the Astro version used `astro:page-load` for: ScrollTrigger caches
 * element positions, and a client-side navigation invalidates all of them.
 */
export default function Motion() {
  const pathname = usePathname();
  // Lenis outlives navigations — it owns the scroll container, not the page.
  const lenisRef = useRef<{ destroy: () => void; scrollTo: (...a: never[]) => void } | null>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      // ---- Lenis: created once, on the first pass only ----
      if (!lenisRef.current && !reduce && fine) {
        const { default: Lenis } = await import('lenis');
        if (cancelled) return;
        const lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time: number) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        document.documentElement.classList.add('lenis');
        lenisRef.current = lenis as unknown as typeof lenisRef.current;
      }

      // A navigation invalidates every cached trigger position.
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // ---- Section reveals ----
      const reveals = gsap.utils.toArray<HTMLElement>('.reveal');
      if (reduce) {
        reveals.forEach((el) => el.classList.add('is-visible'));
      } else {
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'expo.out',
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              onStart: () => el.classList.add('is-visible'),
            }
          );
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const depth = parseFloat(el.dataset.parallax || '0.15');
          gsap.to(el, {
            yPercent: -depth * 100,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });
      }

      // ---- Kinetic headlines: each masked line rises into place ----
      gsap.utils.toArray<HTMLElement>('[data-kinetic]').forEach((h) => {
        const inners = h.querySelectorAll('.kin-inner');
        if (!inners.length) return;
        if (reduce) {
          gsap.set(inners, { yPercent: 0 });
          return;
        }
        gsap.fromTo(
          inners,
          { yPercent: 118 },
          {
            yPercent: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.09,
            scrollTrigger: { trigger: h, start: 'top 92%', once: true },
          }
        );
      });

      // ---- Magnetic pull toward the cursor (wired once per element) ----
      if (!reduce && fine) {
        document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
          const flagged = el as HTMLElement & { _mag?: boolean };
          if (flagged._mag) return;
          flagged._mag = true;
          const s = parseFloat(el.dataset.magnetic || '0.35');
          el.addEventListener('pointermove', (e) => {
            const r = el.getBoundingClientRect();
            gsap.to(el, {
              x: (e.clientX - (r.left + r.width / 2)) * s,
              y: (e.clientY - (r.top + r.height / 2)) * s,
              duration: 0.4,
              ease: 'power3.out',
            });
          });
          el.addEventListener('pointerleave', () =>
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
          );
        });
      }

      // ---- Page-turn: .turn sections un-clip and settle as they enter ----
      if (reduce) {
        gsap.utils.toArray<HTMLElement>('.turn').forEach((el) => el.style.setProperty('--turn', '0'));
      } else {
        gsap.utils.toArray<HTMLElement>('.turn').forEach((el) => {
          gsap.fromTo(
            el,
            { '--turn': 1 },
            {
              '--turn': 0,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 52%', scrub: 0.6 },
            }
          );
        });
      }

      // ---- The journey trail draws downward as its section scrolls ----
      if (!reduce) {
        const track = document.querySelector<HTMLElement>('[data-journey-trail]');
        const fill = document.querySelector<HTMLElement>('[data-trail-fill]');
        if (track && fill) {
          gsap.set(fill, { scaleY: 0, transformOrigin: 'top' });
          gsap.to(fill, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: track, start: 'top 75%', end: 'bottom 65%', scrub: 0.6 },
          });
        }
      }

      // ---- THE SIGNATURE INTERACTION: the roadmap plays back ----
      //
      // The roadmap is a horizontally scrolled timeline, so the reader's own
      // sideways scroll is the playhead: bars fill as they come into view and
      // stay filled behind them, which makes scrolling the decade feel like
      // playing it back rather than panning an image.
      //
      // It used to be driven by vertical page scroll via ScrollTrigger. That
      // broke when the chart went horizontal — `--play` settled around 0.69,
      // so a reader who scrolled right to reach the present found the current
      // role drawn as an empty dashed outline. Tying the fill to the gesture
      // that reveals the bars is both correct and cheaper: one scroll
      // listener, one custom property, no tween.
      //
      // `--play` is a fraction of the AXIS, so it is measured against a lane's
      // content width — .rm-scroll's own scrollWidth includes the label
      // padding on the canvas and would run the fill a fifth of a year late.
      const chart = document.querySelector<HTMLElement>('[data-roadmap]');
      const scroller = chart?.querySelector<HTMLElement>('.rm-scroll');
      const lane = scroller?.querySelector<HTMLElement>('.rm-lane');
      let detachRoadmap: (() => void) | undefined;
      if (chart && scroller && lane && !reduce) {
        const onRoadmapScroll = () => {
          const axis = lane.clientWidth;
          if (!axis) return;
          // Everything left of the viewport's right edge has been seen.
          const seen = (scroller.scrollLeft + scroller.clientWidth) / axis;
          chart.style.setProperty('--play', String(Math.min(1, Math.max(0, seen))));
        };
        onRoadmapScroll();
        scroller.addEventListener('scroll', onRoadmapScroll, { passive: true });
        window.addEventListener('resize', onRoadmapScroll);
        detachRoadmap = () => {
          scroller.removeEventListener('scroll', onRoadmapScroll);
          window.removeEventListener('resize', onRoadmapScroll);
        };
      }

      // ---- In-page anchors route through Lenis while it owns scroll ----
      const anchors = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
      const onAnchor = (e: Event) => {
        const a = e.currentTarget as HTMLAnchorElement;
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const lenis = lenisRef.current;
        if (lenis) lenis.scrollTo(...([target, { offset: -90 }] as never[]));
        else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      };
      anchors.forEach((a) => a.addEventListener('click', onAnchor));

      ScrollTrigger.refresh();

      cleanup = () => {
        anchors.forEach((a) => a.removeEventListener('click', onAnchor));
        detachRoadmap?.();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  // Tear Lenis down only when the layout itself unmounts.
  useEffect(() => () => lenisRef.current?.destroy(), []);

  return null;
}
