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
    alt: "Connected rink workflows: one connected system linking all 13 RinkReports modules: daily reports, incident reports, refrigeration plant, air quality monitoring, ice operations log, ice depth tracking, employee scheduling, accident reports, communications center, admin panel, rink scheduling, dasher boards, and facility paperwork.",
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
    alt: "Air quality monitoring: monitor, detect, alert, act, verify. Staff-logged readings are compared to configured limits, an out-of-range alert is emailed instantly to all management, corrective action is taken, and safe levels are confirmed, with history and records kept for compliance.",
  },
  {
    tab: "Refrigeration Plant",
    src: "/images/workflows/refrigeration-plant-v2.webp",
    width: 1448,
    height: 1086,
    alt: "Refrigeration plant: staff input, track, monitor, alert, take action. Ice techs, managers, or supervisors enter plant readings, notes, and observations. Readings are saved with date, time, and employee name, RinkReports compares them to the facility's configured thresholds, out-of-range notifications appear for the right people, they review and investigate, and all entries are stored as a historical record for trend reports, exports, and inspections.",
  },
  {
    tab: "Ice Operations & Ice Quality",
    src: "/images/workflows/ice-operations-ice-quality-v2.webp",
    width: 1448,
    height: 1086,
    alt: "Ice operations and ice quality: one connected ice operation. A schedule triggers the ice make, the resurfacer makes ice, then circle check, edging, blade change, propane change, and ice depth check, followed by trend review, quality improvement, and the ice operations log.",
  },
  {
    tab: "Schedule-Driven Workflows",
    src: "/images/workflows/schedule-driven-workflows-v2.webp",
    width: 1448,
    height: 1086,
    alt: "Schedule-driven workflows: a rink scheduling event and employee scheduling drive the whole building. The schedule triggers the ice make, assigns employees, creates locker room and party room cleaning tasks, notifies the pro shop and concessions, and informs the front desk.",
  },
  {
    tab: "Communication & Oversight",
    src: "/images/workflows/communication-oversight.webp",
    width: 1448,
    height: 1086,
    alt: "Communication and oversight: incident reports, daily reports, ice operations, maintenance, air quality, and scheduling feed the communications center and admin panel, so frontline staff, managers, facility leaders, and ownership each get the right information, with role-based control and real-time visibility.",
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
        className="mx-auto mb-8 flex max-w-6xl gap-2 overflow-x-auto rounded-[2rem] bg-white p-2 shadow-soft [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
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
        {/* From tablet up the graphic fits the width (pinch to zoom for detail);
            below that it scrolls sideways at a readable size. */}
        <div className="overflow-x-auto rounded-2xl sm:overflow-visible">
          <div className="min-w-[960px] sm:min-w-0">
            {workflows.map((item, i) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                priority={i === 0}
                sizes="(min-width: 1152px) 1152px, (min-width: 640px) 100vw, 960px"
                className={cn("h-auto w-full rounded-2xl", i !== active && "hidden")}
              />
            ))}
          </div>
        </div>
        <p className="flex items-center justify-between gap-3 px-3 pb-2 pt-3 text-xs text-grey-600 sm:hidden">
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
