import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Monitor,
  ArrowRight,
  Ruler,
  ClipboardList,
  AlertTriangle,
  Calendar,
  CheckSquare,
  Thermometer,
  FileText,
  Settings,
  Check,
  Bluetooth,
  Brain,
  FileDown,
  Users,
  Shield,
  Smartphone,
  Wind,
  WifiOff,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RinkReports - Ice Rink Management Platform",
  description:
    "RinkReports - comprehensive ice rink management SaaS. Ice depth tracking, operations logs, incident reporting, employee scheduling, and more. $49.99/month.",
  keywords: [
    "ice rink management software",
    "ice depth monitoring",
    "facility management software",
    "rink operations software",
    "ice facility software",
  ],
};

const modules = [
  {
    icon: Ruler,
    title: "Ice Depth Monitoring",
    description:
      "Interactive rink diagrams with admin-built measurement templates and Bluetooth caliper support. Track ice depth trends over time.",
    features: [
      "Interactive rink diagrams",
      "Bluetooth caliper integration",
      "Custom measurement templates",
      "Historical trend analysis",
    ],
  },
  {
    icon: ClipboardList,
    title: "Ice Operations Log",
    description:
      "Comprehensive logging system with 4 customizable tabs for all ice-related activities.",
    features: [
      "Ice Make tracking",
      "Circle Checks documentation",
      "Blade Change records",
      "End of Day reports",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting",
    description:
      "Complete incident documentation with interactive body diagrams and photo uploads.",
    features: [
      "Interactive body diagram",
      "Photo uploads",
      "Witness statements",
      "Injury tracking & trends",
    ],
  },
  {
    icon: Wind,
    title: "Air Quality Monitoring",
    description:
      "Jurisdiction-aware CO and NO2 logging that knows your state's regulatory floor.",
    features: [
      "Jurisdiction-specific thresholds",
      "Tighten standards, never loosen them",
      "Exceedance and alarm logging",
      "Audit-ready compliance history",
    ],
  },
  {
    icon: Calendar,
    title: "Employee Scheduling",
    description:
      "Powerful scheduling system designed for facilities with up to 1000 employees.",
    features: [
      "Multi-employee support",
      "Shift management",
      "Role-based access",
      "Mobile sign-off",
    ],
  },
  {
    icon: CheckSquare,
    title: "Facility Checklists",
    description:
      "Customizable opening and closing checklists with supervisor sign-off capabilities.",
    features: [
      "Opening procedures",
      "Closing procedures",
      "Custom templates",
      "Supervisor approval",
    ],
  },
  {
    icon: Thermometer,
    title: "Refrigeration Plant",
    description:
      "Track compressor readings, brine temperatures, and maintain compliance records.",
    features: [
      "Compressor readings",
      "Brine temp monitoring",
      "Alarm logging",
      "Compliance tracking",
    ],
  },
  {
    icon: FileText,
    title: "Daily Reports",
    description:
      "Highly customizable daily reporting with up to 20 admin-configurable tabs.",
    features: [
      "20 customizable tabs",
      "Area-specific reports",
      "Historical data",
      "Export capabilities",
    ],
  },
  {
    icon: Settings,
    title: "Admin Panel",
    description:
      "Comprehensive administration tools for facility managers and supervisors.",
    features: [
      "User management",
      "Permission controls",
      "System configuration",
      "Analytics dashboard",
    ],
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
    description: "Connect digital calipers directly to the app for seamless ice depth measurements.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Intelligent insights and recommendations based on your facility's data patterns.",
    badge: "Coming Soon",
  },
  {
    icon: FileDown,
    title: "PDF Reports",
    description: "Generate professional reports for stakeholders with one click.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Access all features from any device - desktop, tablet, or smartphone.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Role-based permissions for staff at all levels of your organization.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full audit trails and data backups.",
  },
];

export default function SoftwarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-green-900 opacity-90" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234DFF00' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              priority
              unoptimized
              className="mx-auto mb-6 h-auto w-[240px] md:w-[320px]"
            />
            <div className="flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-green-500 font-semibold uppercase tracking-wider">
                RinkReports Software Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rink Reports by Max Facility LLC
            </h1>
            <p className="text-xl text-grey-300 mb-8">
              The all-in-one ice rink management platform that digitizes your
              paper-based systems. Track ice depth, manage operations, schedule
              employees, and generate reports—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-green-400 font-semibold">
              Starting at $49.99/month
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Core Modules</h2>
            <p className="section-subheading">
              Nine powerful modules designed specifically for ice facility
              operations, all working together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div
                key={module.title}
                className="bg-white border border-grey-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <module.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {module.title}
                </h3>
                <p className="text-grey-600 text-sm mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-grey-500"
                    >
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-grey-50">
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
                className="flex items-start p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-navy">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="inline-block rounded-full bg-navy px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#4DFF00]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-grey-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ice Depth Feature Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                Featured Module
              </span>
              <h2 className="section-heading text-left mt-2">
                Works When Your Building Doesn&apos;t Cooperate
              </h2>
              <p className="text-grey-600 mb-6">
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
                  "Built on the same foundation across all nine modules",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
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
              <div className="bg-grey-100 rounded-2xl p-8">
                <div className="aspect-[4/3] bg-white rounded-xl border-2 border-grey-200 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/rinkreports_logo.svg"
                    alt="RinkReports"
                    fill
                    unoptimized
                    className="object-contain p-6"
                  />
                </div>
                <p className="text-center text-grey-500 text-sm mt-4">
                  Offline-first across every module
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-grey-600 mb-8">
              Everything you need to manage your ice facility, at one affordable
              price.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-navy">$49.99</div>
                <div className="text-grey-500">per month</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-grey-200" />
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600">$599.88</div>
                <div className="text-grey-500">per year</div>
              </div>
            </div>
            <ul className="inline-grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-left mb-8">
              {[
                "All 8 core modules included",
                "Implementation support",
                "Staff training",
                "Data migration assistance",
                "Unlimited users",
                "Email & phone support",
              ].map((feature) => (
                <li key={feature} className="flex items-center text-grey-700">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Full Pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-grey-500">
              15% discount for multi-facility subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Schedule a personalized demo and see how RinkReports can transform
            your ice facility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-grey-100 transition-colors"
          >
            Request Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
