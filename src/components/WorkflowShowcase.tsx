"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// To add a workflow: put the image in public/images/workflows/, then add an
// entry here (tab label, file, pixel size, and a text description for
// screen readers and search engines). Tabs wrap onto extra rows as they grow.
const workflows = [
  {
    tab: "Connected Rink Workflows",
    src: "/images/workflows/connected-rink-workflows.webp",
    width: 1448,
    height: 1086,
    alt: "Connected rink workflows: one connected system linking all 13 RinkReports modules: daily reports, incident reports, refrigeration plant, air quality monitoring, ice operations log, ice depth monitoring, employee scheduling, accident reports, communications center, admin panel, rink scheduling, dasher boards, and facility paperwork.",
  },
  {
    tab: "One Schedule",
    src: "/images/workflows/one-schedule.webp",
    width: 1672,
    height: 941,
    alt: "One schedule drives the entire rink: a single facility schedule feeds ice operations, locker rooms and facility, employee scheduling, front desk, pro shop and rentals, and concessions.",
  },
  {
    tab: "Facility Automation",
    src: "/images/workflows/booking-to-awareness.webp",
    width: 1672,
    height: 941,
    alt: "From booking to building-wide awareness: one facility booking creates automatic actions and notifies the ice crew, custodial, managers, front desk, pro shop, and concessions.",
  },
  {
    tab: "Ice Operations",
    src: "/images/workflows/ice-operations.webp",
    width: 1672,
    height: 941,
    alt: "Ice operations keep the crew in sync: scheduled ice make, crew notified, edging, blade change, propane change, circle check, and an end-of-day record, summarized in an ice operations dashboard.",
  },
  {
    tab: "Centralized Reporting",
    src: "/images/workflows/every-area-reports.webp",
    width: 1672,
    height: 941,
    alt: "Every area reports and everyone stays informed: front desk, ice operations, locker rooms, safety reporting, refrigeration, air quality, employee scheduling, and communications all connect to the Rink Reports hub.",
  },
  {
    tab: "Manager View",
    src: "/images/workflows/manager-view.webp",
    width: 1672,
    height: 941,
    alt: "Know what's happening even when you're not there: a manager view shows open tasks, follow-ups, coverage, incidents, air quality, and refrigeration status across daily reports, ice operations, facility tasks, scheduling, safety, and compliance.",
  },
  {
    tab: "Reporting & Risk Management",
    src: "/images/workflows/reporting-risk-management.webp",
    width: 1448,
    height: 1086,
    alt: "Reporting and risk management: observe, report, respond, prevent. A daily report escalates to an incident report, and an incident involving an injury becomes an accident report, each with its own workflow, feeding a learn-and-improve loop.",
  },
  {
    tab: "Air Quality Monitoring",
    src: "/images/workflows/air-quality-monitoring-v2.webp",
    width: 1448,
    height: 1086,
    alt: "Air quality monitoring: monitor, detect, alert, act, verify. Readings are compared to configured limits, an out-of-range alert is sent to the right people, corrective action is taken, and safe levels are confirmed, with history and records kept for compliance.",
  },
];

/** Pill tabs that switch between the RinkReports workflow graphics. */
export default function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  const w = workflows[active];

  function select(i: number, el: HTMLElement) {
    setActive(i);
    el.scrollIntoView?.({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="RinkReports workflows"
        className="mx-auto mb-8 flex max-w-5xl gap-2 overflow-x-auto rounded-[2rem] bg-white p-2 shadow-soft [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {workflows.map((item, i) => (
          <button
            key={item.tab}
            role="tab"
            aria-selected={i === active}
            onClick={(e) => select(i, e.currentTarget)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full px-5 py-3 font-display text-sm font-semibold transition-all",
              i === active
                ? "bg-gradient-to-r from-navy to-navy-500 text-white shadow-md"
                : "text-navy hover:bg-navy-50"
            )}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className="card-soft mx-auto max-w-6xl overflow-hidden p-2 sm:p-3"
      >
        {/* The graphics carry small text, so on phones they scroll sideways at a
            readable size instead of shrinking to fit. */}
        <div className="overflow-x-auto rounded-2xl md:overflow-visible">
          <div className="min-w-[960px] md:min-w-0">
            {workflows.map((item, i) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                priority={i === 0}
                sizes="(min-width: 1152px) 1152px, 960px"
                className={cn("h-auto w-full rounded-2xl", i !== active && "hidden")}
              />
            ))}
          </div>
        </div>
        <p className="flex items-center justify-between gap-3 px-3 pb-2 pt-3 text-xs text-grey-600 md:hidden">
          <span>Swipe sideways to read the full graphic</span>
          <a
            href={w.src}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold text-navy underline"
          >
            Open full size
          </a>
        </p>
      </div>
    </div>
  );
}
