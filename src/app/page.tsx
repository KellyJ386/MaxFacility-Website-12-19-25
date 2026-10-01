import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Ruler,
  ClipboardCheck,
  ShieldAlert,
  CalendarClock,
  Thermometer,
  FileDown,
  WifiOff,
  Wrench,
  Users,
} from "lucide-react";
import { moduleCount } from "@/lib/modules";

const features = [
  {
    icon: Ruler,
    title: "Ice Depth Monitoring",
    description:
      "Numbered measurement points on your own rink layout, with Bluetooth caliper input.",
  },
  {
    icon: ClipboardCheck,
    title: "Daily Reports",
    description:
      "Up to 20 admin-configurable tabs, locked and submitted at end of day.",
  },
  {
    icon: ShieldAlert,
    title: "Incident & Accident Reports",
    description:
      "Document incidents and accidents once, with body diagrams, in one record.",
  },
  {
    icon: CalendarClock,
    title: "Employee Scheduling",
    description: "Built for facilities with staffs of up to 1,000.",
  },
  {
    icon: Thermometer,
    title: "Refrigeration & Air Quality",
    description:
      "Plant and air logs, with jurisdiction-aware compliance built in.",
  },
  {
    icon: FileDown,
    title: "PDF Reports",
    description: "Stakeholder-ready reports in one click.",
  },
];

const differentiators = [
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Rinks have bad signal. Staff keep logging, and everything syncs when they're back online.",
  },
  {
    icon: Wrench,
    title: "Built by someone who runs rinks",
    description:
      "Kelly built RinkReports to replace the paper systems he used himself.",
  },
  {
    icon: Users,
    title: "Priced per facility",
    description:
      "One price per facility, no matter how many ice sheets. Unlimited users on every plan.",
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
      <section className="relative flex min-h-[70vh] items-center justify-center bg-navy pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-500/60" />
          <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-green-500/15 blur-3xl" />
          <div className="absolute -bottom-52 -left-40 h-[30rem] w-[30rem] rounded-full bg-navy-400/25 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/images/rinkreports_logo.svg"
            alt="RinkReports"
            width={360}
            height={185}
            priority
            unoptimized
            className="mx-auto h-auto w-56 sm:w-72"
          />
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.3em] text-green-500 sm:text-sm">
            Built by an ice rink operator
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Run your rink without the paper trail.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-grey-300">
            RinkReports replaces paper logs and spreadsheets with one platform
            for ice depth, daily reports, incidents, scheduling and compliance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/request-demo" className="btn-primary text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="section-heading">Everything your rink logs, in one place</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-grey-200 bg-white p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <f.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">{f.title}</h3>
                <p className="text-grey-700">{f.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/ice-rink#rinkreports"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              See all {moduleCount} modules →
            </Link>
          </p>
        </div>
      </section>

      {/* Why it works in a rink */}
      <section className="bg-grey-50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12 text-center">
            Why it works in a rink
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                  <d.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">{d.title}</h3>
                <p className="text-grey-700">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">
            Why RinkReports understands your rink
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-grey-700">
            RinkReports is built by Kelly Johnson, founder of Max Facility LLC,
            who holds the industry&apos;s core ice rink certifications.
          </p>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-10">
            {certifications.map((c) => (
              <div key={c.abbr} className="w-36 text-center">
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
      </section>

      {/* Pricing teaser */}
      <section className="bg-grey-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading mb-10">Simple annual pricing</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-green-500 bg-white p-6">
              <p className="text-lg font-bold text-navy">All Modules</p>
              <p className="mt-2 font-mono text-3xl font-extrabold text-navy">
                $999<span className="text-base font-medium text-grey-700">/year per facility</span>
              </p>
              <p className="mt-2 text-sm text-grey-700">The complete platform.</p>
            </div>
            <div className="rounded-xl border border-grey-200 bg-white p-6">
              <p className="text-lg font-bold text-navy">Ice Depth</p>
              <p className="mt-2 font-mono text-3xl font-extrabold text-navy">
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
      </section>

      {/* Closing CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            See RinkReports on your rink.
          </h2>
          <Link href="/request-demo" className="btn-primary text-lg px-8 py-4">
            Request a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
