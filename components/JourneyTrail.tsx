import { journey } from '@/data/journey';

/**
 * "The Trajectory" — the five-chapter origin story as a scroll-drawn trail
 * down the About page, one turn-revealed card per chapter. Motion scrubs the
 * trail's fill (data-trail-fill); with no JS or under prefers-reduced-motion
 * the trail simply shows fully drawn and every chapter is visible via the
 * global .turn/.reveal no-script fallback — nothing ever strands.
 */
export default function JourneyTrail() {
  return (
    <div className="relative" data-journey-trail>
      <div className="absolute left-[15px] top-2 bottom-2 w-px overflow-hidden" aria-hidden="true">
        <div className="trail-line h-full w-full" data-trail-fill />
      </div>
      <ol className="space-y-8 sm:space-y-10 list-none" role="list">
        {journey.map((chapter) => (
          <li key={chapter.chapter} className="turn relative pl-12">
            <span
              className="trail-node absolute left-0 top-1 grid place-items-center h-[31px] w-[31px] rounded-full bg-paper-300 border border-kesari-500/40 type-mono-sm text-kesari-700"
              aria-hidden="true"
            >
              {chapter.chapter}
            </span>
            <div className="card card-hover border-glow p-6 sm:p-6">
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="type-label text-kesari-700 border border-kesari-500/25 rounded-full px-2.5 py-1">
                  {chapter.marker}
                </span>
                <span className="type-mono-sm text-ink-500">{chapter.era}</span>
              </div>
              <h3 className="type-title-4 text-navy-900">{chapter.title}</h3>
              <p className="mt-3 type-subhead text-ink-600">{chapter.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
