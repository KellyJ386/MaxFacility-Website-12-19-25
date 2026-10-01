import Link from "next/link";
import Image from "next/image";
import { Snowflake, Monitor, Users, ArrowRight, Award } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    name: "RinkReports Software",
    eyebrow: "From $399/year",
    description:
      "All-in-one ice rink management platform. Digitize operations, track ice depth, manage schedules, and generate reports effortlessly.",
    icon: Monitor,
    href: "/ice-rink#rinkreports",
    cta: "Explore RinkReports",
    featured: true,
  },
  {
    name: "Ice Maintenance",
    eyebrow: "Central New York",
    description:
      "Professional ice maintenance and resurfacing for facilities throughout Central New York. Expert care for optimal ice quality.",
    icon: Snowflake,
    href: "/services#ice-maintenance",
    cta: "Ice Maintenance",
    featured: false,
  },
  {
    name: "Facility Consulting",
    eyebrow: "Northeast / Nationwide",
    description:
      "Operational assessments, staff training, and best practices for ice facilities across the Northeast and nationwide.",
    icon: Users,
    href: "/services#consulting",
    cta: "Facility Consulting",
    featured: false,
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
              Ice rink operations,
              <br />
              <span className="text-green-400">run better.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100 md:text-xl">
              Hands-on ice maintenance, expert consulting, and the RinkReports
              platform — built by certified ice professionals with 30+ years on
              the ice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services, overlapping the hero */}
      <section className="relative -mt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.name} delay={i * 100}>
                <Link
                  href={svc.href}
                  className={
                    svc.featured
                      ? "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy to-navy-500 p-8 shadow-float transition-all duration-300 hover:-translate-y-1"
                      : "card-soft group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
                  }
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                      svc.featured ? "bg-green-500" : "bg-navy"
                    }`}
                  >
                    <svc.icon
                      className={`h-8 w-8 ${svc.featured ? "text-white" : "text-green-500"}`}
                    />
                  </div>
                  <p
                    className={
                      svc.featured
                        ? "mb-4 inline-flex self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-green-400"
                        : "eyebrow mb-4 self-start"
                    }
                  >
                    {svc.eyebrow}
                  </p>
                  <h2
                    className={`mb-3 text-2xl font-bold md:text-3xl ${
                      svc.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {svc.name}
                  </h2>
                  <p className={`mb-8 ${svc.featured ? "text-navy-100" : "text-grey-600"}`}>
                    {svc.description}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center justify-between rounded-full px-6 py-4 font-display font-semibold text-white transition-colors ${
                      svc.featured
                        ? "bg-green-500 group-hover:bg-green-600"
                        : "bg-navy group-hover:bg-navy-500"
                    }`}
                  >
                    {svc.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Reveal>
            ))}
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
              Not sure where to start?
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
