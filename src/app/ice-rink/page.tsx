import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Snowflake,
  Users,
  Monitor,
  ArrowRight,
  CheckCircle,
  Check,
  Bluetooth,
  Brain,
  FileDown,
  Shield,
  Smartphone,
  WifiOff,
  Scale,
} from "lucide-react";
import { modules, moduleCount } from "@/lib/modules";
import Reveal from "@/components/Reveal";
import ModuleTabs from "@/components/ModuleTabs";
import WorkflowShowcase from "@/components/WorkflowShowcase";

export const metadata: Metadata = {
  title: "Ice Rink Solutions",
  description:
    "Ice rink consulting, maintenance services, and the RinkReports management platform. 25+ years of experience elevating ice facility operations. CIT, CIRM, CRA certified.",
  keywords: [
    "ice rink management software",
    "ice facility consulting",
    "ice rink operations",
    "ice maintenance services",
    "ice depth monitoring",
    "RinkReports",
  ],
};

const services = [
  {
    name: "RinkReports Software",
    description:
      "All-in-one ice rink management platform. Digitize operations, track ice depth, manage schedules, and generate reports effortlessly.",
    icon: Monitor,
    href: "#rinkreports",
    price: "From $599/year per facility",
  },
  {
    name: "Ice Maintenance",
    description:
      "Professional ice maintenance and resurfacing services for facilities throughout Central New York. Expert care for optimal ice quality.",
    icon: Snowflake,
    href: "/services#ice-maintenance",
    location: "Central New York",
  },
  {
    name: "Facility Consulting",
    description:
      "Comprehensive operational assessments, staff training, and best practices implementation for ice facilities across the Northeast and nationwide.",
    icon: Users,
    href: "/services#consulting",
    location: "Northeast / Nationwide",
  },
];

const certifications = [
  {
    abbr: "CIT",
    name: "Certified Ice Technician",
    description: "US Ice Rink Association",
    logo: "/images/certs/cit.png",
  },
  {
    abbr: "CIRM",
    name: "Certified Ice Rink Manager",
    description: "US Ice Rink Association",
    logo: "/images/certs/cirm.png",
  },
  {
    abbr: "CRA",
    name: "Certified Rink Administrator",
    description: "US Ice Rink Association",
    logo: "/images/certs/cra.png",
  },
];

const highlights: {
  icon: typeof Bluetooth;
  title: string;
  description: string;
  badge?: string;
}[] = [
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "Rinks are concrete buildings with bad signal. Staff keep logging, keep measuring, keep working — everything syncs the moment you're back online.",
  },
  {
    icon: Scale,
    title: "Jurisdiction-Aware Compliance",
    description:
      "Air quality regulations vary by state and province. RinkReports enforces the right floor for your building, automatically.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth Integration",
    description:
      "Connect digital calipers directly to the app for seamless ice depth measurements.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Intelligent insights and recommendations based on your facility's data patterns.",
    badge: "Coming Soon",
  },
  {
    icon: FileDown,
    title: "PDF Reports",
    description:
      "Generate professional reports for stakeholders with one click.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Access all features from any device - desktop, tablet, or smartphone.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description:
      "Role-based permissions for staff at all levels of your organization.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with full audit trails and data backups.",
  },
];

export default function IceRinkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 pt-40 pb-24 flex min-h-[90vh] items-center justify-center"><div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-green-500/20 blur-3xl" aria-hidden="true" />
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-500/60" />
          <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-green-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-52 -left-40 w-[30rem] h-[30rem] bg-navy-400/25 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo splash: brand wordmark over the rink measurement grid */}
          <div className="-my-6 mx-auto mb-4 w-full max-w-5xl">
            <Image
              src="/images/rink-hero.png"
              alt="Max Facility logo over an ice rink diagram with measurement points"
              width={1850}
              height={950}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevating Ice Rink Operations
            <br />
            <span className="text-green-500">Through Expert Solutions</span>
          </h1>
          <p className="text-xl text-grey-300 max-w-3xl mx-auto mb-10">
            25+ years of experience optimizing operations, reducing costs, and
            enhancing user experiences at ice facilities across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="#rinkreports" className="btn-secondary text-lg px-8 py-4">
              Explore RinkReports
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24"><Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Ice Rink Services</h2>
            <p className="section-subheading">
              Comprehensive solutions for ice facility operations, from hands-on
              maintenance to cutting-edge software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white border border-grey-200 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <service.icon className="h-7 w-7 text-green-600 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.name}
                </h3>
                <p className="text-grey-700 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">
                    {service.location || service.price}
                  </span>
                  <Link
                    href={service.href}
                    className="text-navy font-semibold text-sm hover:text-green-600 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal></section>

      {/* Certifications Section */}
      <section className="bg-soft-fade py-24"><Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Industry Certifications</h2>
            <p className="section-subheading">
              Our team holds the highest credentials in ice facility management,
              ensuring expert service for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center h-28 mb-4">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} (${cert.abbr}) certification logo`}
                    width={220}
                    height={160}
                    className="max-h-28 w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{cert.name}</h3>
                <p className="text-sm text-grey-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal></section>

      {/* Features Section */}
      <section className="py-24"><Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left">
                Why Choose Max Facility?
              </h2>
              <p className="text-grey-700 mb-8">
                We combine decades of hands-on experience with modern technology
                to deliver unmatched value for ice facility operations.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified experts with 25+ years in ice operations",
                  "Comprehensive software that digitizes paper systems",
                  "Built by a working rink operator, not a software vendor",
                  "Personalized consulting tailored to your needs",
                  "Ongoing support and training for your staff",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-grey-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-grey-100 rounded-3xl p-8 relative">
                {/* Ice hockey rink diagram */}
                <div className="bg-white rounded-3xl p-4 shadow-lg ring-1 ring-grey-200">
                  <Image
                    src="/Max Facility Rink Logo-selection No logo.png"
                    alt="Ice hockey rink diagram with faceoff circles, zone lines, and player positioning markers"
                    width={1480}
                    height={760}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-navy-900 px-6 py-3 rounded-xl font-semibold shadow-lg">
                  25+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal></section>

      {/* ---------- RinkReports ---------- */}

      {/* RinkReports Hero */}
      <section id="rinkreports" className="px-4 py-10 sm:px-6 lg:px-8 scroll-mt-24"><Reveal><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 py-16 shadow-float">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-green-900 opacity-90" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2369BE28' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Image
              src="/images/rinkreports_logo.svg"
              alt="RinkReports"
              width={360}
              height={185}
              unoptimized
              className="mx-auto mb-6 h-auto w-[240px] md:w-[320px]"
            />
            <div className="flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-green-500 font-semibold uppercase tracking-wider">
                RinkReports Software Platform
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Rink Reports by Max Facility LLC
            </h2>
            <p className="text-xl text-grey-300 mb-8">
              The all-in-one ice rink management platform that digitizes your
              paper-based systems. Track ice depth, manage operations, schedule
              employees, and generate reports—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-green-400 font-semibold">
              Starting at $599/year per facility
            </p>
          </div>
        </div>
      </div></Reveal></section>

      {/* What RinkReports does for you — workflow graphic slot */}
      <section className="bg-soft-fade py-16 sm:py-24"><Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-5">What RinkReports does for you</p>
            <h2 className="section-heading">From paper binders to one clean workflow.</h2>
            <p className="section-subheading">
              See how scheduling, ice operations, and every department connect in RinkReports.
            </p>
          </Reveal>
          <Reveal>
            <WorkflowShowcase />
          </Reveal>
        </div>
      </Reveal></section>

      {/* Modules Section */}
      <section className="py-24"><Reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-5">Core Modules</p>
            <h2 className="section-heading">Everything your facility runs on.</h2>
            <p className="section-subheading">
              {moduleCount} modules designed specifically for ice facility
              operations, all working together seamlessly.
            </p>
          </Reveal>
          <Reveal>
            <ModuleTabs />
          </Reveal>
        </div>
      </Reveal></section>

      {/* Feature Highlights */}
      <section className="bg-soft-fade py-24"><Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Platform Highlights</h2>
            <p className="section-subheading">
              Modern features that set RinkReports apart from traditional
              facility management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start p-6 bg-white rounded-3xl shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                    {item.badge && (
                      <span className="inline-block rounded-full bg-navy px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#69BE28]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-grey-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal></section>

      {/* Offline Deep Dive */}
      <section className="py-24"><Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Featured Module
              </span>
              <h2 className="section-heading text-left mt-2">
                Works When Your Building Doesn&apos;t Cooperate
              </h2>
              <p className="text-grey-700 mb-6">
                Ice rinks are concrete boxes. Wi-Fi drops, cell signal dies, and
                your staff still have a Saturday public skate to run. RinkReports
                is built offline-first — every module keeps working without a
                connection.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Daily reports, refrigeration logs, and incident forms capture offline",
                  "Ice depth measurements record straight from the caliper, connection or not",
                  "Everything syncs automatically the moment you reconnect",
                  "No lost shifts, no re-entering a day's worth of logs",
                  `Built on the same foundation across all ${moduleCount} modules`,
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-grey-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                See It In Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-grey-100 rounded-3xl p-8">
                <div className="aspect-[4/3] bg-white rounded-3xl border-2 border-grey-200 flex items-center justify-center relative overflow-hidden shadow-soft">
                  <Image
                    src="/images/rinkreports_logo.svg"
                    alt="RinkReports"
                    fill
                    unoptimized
                    className="object-contain p-6"
                  />
                </div>
                <p className="text-center text-grey-700 text-sm mt-4">
                  Offline-first across every module
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal></section>

      {/* Pricing Preview */}
      <section className="px-4 py-10 sm:px-6 lg:px-8"><Reveal><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 py-16 shadow-float">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-soft">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-grey-700 mb-8">
              Everything you need to manage your ice facility, on a simple annual
              subscription.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">$999</div>
                <div className="text-grey-700">per facility, per year — All Modules</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-grey-200" />
              <div className="text-center">
                <div className="text-5xl font-bold text-navy">$599</div>
                <div className="text-grey-700">per facility, per year — Ice Depth</div>
              </div>
            </div>
            <ul className="inline-grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-left mb-8">
              {[
                `All ${moduleCount} core modules included`,
                "Implementation support",
                "Staff training",
                "Data migration assistance",
                "Unlimited users",
                "Email support",
              ].map((feature) => (
                <li key={feature} className="flex items-center text-grey-700">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Full Pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-grey-700">
              15% off every facility for multi-facility subscriptions
            </p>
          </div>
        </div>
      </div></Reveal></section>

      {/* CTA Section */}
      <section className="px-4 py-10 sm:px-6 lg:px-8"><Reveal><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 py-16 shadow-float">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Ice Facility Operations?
          </h2>
          <p className="text-xl text-grey-300 mb-8">
            Schedule a free consultation with our certified experts and discover
            how we can help optimize your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </div></Reveal></section>
    </>
  );
}
