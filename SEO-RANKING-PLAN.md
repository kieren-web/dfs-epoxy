# DFS Epoxy — SEO, GMB & Google Ads Ranking Plan

## Overview

The goal is to dominate search for epoxy flooring on the Central Coast — commercial-first,
residential-second. This plan covers competitor research, GMB setup, Google Ads migration,
and the ongoing SEO content strategy to get there.

---

## Phase 1 — Domain & Go-Live (Week 1)

### 1.1 Domain Migration from GHL Website Builder

> **Situation:** The site currently lives on GHL's website builder with a custom domain.
> Google Ads is running and pointing to that domain. We need to switch to the Next.js site
> hosted on Vercel without breaking ads or losing quality score.

**Steps (in order):**

1. **Deploy to Vercel first** — get the Next.js site live on Vercel's default domain
   (`dfs-epoxy.vercel.app` or similar). Test everything thoroughly BEFORE touching the domain.

2. **Add the custom domain in Vercel**
   - Go to Vercel → your project → Settings → Domains
   - Add `dynamicflooringsolutions.com.au`
   - Vercel will give you DNS records (usually an A record or CNAME)

3. **Update DNS (at your domain registrar, NOT in GHL)**
   - Log into wherever the domain is registered (likely GoDaddy, Crazy Domains, or similar)
   - Update the A record to point to Vercel's IP (Vercel will show you exactly what to add)
   - DNS propagation takes 5 min – 48 hours (usually under 1 hour)
   - **Do NOT disconnect from GHL until DNS has propagated and the Vercel site is confirmed live**

4. **Update Google Ads final URLs**
   - Once the new site is confirmed live and loading correctly, review all ad final URLs
   - The domain is the same (`dynamicflooringsolutions.com.au`) so most URLs will continue
     to work — the paths just need to match the new site structure
   - Key URLs to update/confirm:
     - Homepage: `dynamicflooringsolutions.com.au` ✓ (same)
     - Landing page: `dynamicflooringsolutions.com.au/#quote` → or `/epoxy-quote` (Google Ads page)
   - Google Ads **quality score is tied to landing page relevance and load speed** — the
     Next.js site will be significantly faster than GHL's builder, which should *improve* QS

5. **Create a dedicated Google Ads landing page** (high priority)
   - Path: `app/epoxy-quote/page.tsx`
   - No nav, no footer — pure conversion page
   - NoIndex so it doesn't compete with the main site
   - This is where to point all ad traffic for highest conversion rate

6. **Set up Google Ads conversion tracking on the new site**
   - Add `gtag('event', 'conversion', { send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL' })`
   - This fires in `lib/analytics.ts` after form submit success
   - The `trackFormSubmitSuccess` function is already wired to call analytics — just add
     the conversion tracking call there once you have your Google Ads conversion ID

7. **Disconnect GHL website (after everything is confirmed live)**
   - Once Vercel site is confirmed live and ads are working, you can archive/disable
     the GHL website builder
   - Keep GHL running for CRM/leads — we're still sending form submissions there

---

## Phase 2 — Google Business Profile (GMB) Setup

### 2.1 Claim/Optimise the GMB Listing

1. **Claim the listing** at `google.com/business`
   - Search for "Dynamic Flooring Solutions Tuggerah" to see if it already exists
   - If exists → request ownership
   - If new → create listing at Tuggerah, NSW address

2. **Core GMB optimisation:**
   - Business name: "Dynamic Flooring Solutions" (exact — no keyword stuffing)
   - Category: Primary = "Flooring Contractor", Secondary = "Epoxy Flooring"
   - Service area: Central Coast + list specific suburbs (Gosford, Wyong, Terrigal, etc.)
   - Phone: 0483 986 101
   - Website: `dynamicflooringsolutions.com.au`
   - Description: Use the business description from the homepage (owner-operated, 500+ floors,
     commercial specialists, Central Coast)

3. **Photos to add:**
   - Before/after job photos (minimum 10)
   - Team photos (Carl & Santiago on site — builds trust)
   - Logo
   - Interior/exterior of workspace if relevant
   - Google shows listings with more photos higher in local pack

4. **GMB Posts (weekly minimum):**
   - Post completed jobs ("Just finished a warehouse floor in Gosford...")
   - Post specials or seasonal content
   - These are indexed and appear in local search results

5. **Reviews strategy:**
   - Every completed job → text/email customer asking for a Google review
   - Make it easy: send a direct link to the GMB review form
   - Target: 20+ reviews with 4.8+ average to dominate the local pack
   - Respond to every review (shows activity to Google)

6. **Update `data/siteConfig.ts`** once GMB URL is live:
   ```ts
   gmb: "https://maps.app.goo.gl/YOUR_LISTING_ID",
   ```

---

## Phase 3 — Competitor Research

### 3.1 Who to Research

Run Google searches for:
- "epoxy flooring Central Coast"
- "commercial epoxy flooring Central Coast"
- "garage epoxy flooring Central Coast"
- "warehouse epoxy flooring NSW"
- "epoxy flooring Gosford"

Document the top 3–5 organic results AND the Google Local Pack (3 map results) for each.

### 3.2 What to Analyse for Each Competitor

For each competitor site:

| Factor | What to look for |
|---|---|
| Domain authority | Check via Ahrefs or Moz — higher DA = harder to outrank |
| Page structure | Do they have dedicated service pages? Location pages? |
| Reviews | How many GMB reviews? What rating? |
| Content depth | Is their content thin (500 words) or deep (1500+ words)? |
| Backlinks | Where are they getting local links from (Ahrefs free tool) |
| Speed | Run through PageSpeed Insights — Next.js will beat most competitors |
| Meta titles | Are they targeting the same keywords? How are they positioning? |

### 3.3 How to Outrank Them

**Short-term wins (1–3 months):**
1. Technical advantage — the Next.js site will have superior Core Web Vitals vs GHL or Wix competitors
2. Schema markup — LocalBusiness + FAQPage JSON-LD is already implemented — most competitors don't have this
3. GMB reviews — active review collection will outpace competitors with fewer reviews
4. Longer, more specific content on each page — most local trades sites have thin content

**Medium-term (3–6 months):**
5. Location pages — we have Gosford, Tuggerah, Wyong. Add more: Terrigal, Erina, The Entrance
6. Blog content targeting long-tail keywords (see below)
7. Local link building — list on local business directories, trade associations

**Long-term (6–12 months):**
8. Genuine authority through consistent GMB posting + review accumulation
9. Backlinks from industry and local sources
10. Expanding content to cover every service/suburb combination

---

## Phase 4 — SEO Content Plan

### 4.1 Pages Already Built

| URL | Target Keyword | Priority |
|---|---|---|
| `/` | epoxy flooring Central Coast | 🔴 Critical |
| `/services/commercial-epoxy-flooring-central-coast` | commercial epoxy flooring Central Coast | 🔴 Critical |
| `/services/warehouse-epoxy-flooring-central-coast` | warehouse epoxy flooring Central Coast | 🟠 High |
| `/services/commercial-kitchen-epoxy-flooring-central-coast` | commercial kitchen epoxy flooring | 🟠 High |
| `/services/garage-epoxy-flooring-central-coast` | garage epoxy flooring Central Coast | 🟠 High |
| `/epoxy-flooring-gosford` | epoxy flooring Gosford | 🟡 Medium |
| `/epoxy-flooring-tuggerah` | epoxy flooring Tuggerah | 🟡 Medium |
| `/epoxy-flooring-wyong` | epoxy flooring Wyong | 🟡 Medium |

### 4.2 Next Location Pages to Build (Phase 2)

Build these in order of search volume / commercial value:

1. `/epoxy-flooring-terrigal` — Terrigal is high-income residential
2. `/epoxy-flooring-erina` — Major commercial/retail area
3. `/epoxy-flooring-the-entrance` — Large residential/commercial area
4. `/epoxy-flooring-umina-beach` — Southern Central Coast
5. `/epoxy-flooring-woy-woy` — Peninsula area

### 4.3 Blog Posts to Target (Long-tail, informational)

These capture people early in the buying process and build topical authority:

1. `/blog/how-much-does-epoxy-flooring-cost-central-coast`
   - Target: "epoxy flooring cost Central Coast", "how much epoxy flooring NSW"
   - Content: Cost guide with ranges for different environments

2. `/blog/epoxy-flooring-warehouses-guide`
   - Target: "warehouse epoxy flooring NSW", "epoxy floor for warehouse"
   - Content: What systems work, why prep matters, how to choose a contractor

3. `/blog/commercial-epoxy-vs-standard-paint`
   - Target: "commercial epoxy vs paint", "epoxy vs floor paint garage"
   - Content: Comparison guide — lifespan, performance, cost per year

4. `/blog/garage-epoxy-flooring-guide`
   - Target: "garage epoxy flooring guide", "epoxy floor DIY vs professional"
   - Content: What's involved, what to ask contractors, cost guide

5. `/blog/hot-tyre-pickup-epoxy-flooring`
   - Target: "hot tyre pickup epoxy", "polyaspartic vs epoxy garage"
   - Content: Why cheap epoxy fails under hot tyres, what to use instead

---

## Phase 5 — Analytics & Tracking Setup

### 5.1 Google Analytics 4

GA4 is already wired into `app/layout.tsx` via `NEXT_PUBLIC_GA4_ID`.

Once the domain is live:
1. Create/connect GA4 property at `analytics.google.com`
2. Copy the Measurement ID (G-XXXXXXXXXX) into Vercel env vars
3. Set up key events:
   - `form_submit` — fired after successful form submission (already in `lib/analytics.ts`)
   - `click_call` — fired when phone number is clicked
   - `form_step1_complete` — fires after step 1 of the 2-step form

### 5.2 Google Ads Conversion Tracking

1. In Google Ads → Tools → Conversions → New conversion → Website
2. Create a "Lead form submitted" conversion
3. Copy the Conversion ID and Label
4. Add to `lib/analytics.ts`:
   ```ts
   export function trackFormSubmitSuccess(source: string) {
     // existing GA4 tracking
     window.gtag?.("event", "form_submit", { source });
     // Add Google Ads conversion:
     window.gtag?.("event", "conversion", {
       send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
     });
   }
   ```
5. Verify conversions are firing in Google Ads → Tools → Conversions

### 5.3 Google Search Console

1. Go to `search.google.com/search-console`
2. Add property: `dynamicflooringsolutions.com.au`
3. Verify via DNS TXT record (easiest method)
4. Submit sitemap: `dynamicflooringsolutions.com.au/sitemap.xml`
5. Monitor: impressions, clicks, average position, coverage errors

---

## Phase 6 — Google Ads Landing Page

A dedicated conversion page with no nav/footer for higher Quality Score and conversion rate.

**File to create:** `app/epoxy-quote/page.tsx`
- `<meta name="robots" content="noindex">` (don't let it rank organically)
- Hero with single headline focused on the ad's promise
- Lead form above the fold
- 3–4 trust bullets
- Phone number prominently displayed
- No navigation links to keep traffic on page

**Point all Google Ads campaigns here** rather than the homepage. This will:
- Improve Quality Score (better relevance between ad and landing page)
- Increase conversion rate (no navigation distractions)
- Give you clean conversion data separated from organic traffic

---

## Quick Reference — Env Variables Needed

```env
# GoHighLevel
GHL_API_KEY=pit-xxxx
GHL_LOCATION_ID=xxxx

# Google Analytics 4
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Site URL (for metadata + sitemap)
NEXT_PUBLIC_SITE_URL=https://dynamicflooringsolutions.com.au
```

---

## Month-by-Month Checklist

**Month 1:**
- [ ] Deploy to Vercel
- [ ] Connect domain (away from GHL builder)
- [ ] Update Google Ads final URLs + verify conversions
- [ ] Claim/set up GMB profile with photos
- [ ] Submit sitemap to Search Console
- [ ] Set up GA4 property

**Month 2:**
- [ ] Start GMB review collection (every completed job)
- [ ] Add 3–5 GMB posts with job photos
- [ ] Run competitor research — document findings
- [ ] Build `/epoxy-quote` Google Ads landing page
- [ ] Write first blog post (cost guide)

**Month 3:**
- [ ] Build 2–3 more location pages based on competitor/search data
- [ ] Monitor Search Console for ranking positions — adjust content on underperforming pages
- [ ] Target 15+ GMB reviews
- [ ] Review Google Ads campaigns — pause underperforming keywords, scale winners

**Month 6:**
- [ ] 8+ location pages live
- [ ] 3+ blog posts live
- [ ] 30+ GMB reviews
- [ ] Tracking page 1 for priority keywords in Search Console
