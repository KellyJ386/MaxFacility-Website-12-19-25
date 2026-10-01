import Link from "next/link";
import Image from "next/image";
import { Snowflake, Monitor, ArrowRight, Award, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const doors = [
  {
    name: "Ice Rink Solutions",
    eyebrow: "30+ Years On The Ice",
    description:
      "Consulting, maintenance, and the RinkReports management platform for ice facilities — from a single sheet to a multi-rink complex.",
    bullets: [
      "Ice maintenance & resurfacing",
      "Operational assessments & staff training",
      "RinkReports management software",
    ],
    href: "/ice-rink",
    cta: "Explore Ice Rink Solutions",
  },
  {
    name: "Custom Facility Software",
    eyebrow: "All Facilities. One Partner.",
    description:
      "Custom web applications for recreation and sport facilities of all sizes. Built around your operations. Designed for your people.",
    bullets: [
      "Rinks, fitness, aquatics, fields & courts",
      "Built for your workflow, not a template",
      "Single facility or multi-site organization",
    ],
    href: "/custom-software",
    cta: "Tired of Cookie-Cutter Software?",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-500 to-[#f6f9fd] pb-40 pt-40">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-navy-300/30 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Image
              src="/images/max-facility-logo.png"
              alt="Max Facility"
              width={1612}
              height={756}
              priority
              className="mx-auto h-auto w-56 md:w-72"
            />
            <p className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 font-label text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Custom Solutions. Real Impact.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-white md:text-7xl">
              Two ways we make
              <br />
              facilities <span className="text-green-400">run better.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100 md:text-xl">
              Expert ice rink operations, and custom software built for the way
              your facility actually works. Pick the one you came for.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The two doors, overlapping the hero */}
      <section className="relative -mt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal>
              <Link
                href={doors[0].href}
                className="card-soft group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-float md:p-10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy">
                  <Snowflake className="h-8 w-8 text-green-500" />
                </div>
                <p className="eyebrow mb-4 self-start">{doors[0].eyebrow}</p>
                <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
                  {doors[0].name}
                </h2>
                <p className="mb-6 text-grey-600">{doors[0].description}</p>
                <ul className="mb-8 flex flex-wrap gap-2">
                  {doors[0].bullets.map((b) => (
                    <li key={b} className="pill">
                      <Check className="h-4 w-4 text-green-600" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center justify-between rounded-full bg-navy px-6 py-4 font-display font-semibold text-white transition-colors group-hover:bg-navy-500">
                  {doors[0].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link
                href={doors[1].href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy to-navy-500 p-8 shadow-float transition-all duration-300 hover:-translate-y-1 md:p-10"
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <p className="mb-4 inline-flex self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                    {doors[1].eyebrow}
                  </p>
                  <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    Custom Facility <span className="text-green-400">Software</span>
                  </h2>
                  <p className="mb-6 text-navy-100">{doors[1].description}</p>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {doors[1].bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                      >
                        <Check className="h-4 w-4 text-green-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center justify-between rounded-full bg-green-500 px-6 py-4 font-display font-semibold text-white transition-colors group-hover:bg-green-600">
                    {doors[1].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-soft-fade py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="card-soft grid grid-cols-1 gap-8 p-10 text-center sm:grid-cols-3">
              {[
                { stat: "30+", label: "Years in facility operations" },
                { stat: "100+", label: "Facilities served" },
                { stat: "CIT·CIRM·CRA", label: "US Ice Rink Association certified" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="whitespace-nowrap font-display text-3xl font-extrabold text-navy md:text-3xl lg:text-4xl">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-grey-600">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-grey-600">
              <Award className="h-4 w-4 text-green-600" />
              <Link href="/about" className="hover:text-navy">
                Meet the team behind Max Facility
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 px-8 py-16 text-center shadow-float">
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
            <h2 className="relative mb-6 text-3xl font-bold text-white md:text-5xl">
              Not sure which one you need?
            </h2>
            <p className="relative mx-auto mb-8 max-w-2xl text-lg text-navy-100">
              Tell us how your facility runs today. We&apos;ll tell you honestly
              whether that&apos;s a consulting problem, a software problem, or
              neither.
            </p>
            <div className="relative flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary px-8 py-4 text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
