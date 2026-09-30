# SEO playbook for jasvant.me

Plain-English notes on what the site does for search, what it cannot do, and what to do outside the code. Keep it updated when the strategy changes.

## What is realistic

- **Nobody can guarantee position one.** Search engines and AI answers rank pages by relevance, authority and trust. This site controls relevance and clarity. Authority comes from other sites linking to you and from consistent activity over months.
- **"World class technical program manager" is a hard head term.** Job boards and large publishers own it. The winnable searches are your name, and specific phrases where the site has real proof (see the keyword map).
- **LinkedIn search is a separate system.** It ranks LinkedIn profiles, not this site. The site can only help by being the destination the profile links to. The LinkedIn checklist below is the part that moves LinkedIn results.

## Keyword map

| Search | Page that should answer it |
|---|---|
| Jasvant Dosanjh, Jasvant Singh Dosanjh | Home, About |
| technical program manager Seattle | Home, /technical-program-manager |
| technical program manager San Francisco | /technical-program-manager |
| remote technical program manager | /technical-program-manager |
| what does a technical program manager do | /technical-program-manager (FAQ) |
| TPM vs project manager | /technical-program-manager (FAQ) |
| IT program manager higher education | /work (department onboarding case study) |
| HIPAA IT onboarding, clinic IT transition | /work (clinic case study) |
| zero downtime network security migration | /about, /work |
| Sikh Library dataset, Sikh text corpus | /products, HuggingFace dataset |
| Sightline compliance dashboard | /products |

## What the site already does

- One title and one description per page, a canonical URL, Open Graph and Twitter cards with the author's face.
- Structured data: Person, ProfilePage, WebSite, page types, breadcrumbs, article data for essays, and FAQPage on /technical-program-manager.
- A sitemap with honest dates at /sitemap.xml, a robots.txt that welcomes search and answer engines, an RSS feed, llms.txt and llms-full.txt for AI tools.
- Fast pages (Lighthouse: performance 94, accessibility 100, best practices 100, SEO 100 on the home page).
- rel="me" links to LinkedIn, GitHub and HuggingFace.

## One-time setup (needs your accounts)

1. **Google Search Console.** Add a Domain property for jasvant.me. Verify with the DNS TXT record in Cloudflare. Submit `https://jasvant.me/sitemap.xml`. Use "Request indexing" on the home page and /technical-program-manager.
2. **Bing Webmaster Tools.** Import the site from Google Search Console, then submit the sitemap. Bing data also feeds several AI search tools.
3. **LinkedIn Post Inspector** (linkedin.com/post-inspector). Paste each main URL once so LinkedIn refreshes its cached preview.
4. **Link to the site from places you control.** LinkedIn (Contact info and Featured), GitHub profile, HuggingFace profile, the Sikh Library dataset card, Sikhi.io and dosanjhlabs.com. Use the full `https://jasvant.me` URL.
5. **Check the result.** Search Console, Pages: the pages should say "Indexed". Rich Results Test: paste /technical-program-manager to confirm the FAQ data parses.

## LinkedIn checklist (this is what moves LinkedIn search)

LinkedIn ranks profiles on keyword match in the headline, about section, job titles and skills, then on connection distance, profile completeness and recent activity.

- **Headline** (220 characters). Lead with the target title and location terms, then proof. For example: `Technical Program Manager | Seattle & San Francisco | 8 departments onto central IT, 12 products shipped, zero-downtime migrations | Higher Ed, Healthcare, GRC`
- **About.** The first 300 characters show before "see more", so put the title, location and best results there. Repeat the exact phrases people search: technical program manager, technical project manager, IT program manager, roadmap, risk, budget, vendor management, HIPAA, NIST.
- **Experience.** Use the same job titles as your résumé. For UW, use the HR title and the two job titles as separate positions under one employer. Put results in the first line of each role.
- **Skills.** Pin the top three: Technical Program Management, Program Management, Project Management. Then Agile, Risk Management, Budget Management, Vendor Management, Stakeholder Management, HIPAA, NIST. Ask colleagues to endorse the top three.
- **Open to work.** Recruiters-only visibility. Job titles: Technical Program Manager, Technical Project Manager, IT Program Manager, Senior Technical Program Manager, Program Manager. Locations: Seattle, San Francisco Bay Area, and Remote (United States).
- **Featured section.** Add https://jasvant.me/technical-program-manager, the case studies page, the Sikh Library dataset, and the résumé.
- **Custom URL.** linkedin.com/in/jasvantsd is already short and clean.
- **Activity.** Two or three posts a week on program management, the departmental onboarding process, and lessons learned. Comment on posts by TPMs and hiring managers. Post the essays from /blog. Activity keeps the profile in front of recruiters.
- **Network.** Connect with recruiters and TPMs in Seattle and San Francisco. Connection distance affects who sees you in results.

## AI search (ChatGPT, Perplexity, Google AI Overviews, Claude)

- These tools quote pages that state facts plainly. The Quick facts block and FAQ on /technical-program-manager are written for that. Keep the answers short, complete and true.
- robots.txt allows the answer engines (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) and reserves model training. The site also sends `X-Robots-Tag: noai, noimageai`. That header is a training opt-out, but it is ambiguous. If AI answers matter more than the training reservation, remove it in next.config.ts and update /ai-policy.
- Keep facts identical everywhere: site, LinkedIn, résumé, GitHub. Mismatched dates and titles make AI tools hedge or skip.

## Monthly routine (15 minutes)

- Search Console: look at Queries. Which searches show impressions but few clicks? Improve that page's title and first paragraph.
- Bump `lastUpdated` in `data/site.ts` when content changes, so the sitemap dates stay honest.
- Publish or update one thing: an essay, a case study, or a new result on /technical-program-manager.
- Ask for one new link: a talk page, a podcast, a colleague's site, or an organization's page that mentions you.

## Do not

- Buy links or use link networks. They get sites penalized.
- Keyword-stuff. The site uses the words a person would use.
- Claim titles, dates or numbers that differ between the site and the résumé.
