"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const workflows = [
  {
    tab: "One Schedule",
    src: "/images/workflows/one-schedule.webp",
    alt: "One schedule drives the entire rink: a single facility schedule feeds ice operations, locker rooms and facility, employee scheduling, front desk, pro shop and rentals, and concessions.",
  },
  {
    tab: "Booking to Awareness",
    src: "/images/workflows/booking-to-awareness.webp",
    alt: "From booking to building-wide awareness: one facility booking creates automatic actions and notifies the ice crew, custodial, managers, front desk, pro shop, and concessions.",
  },
  {
    tab: "Ice Operations",
    src: "/images/workflows/ice-operations.webp",
    alt: "Ice operations keep the crew in sync: scheduled ice make, crew notified, edging, blade change, propane change, circle check, and an end-of-day record, summarized in an ice operations dashboard.",
  },
  {
    tab: "Every Area Reports",
    src: "/images/workflows/every-area-reports.webp",
    alt: "Every area reports and everyone stays informed: front desk, ice operations, locker rooms, safety reporting, refrigeration, air quality, employee scheduling, and communications all connect to the Rink Reports hub.",
  },
  {
    tab: "Manager View",
    src: "/images/workflows/manager-view.webp",
    alt: "Know what's happening even when you're not there: a manager view shows open tasks, follow-ups, coverage, incidents, air quality, and refrigeration status across daily reports, ice operations, facility tasks, scheduling, safety, and compliance.",
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
        className="mx-auto mb-8 flex max-w-4xl gap-2 overflow-x-auto rounded-[2rem] bg-white p-2 shadow-soft [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
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
                width={1672}
                height={941}
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
