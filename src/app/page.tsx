import Link from "next/link";
import Image from "next/image";
import {
  Snowflake,
  Monitor,
  ArrowRight,
  Award,
  MousePointerClick,
} from "lucide-react";

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
    icon: Snowflake,
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
    icon: Monitor,
    href: "/custom-software",
    cta: "Tired of Cookie-Cutter Software?",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero / brand splash */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-navy pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-500/60" />
          <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-green-500/15 blur-3xl" />
          <div className="absolute -bottom-52 -left-40 h-[30rem] w-[30rem] rounded-full bg-navy-400/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/images/max-facility-logo.png"
            alt="Max Facility"
            width={1612}
            height={756}
            priority
            className="mx-auto h-auto w-64 sm:w-80 md:w-96"
          />
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-green-500 sm:text-sm">
            Custom Solutions. Real Impact.
          </p>
          <h1 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Two ways we make facilities run better
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-grey-300">
            Expert ice rink operations, and custom software built for the way
            your facility actually works. Pick the one you came for.
          </p>
        </div>
      </section>

      {/* The two doors */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Ice Rink door */}
            <Link
              href={doors[0].href}
              className="group flex flex-col rounded-2xl border-2 border-grey-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-2xl md:p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-navy transition-colors group-hover:bg-navy-700">
                <Snowflake className="h-8 w-8 text-green-500" />
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                {doors[0].eyebrow}
              </p>
              <h2 className="mb-4 text-2xl font-extrabold uppercase text-navy md:text-3xl">
                {doors[0].name}
              </h2>
              <p className="mb-6 text-grey-700">{doors[0].description}</p>
              <ul className="mb-8 space-y-2">
                {doors[0].bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start text-sm text-grey-700"
                  >
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center justify-center rounded-lg border-2 border-navy px-6 py-3 text-base font-semibold text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                {doors[0].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            {/* Custom Software door — styled after the Max Facility ad */}
            <Link
              href={doors[1].href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-500">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-500">
                  {doors[1].eyebrow}
                </p>
                <h2 className="mb-4 text-2xl font-extrabold uppercase leading-tight text-white md:text-3xl">
                  Custom Facility
                  <br />
                  <span className="text-green-500">Software</span>
                </h2>
                <p className="mb-6 text-grey-300">{doors[1].description}</p>
                <ul className="space-y-2">
                  {doors[1].bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start text-sm text-grey-300"
                    >
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Green CTA band with an angled edge, echoing the ad */}
              <div className="relative mt-auto">
                <div
                  className="absolute inset-y-0 left-0 w-full bg-green-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-y-0 right-0 hidden w-24 bg-navy sm:block"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3 px-8 py-6 md:px-10">
                  <MousePointerClick className="h-7 w-7 flex-shrink-0 text-white" />
                  <span className="text-base font-extrabold uppercase leading-tight tracking-wide text-white sm:text-lg">
                    {doors[1].cta}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-grey-200 bg-grey-50 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "30+", label: "Years in facility operations" },
              { stat: "100+", label: "Facilities served" },
              { stat: "CIT · CIRM · CRA", label: "US Ice Rink Association certified" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-extrabold text-navy md:text-3xl">
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Not sure which one you need?
          </h2>
          <p className="mb-8 text-xl text-grey-300">
            Tell us how your facility runs today. We&apos;ll tell you honestly
            whether that&apos;s a consulting problem, a software problem, or
            neither.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
