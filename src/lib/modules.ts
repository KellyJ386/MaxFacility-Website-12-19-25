import {
  FileText,
  AlertTriangle,
  Thermometer,
  Wind,
  ClipboardList,
  Ruler,
  Calendar,
  ShieldAlert,
  Megaphone,
  Fence,
  FileStack,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface SoftwareModule {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

/**
 * Canonical RinkReports module list — single source of truth for the site.
 * Mirrors the 11 enabled `facility_modules` keys in the product database.
 * The module count shown on the /software page (header and pricing block)
 * is derived from this array's length via `moduleCount`, so there is one
 * place to change the count. The Admin Control Center is configuration
 * surface, not a facility_modules row, so it is defined separately below
 * and excluded from this array and from `moduleCount`.
 */
export const modules: SoftwareModule[] = [
  {
    icon: FileText,
    title: "Daily Reports",
    description:
      "Highly customizable daily reporting with up to 30 admin-configurable areas.",
    features: [
      "Up to 30 admin-configurable areas, one for every part of your facility",
      "Opening, Daily, and Closing templates for each area",
      "Each area saves independently — no waiting on other departments to finish",
      "Reports lock and submit at end of day for a clean, tamper-proof record",
    ],
  },
  {
    icon: Ruler,
    title: "Ice Depth",
    description:
      "Interactive rink diagrams with admin-built measurement templates and historical trend tracking.",
    features: [
      "Interactive rink diagrams with admin-built measurement point templates",
      "Up to 8 layouts per facility, each with up to 60 measurement points",
      "Threshold snapshots preserve the normal range in effect at the time of each reading",
      "Historical trend analysis to catch buildup and thin spots early",
    ],
  },
  {
    icon: ClipboardList,
    title: "Ice Operations",
    description:
      "Comprehensive logging system covering every ice-related activity, from resurfacing to blade changes.",
    features: [
      "Four operation types: Ice Make, Circle Check, Edging, and Blade Change",
      "Equipment and fuel types are admin-configurable to match your fleet",
      "Operator assignment and automatic timestamps on every entry",
      "Complete maintenance history for every sheet of ice",
    ],
  },
  {
    icon: Thermometer,
    title: "Refrigeration",
    description:
      "Track compressor readings, brine temperatures, and maintain compliance records.",
    features: [
      "Configurable sections and equipment across your refrigeration plant, not hardcoded",
      "27 field types covering pressures, temperatures, amps, and flow",
      "Normal operating ranges displayed inline, with automatic out-of-range alerting",
      "Complete compliance history, audit-ready at any time",
    ],
  },
  {
    icon: Wind,
    title: "Air Quality",
    description:
      "Jurisdiction-aware CO, CO2, and NO2 logging that knows your state's regulatory floor.",
    features: [
      "CO, CO2, and NO2 logging with jurisdiction-aware thresholds",
      "Binding compliance profiles for Massachusetts and Minnesota; guidance profiles for Wisconsin and USIRA",
      "Four-tier escalation from routine logging to alarm response",
      "Admins can tighten standards, never loosen them",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Reports",
    description:
      "Complete incident documentation with configurable types, severities, and witness tracking.",
    features: [
      "Document on-ice incidents and unusual occurrences in real time",
      "Configurable incident types and severity levels for your facility",
      "Witness statements and facility space tagging on every report",
      "Trend tracking to spot recurring problem areas",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Accident Reports",
    description:
      "Separate staff and patron injury workflows with a full body diagram and medical tracking.",
    features: [
      "17-region interactive body diagram for precise injury location",
      "Configurable injury types and medical attention tracking",
      "Separate workflows for staff and patron injuries, including workers' comp documentation",
      "24-hour edit window, then a permanent audit trail",
    ],
  },
  {
    icon: Fence,
    title: "Dasher Boards",
    description:
      "Permanent per-asset labeling and spatial issue tracking for everything around the perimeter.",
    features: [
      "Every board, glass panel, and door tracked as a permanent, never-reused asset label",
      "Spatial issue tracking pins problems to the exact asset on a rink diagram",
      "Weekly and monthly cadenced checklists alongside day-to-day condition checks",
      "Open issues carry forward until resolved, with a full resolution history",
    ],
  },
  {
    icon: Calendar,
    title: "Employee Scheduling",
    description:
      "Powerful scheduling system built around templates, shift swaps, and certification requirements.",
    features: [
      "Recurring schedule templates with open shifts staff can claim",
      "Shift swap and coverage requests with optional manager approval",
      "Employee availability tracked and enforced when building shifts",
      "Certification gating keeps uncertified staff off restricted job areas",
    ],
  },
  {
    icon: Megaphone,
    title: "Communications",
    description:
      "Facility-wide alerts, routing rules, and targeted messaging in one place.",
    features: [
      "Alerts generated automatically by every other module, routed by rule",
      "Groups and routing rules by role, department, or facility",
      "Acknowledgement tracking so nothing gets lost in a group text",
      "Full message history for every alert and conversation",
    ],
  },
  {
    icon: FileStack,
    title: "Facility Paperwork",
    description:
      "A central library for the documents every facility needs on hand.",
    features: [
      "Upload and organize policies, manuals, and emergency action plans",
      "One browsable library instead of scattered binders and shared drives",
      "Available to staff and admins wherever they're working",
      "Kept alongside every other module in the same offline-first platform",
    ],
  },
];

/** Number of modules, derived from the array — the single source of truth. */
export const moduleCount = modules.length;

/**
 * The configuration surface behind every module. Deliberately not a
 * facility_modules row and not counted in `moduleCount` — see H2 in the
 * Part 2 discrepancy register.
 */
export const adminControlCenter: SoftwareModule = {
  icon: Settings,
  title: "Admin Control Center",
  description:
    "The configuration surface behind every module — where facility admins set it all up.",
  features: [
    "User management across the full role hierarchy",
    "Permission controls down to the module level",
    "System configuration for every module — areas, thresholds, equipment, templates",
    "Facility-wide analytics dashboard",
  ],
};
