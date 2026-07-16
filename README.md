# Max Facility Website

Marketing site for Max Facility — ice rink operations consulting, maintenance
services, and the RinkReports management software platform.

Built with **Next.js 16** (App Router), **React 18**, **TypeScript**, and
**Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/                     App Router pages
    page.tsx               Home
    about/                 About
    pricing/               Pricing
    software/              RinkReports software
    contact/               Contact form (client component)
    services/
      ice-maintenance/
      consulting/
    privacy/  terms/       Legal
    api/contact/route.ts   Contact form submission handler
    layout.tsx             Root layout (Header + Footer)
    globals.css            Tailwind layers + component utilities
  components/              Header, Footer
  lib/                     utils
tailwind.config.ts         Brand palette (navy / green / grey)
```

## Deployment (Vercel)

The recommended setup is Vercel's **Git integration**, which auto-deploys on
every push and creates a preview URL for each branch/PR.

1. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** →
   select this repo. If GitHub isn't linked yet, install the Vercel GitHub app
   and grant it access to the repo.
2. **Framework Preset:** Next.js (auto-detected). Leave build/output settings at
   their defaults.
3. **Production Branch** (Settings → Git): choose the branch you want to serve as
   production. Pushes to any other branch produce preview deployments.
4. Deploy.

No environment variables are required for the site to build and run — see below
for the optional integrations.

## Environment variables

Copy `.env.example` to `.env.local` for local development, and add the same keys
in **Vercel → Settings → Environment Variables** for deployed environments.

| Variable | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (stores contact-form leads) | Optional |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Optional |
| `RESEND_API_KEY` | Resend API key (email notifications on new leads) | Optional |
| `CONTACT_EMAIL` | Destination address for lead notifications | Optional |

## Contact form

`src/app/contact/page.tsx` POSTs to `src/app/api/contact/route.ts`, which
validates the payload and currently logs submissions to the server logs. The
route contains scaffolding (commented out) to persist leads to a Supabase
`leads` table and send email notifications via Resend; enable it once the
corresponding environment variables are configured.
