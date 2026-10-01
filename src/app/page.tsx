import Link from "next/link";
import Image from "next/image";
import { Snowflake, ArrowRight, Award } from "lucide-react";

const offering = {
  eyebrow: "30+ Years On The Ice",
  name: "RinkReports",
  description:
    "The ice rink management platform built by an operator. Digitize daily reports, ice depth, scheduling, and compliance — backed by consulting and maintenance from the same team.",
  bullets: [
    "RinkReports management software",
    "Operational assessments & staff training",
    "Ice maintenance & resurfacing",
  ],
  href: "/ice-rink",
  cta: "Explore RinkReports & Ice Rink Solutions",
};

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
            Built By An Operator. Made For Rinks.
          </p>
          <h1 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ice rink operations, run better
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-grey-300">
            RinkReports management software, plus expert consulting and
            maintenance from an operator who runs rinks every day.
          </p>
        </div>
      </section>

      {/* Offering */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href={offering.href}
            className="group flex flex-col rounded-2xl border-2 border-grey-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-2xl md:p-10"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-navy transition-colors group-hover:bg-navy-700">
              <Snowflake className="h-8 w-8 text-green-500" />
            </div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              {offering.eyebrow}
            </p>
            <h2 className="mb-4 text-2xl font-extrabold uppercase text-navy md:text-3xl">
              {offering.name}
            </h2>
            <p className="mb-6 text-grey-700">{offering.description}</p>
            <ul className="mb-8 space-y-2">
              {offering.bullets.map((bullet) => (
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
              {offering.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Link>
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
            Not sure where to start?
          </h2>
          <p className="mb-8 text-xl text-grey-300">
            Tell us how your facility runs today. We&apos;ll tell you honestly
            whether RinkReports, consulting, or neither is the right fit.
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
