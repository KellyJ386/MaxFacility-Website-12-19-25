import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Snowflake,
  Dumbbell,
  Waves,
  Goal,
  Dribbble,
  Users,
  TreePine,
  MoreHorizontal,
  Settings,
  TrendingUp,
  MonitorSmartphone,
  MousePointerClick,
  Mail,
  Globe,
  ArrowRight,
  LayoutDashboard,
  ClipboardList,
  Calendar,
  Wrench,
  ShieldAlert,
  BarChart3,
  MessageSquare,
  Bell,
  Menu,
  Check,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Facility Software",
  description:
    "Custom web applications for recreation and sport facilities. Max Facility designs and builds software around your operations — ice rinks, fitness centers, aquatics, sports fields, gyms, and community centers.",
  keywords: [
    "custom facility software",
    "custom web application",
    "recreation facility software",
    "sports facility management software",
    "parks and recreation software",
    "aquatics facility software",
    "community center software",
  ],
};

const facilityTypes: { icon: LucideIcon; name: string }[] = [
  { icon: Snowflake, name: "Ice Rinks & Arenas" },
  { icon: Dumbbell, name: "Fitness & Rec Centers" },
  { icon: Waves, name: "Aquatics Facilities" },
  { icon: Goal, name: "Sports Fields & Complexes" },
  { icon: Dribbble, name: "Gyms & Sports Courts" },
  { icon: Users, name: "Community Centers" },
  { icon: TreePine, name: "Parks & Outdoor Facilities" },
  { icon: MoreHorizontal, name: "And More Facilities" },
];

const valueProps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Settings,
    title: "Built For You",
    description: "Custom features designed around your specific needs.",
  },
  {
    icon: TrendingUp,
    title: "Improve Efficiency",
    description: "Streamline operations and save time.",
  },
  {
    icon: Users,
    title: "Better Communication",
    description: "Keep your team connected across all departments.",
  },
  {
    icon: MonitorSmartphone,
    title: "Scalable Solutions",
    description:
      "Whether you're a single facility or a multi-site organization.",
  },
];

/** Sidebar entries in the laptop mockup — mirrors the marketing piece. */
const mockupNav = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ClipboardList, label: "Reports" },
  { icon: Calendar, label: "Scheduling" },
  { icon: Wrench, label: "Maintenance" },
  { icon: ShieldAlert, label: "Safety" },
  { icon: Users, label: "People" },
  { icon: MessageSquare, label: "Communications" },
  { icon: Settings, label: "Settings" },
];

const mockupTiles = [
  { icon: ClipboardList, label: "Daily Reports", tone: "bg-sky-100 text-sky-700" },
  { icon: Calendar, label: "Scheduling", tone: "bg-green-100 text-green-700" },
  { icon: Settings, label: "Maintenance", tone: "bg-navy-50 text-navy-500" },
  {
    icon: ShieldAlert,
    label: "Safety & Incidents",
    tone: "bg-red-100 text-red-600",
  },
  { icon: Users, label: "Facility Tasks", tone: "bg-purple-100 text-purple-600" },
  { icon: BarChart3, label: "Analytics", tone: "bg-green-100 text-green-700" },
];

const mockupChecklist = [
  "Ice Conditions",
  "Facility Inspection",
  "Locker Rooms",
  "Concessions",
  "Maintenance",
  "Safety Checks",
];

const mockupPhoneMenu = [
  { icon: ClipboardList, label: "Reports" },
  { icon: Calendar, label: "Schedule" },
  { icon: Check, label: "Tasks" },
  { icon: Mail, label: "Messages" },
  { icon: Settings, label: "Settings" },
];

function DeviceMockup() {
  return (
    <div className="relative select-none" aria-hidden="true">
      {/* Laptop */}
      <div className="rounded-xl bg-navy-800 p-2 shadow-2xl ring-1 ring-navy-900/20">
        <div className="overflow-hidden rounded-lg bg-white">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-grey-200 bg-white px-3 py-2">
            <Menu className="h-3.5 w-3.5 text-grey-500" />
            <div className="flex items-center gap-2 text-grey-400">
              <Bell className="h-3.5 w-3.5" />
              <MessageSquare className="h-3.5 w-3.5" />
              <Users className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden w-32 flex-shrink-0 bg-navy px-2 py-3 sm:block">
              <div className="mb-3 rounded bg-white/95 px-1.5 py-1 text-center text-[7px] font-extrabold leading-none">
                <span className="text-navy">MAX</span>
                <span className="text-green-600">FACILITY</span>
              </div>
              <ul className="space-y-1.5">
                {mockupNav.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-1.5 text-[8px] font-medium text-grey-300"
                  >
                    <item.icon className="h-2.5 w-2.5 flex-shrink-0 text-green-500" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            {/* Main panel */}
            <div className="flex-1 bg-grey-50 p-3">
              <p className="text-sm font-bold text-navy">Welcome</p>
              <p className="mb-3 text-[9px] text-grey-600">Facility Operations</p>
              <div className="grid grid-cols-3 gap-2">
                {mockupTiles.map((tile) => (
                  <div
                    key={tile.label}
                    className="rounded-md bg-white p-2 shadow-sm ring-1 ring-grey-200"
                  >
                    <div
                      className={`mb-1 flex h-5 w-5 items-center justify-center rounded ${tile.tone}`}
                    >
                      <tile.icon className="h-3 w-3" />
                    </div>
                    <p className="text-[8px] font-semibold leading-tight text-navy">
                      {tile.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="mx-auto h-1.5 w-[86%] rounded-b-lg bg-navy-800/80" />

      {/* Tablet */}
      <div className="absolute -bottom-10 right-6 w-40 rounded-lg bg-navy-800 p-1.5 shadow-2xl sm:right-2 sm:w-48">
        <div className="rounded bg-white p-2.5">
          <p className="mb-2 text-[10px] font-bold text-navy">Daily Reports</p>
          <ul className="space-y-1.5">
            {mockupChecklist.map((row) => (
              <li
                key={row}
                className="flex items-center gap-1.5 text-[8px] text-grey-700"
              >
                <span className="flex h-2.5 w-2.5 items-center justify-center rounded-sm bg-green-500">
                  <Check className="h-2 w-2 text-white" />
                </span>
                {row}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute -bottom-14 -right-1 w-20 rounded-lg bg-navy-800 p-1 shadow-2xl sm:-right-6 sm:w-24">
        <div className="rounded bg-white p-1.5">
          <div className="mb-1.5 rounded bg-navy px-1 py-0.5 text-center text-[6px] font-extrabold">
            <span className="text-white">MAX</span>
            <span className="text-green-500">FACILITY</span>
          </div>
          <ul className="space-y-1">
            {mockupPhoneMenu.map((row) => (
              <li
                key={row.label}
                className="flex items-center gap-1 text-[7px] font-medium text-navy"
              >
                <row.icon className="h-2 w-2 flex-shrink-0 text-green-600" />
                {row.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Masthead — mirrors the top band of the Max Facility ad */}
      <section className="bg-white pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="md:w-[38%]">
              <Image
                src="/images/max-facility-logo.png"
                alt="Max Facility"
                width={1612}
                height={756}
                priority
                className="h-auto w-56 md:w-64"
              />
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-navy md:text-xs">
                Custom Solutions. Real Impact.
              </p>
            </div>
            <div className="md:w-[62%] md:border-l-2 md:border-navy md:pl-8">
              <h1 className="text-2xl font-extrabold uppercase leading-tight text-navy md:text-3xl">
                Custom Web Applications
                <br />
                for Recreation &amp; Sport Facilities
              </h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-green-600 md:text-base">
                Built around your operations.
                <br />
                Designed for your people.
              </p>
              <div className="mt-4 h-1 w-24 bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-grey-50 to-white pb-32 pt-8 md:pb-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-navy sm:text-5xl md:text-6xl">
                Tired of
                <br />
                <span className="text-green-500">Cookie-Cutter</span>
                <br />
                Software?
              </h2>
              <div className="my-6 h-1 w-20 bg-green-500" />
              <p className="max-w-lg text-xl font-bold text-navy md:text-2xl">
                Get a custom web application that works the way YOUR facility
                does.
              </p>
              <p className="mt-5 max-w-lg text-grey-700">
                Max Facility designs and builds custom web applications for
                recreational and sport facilities of all sizes. From ice rinks to
                fields, courts, pools and more — we create solutions that simplify
                operations, improve communication, and help your team do more.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/ice-rink#rinkreports" className="btn-outline text-lg px-8 py-4">
                  See a Built Example
                </Link>
              </div>
            </div>

            <div className="lg:pl-6">
              <DeviceMockup />
              <p className="font-script mt-20 text-center text-2xl text-green-600 md:mt-16 md:text-right md:text-3xl">
                Your Facility. Your Workflow. Our Expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility types strip */}
      <section className="border-y border-grey-200 bg-grey-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
            {facilityTypes.map((type) => (
              <div key={type.name} className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-navy">
                  <type.icon className="h-7 w-7 text-navy" strokeWidth={1.75} />
                </div>
                <p className="text-[11px] font-bold uppercase leading-tight tracking-wide text-navy">
                  {type.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className={`px-0 text-center lg:px-8 ${
                  index > 0 ? "lg:border-l lg:border-grey-300" : ""
                }`}
              >
                <prop.icon
                  className="mx-auto mb-4 h-10 w-10 text-navy"
                  strokeWidth={1.75}
                />
                <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-navy">
                  {prop.title}
                </h3>
                <p className="text-sm text-grey-700">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band — green wedge into navy, as in the ad */}
      <section className="bg-navy">
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex items-center gap-5 bg-green-500 px-6 py-8 sm:px-10 lg:w-[52%] lg:py-10 lg:pr-16">
            <MousePointerClick
              className="hidden h-12 w-12 flex-shrink-0 text-white sm:block"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <p className="text-lg font-extrabold uppercase leading-tight text-white sm:text-xl">
                Ready to build a
                <br />
                better solution?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white px-8 py-3 text-base font-extrabold uppercase tracking-wide text-navy transition-colors hover:bg-transparent hover:text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
            {/* Angled edge into the navy panel */}
            <div
              className="absolute inset-y-0 right-0 hidden w-16 translate-x-full bg-green-500 lg:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col justify-center gap-4 px-6 py-8 sm:flex-row sm:items-center sm:gap-10 sm:px-10 lg:w-[48%] lg:justify-end lg:py-10">
            <a
              href="mailto:kelly@maxfacility.com"
              className="flex items-center gap-3 text-white transition-colors hover:text-green-400"
            >
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">kelly@maxfacility.com</span>
            </a>
            <a
              href="https://www.maxfacility.com"
              className="flex items-center gap-3 text-white transition-colors hover:text-green-400"
            >
              <Globe className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">www.maxfacility.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="bg-navy-700 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-extrabold uppercase italic tracking-wide text-white">
            All Facilities. One Partner.
          </p>
          <p className="text-lg font-extrabold uppercase italic tracking-wide text-green-500">
            Max Facility.
          </p>
        </div>
      </section>
    </>
  );
}
