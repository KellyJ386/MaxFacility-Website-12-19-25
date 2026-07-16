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
 * Order and copy mirror rinkreports.com. The module count shown on the
 * /software page (header and pricing block) is derived from this array's
 * length via `moduleCount`, so there is one place to change the count.
 */
export const modules: SoftwareModule[] = [
  {
    icon: FileText,
    title: "Daily Reports",
    description:
      "Highly customizable daily reporting with up to 20 admin-configurable tabs.",
    features: [
      "Up to 20 admin-configurable tabs, one for every area of your facility",
      "Each tab saves independently — no waiting on other departments to finish",
      "Reports lock and submit at end of day for a clean, tamper-proof record",
      "Full historical archive with PDF export",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Reports",
    description:
      "Complete incident documentation with interactive body diagrams and photo uploads.",
    features: [
      "Document on-ice incidents and unusual occurrences in real time",
      "Interactive body diagram for precise injury location",
      "Photo uploads and witness statements attached to every report",
      "Trend tracking to spot recurring problem areas",
    ],
  },
  {
    icon: Thermometer,
    title: "Refrigeration Plant",
    description:
      "Track compressor readings, brine temperatures, and maintain compliance records.",
    features: [
      "Compressor count and readings-per-shift configured by your admin, not hardcoded",
      "Log suction, discharge, and oil pressure, amps, oil temp, and brine supply/return/flow",
      "Normal operating ranges displayed inline as staff enter readings",
      "Complete compliance history, audit-ready at any time",
    ],
  },
  {
    icon: Wind,
    title: "Air Quality Monitoring",
    description:
      "Jurisdiction-aware CO and NO2 logging that knows your state's regulatory floor.",
    features: [
      "Jurisdiction-aware CO and NO₂ thresholds — the system knows your state's regulatory floor",
      "Four-tier escalation from routine logging to alarm response",
      "Admins can tighten standards, never loosen them",
      "Audit-ready exceedance and compliance history",
    ],
  },
  {
    icon: ClipboardList,
    title: "Ice Operations Log",
    description:
      "Comprehensive logging system with 4 customizable tabs for all ice-related activities.",
    features: [
      "Four-tab structure covering every ice activity: resurfacer runs, circle checks, edging, blade changes",
      "Operation and equipment types are admin-configurable to match your fleet",
      "Operator assignment and automatic timestamps on every entry",
      "Complete maintenance history for every sheet of ice",
    ],
  },
  {
    icon: Ruler,
    title: "Ice Depth Monitoring",
    description:
      "Interactive rink diagrams with admin-built measurement templates and Bluetooth caliper support. Track ice depth trends over time.",
    features: [
      "Interactive rink diagrams with admin-built measurement point templates",
      "Bluetooth caliper integration — readings flow straight from the tool to the app",
      "Numbered measurement points on your custom rink layout",
      "Historical trend analysis to catch buildup and thin spots early",
    ],
  },
  {
    icon: Calendar,
    title: "Employee Scheduling",
    description:
      "Powerful scheduling system designed for facilities with up to 1000 employees.",
    features: [
      "Built for facilities with up to 1,000 employees",
      "Shift management with role-based access at every level",
      "Published schedules locked against unauthorized changes",
      "Mobile sign-off so staff confirm shifts from anywhere",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Accident Reports",
    description:
      "Separate staff and patron injury workflows with workers' comp documentation and risk reporting.",
    features: [
      "Separate workflows for staff and patron injuries",
      "Workers' comp documentation captured at the time of the incident",
      "Structured forms ensure nothing is missed under pressure",
      "Injury trends and reporting for insurance and risk management",
    ],
  },
  {
    icon: Megaphone,
    title: "Communications Center",
    description:
      "Facility-wide alerts, schedule-linked reminders, and targeted staff messaging in one place.",
    features: [
      "Facility-wide alerts pushed to all staff instantly",
      "Shift reminders tied directly to the published schedule",
      "Targeted messages by role, department, or facility",
      "Message history so nothing gets lost in a group text",
    ],
  },
  {
    icon: Settings,
    title: "Admin Panel",
    description:
      "Comprehensive administration tools for facility managers and supervisors.",
    features: [
      "User management across the full five-tier role hierarchy",
      "Permission controls down to the module level",
      "System configuration for every module — tabs, thresholds, equipment, templates",
      "Analytics dashboard with facility-wide visibility",
    ],
  },
];

/** Number of modules, derived from the array — the single source of truth. */
export const moduleCount = modules.length;
