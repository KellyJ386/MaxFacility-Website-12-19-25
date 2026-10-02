import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  WifiOff,
  Wrench,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import WorkflowShowcase from "@/components/WorkflowShowcase";

const differentiators = [
  {
    icon: WifiOff,
    title: "Works offline",
  },
  {
    icon: Wrench,
    title: "Built by someone who runs rinks",
  },
  {
    icon: Users,
    title: "Priced per facility",
  },
];

const certifications = [
  { abbr: "CIT", name: "Certified Ice Technician", logo: "/images/certs/cit.png" },
  { abbr: "CIRM", name: "Certified Ice Rink Manager", logo: "/images/certs/cirm.png" },
  { abbr: "CRA", name: "Certified Rink Administrator", logo: "/images/certs/cra.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 pb-24 pt-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-navy-300/30 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <Image
              src="/images/rinkreports_logo.svg"
              alt="RinkReports"
              width={360}
              height={185}
              priority
              unoptimized
              className="mx-auto h-auto w-[240px] md:w-[320px]"
            />
            <p className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Built by an ice rink operator
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-white md:text-7xl">
              Run your rink without the{" "}
              <span className="text-green-400">paper trail.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100 md:text-xl">
              RinkReports replaces paper logs and spreadsheets with one platform
              for ice depth, daily reports, incidents, scheduling and compliance.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/request-demo" className="btn-primary px-8 py-4 text-lg">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary px-8 py-4 text-lg">
                View Pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What RinkReports does for you (desktop and tablet) */}
      <section className="hidden bg-soft-fade py-24 sm:block">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="eyebrow mb-5">What RinkReports does for you</p>
              <h2 className="section-heading">From paper binders to one clean workflow.</h2>
              <p className="section-subheading">
                See how scheduling, ice operations, and every department connect in RinkReports.
              </p>
            </div>
            <WorkflowShowcase />
          </div>
        </Reveal>
      </section>

      {/* Why it works in a rink */}
      <section className="bg-soft-fade py-24">
        <Reveal>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="eyebrow mb-5">Why it works</p>
              <h2 className="section-heading">Why it works in a rink</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.title} className="card-soft flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                    <d.icon className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{d.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Credibility */}
      <section className="py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="eyebrow mb-5 px-6 py-3 text-base">Credentials</p>
            <h2 className="section-heading">Certifications</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {certifications.map((c) => (
                <div key={c.abbr} className="card-soft p-6 text-center">
                  <Image
                    src={c.logo}
                    alt={`${c.abbr} — ${c.name}`}
                    width={120}
                    height={120}
                    className="mx-auto h-24 w-auto object-contain"
                  />
                  <p className="mt-3 font-mono text-sm font-semibold text-navy">{c.abbr}</p>
                  <p className="text-xs text-grey-700">{c.name}</p>
                  <p className="text-xs text-grey-700">U.S. Ice Rink Association</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pricing teaser */}
      <section className="bg-soft-fade py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="eyebrow mb-5">Pricing</p>
            <h2 className="section-heading mb-10">Simple annual pricing</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="card-soft border-2 !border-green-500 p-8">
                <p className="text-lg font-bold text-navy">All Modules</p>
                <p className="mt-2 font-mono text-4xl font-extrabold text-navy">
                  $999<span className="text-base font-medium text-grey-700">/year per facility</span>
                </p>
                <p className="mt-2 text-sm text-grey-700">The complete platform.</p>
              </div>
              <div className="card-soft p-8">
                <p className="text-lg font-bold text-navy">Ice Depth</p>
                <p className="mt-2 font-mono text-4xl font-extrabold text-navy">
                  $599<span className="text-base font-medium text-grey-700">/year per facility</span>
                </p>
                <p className="mt-2 text-sm text-grey-700">
                  Depth monitoring and ice operations.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-grey-700">
              15% off every facility for multi-facility subscriptions.{" "}
              <Link href="/pricing" className="font-semibold text-green-600 hover:text-green-700">
                Full pricing →
              </Link>
            </p>
            <p className="mt-10 text-sm text-grey-700">
              Also available: ice maintenance and operations consulting.{" "}
              <Link href="/services" className="font-semibold text-green-600 hover:text-green-700">
                Learn more →
              </Link>
            </p>
          </div>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 px-8 py-16 text-center shadow-float">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
            <h2 className="relative mb-8 text-3xl font-bold text-white md:text-5xl">
              See RinkReports on your rink.
            </h2>
            <Link href="/request-demo" className="btn-primary relative px-8 py-4 text-lg">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
