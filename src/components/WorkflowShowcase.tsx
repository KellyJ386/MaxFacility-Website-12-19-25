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

  return (
    <div>
      <div
        role="tablist"
        aria-label="RinkReports workflows"
        className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-2 rounded-[2rem] bg-white p-2 shadow-soft"
      >
        {workflows.map((item, i) => (
          <button
            key={item.tab}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-5 py-3 font-display text-sm font-semibold transition-all",
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
        {workflows.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={1672}
            height={941}
            priority={i === 0}
            sizes="(min-width: 1152px) 1152px, 100vw"
            className={cn("h-auto w-full rounded-2xl", i !== active && "hidden")}
          />
        ))}
      </div>
    </div>
  );
}
