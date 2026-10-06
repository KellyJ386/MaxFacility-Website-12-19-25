import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Workflow,
  ClipboardList,
  BarChart3,
  Plug,
  Smartphone,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Custom Facility Software",
  description:
    "No more cookie-cutter software. Max Facility designs and builds custom software around the way your facility actually runs.",
};

const problems = [
  "Your staff works around the software instead of with it",
  "Features you never use, and the ones you need are missing",
  "Paper logs and spreadsheets still fill the gaps",
  "Reports that don't answer the questions you actually ask",
  "Paying for a one-size-fits-all product built for someone else",
];

const solutions = [
  "Built around your workflows, your equipment and your team",
  "Only the tools you need, shaped the way you work",
  "Replaces paper, spreadsheets and disconnected tools",
  "Reports and dashboards designed for your decisions",
  "Grows and changes with your facility",
];

const capabilities = [
  {
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Daily operations, maintenance routines and approvals mapped to the way your facility really runs.",
  },
  {
    icon: ClipboardList,
    title: "Logs, Checklists & Forms",
    description:
      "Digital inspections, readings and checklists that replace clipboards and give you a searchable record.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description:
      "See the numbers that matter to you, from operations to compliance to budget.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect to the systems you already use so information is entered once and available everywhere.",
  },
  {
    icon: Smartphone,
    title: "Built for the Floor",
    description:
      "Simple, fast tools that work on the devices your staff actually carry, not just at a desk.",
  },
  {
    icon: Users,
    title: "Roles & Access",
    description:
      "The right view for operators, managers and owners, with permissions that fit your organization.",
  },
];

const steps = [
  {
    step: "01",
    title: "Listen",
    description:
      "We learn how your facility runs, where the friction is and what you wish your software did.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We map out the solution with you, so you see what you're getting before we build it.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We develop and refine it with your team's feedback, in stages, not one big reveal.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We train your staff, stay on call, and keep improving the software as your needs change.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 pt-40 pb-24">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-green-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-green-500 font-semibold uppercase tracking-wider mb-4">
              Custom Facility Software
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Software built for your facility. Not everyone else&apos;s.
            </h1>
            <p className="text-xl text-grey-300 mb-8">
              Cookie-cutter software doesn&apos;t work. Every facility runs
              differently, and Max Facility can help you create the perfect
              software for yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Tell Us What You Need
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24">
        <Reveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Why off-the-shelf software falls short
              </h2>
              <p className="section-subheading">
                Generic products are designed for the average facility, and no
                facility is average. You end up changing your operation to fit
                the software, when it should be the other way around.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-grey-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-navy mb-6">
                  Cookie-cutter software
                </h3>
                <ul className="space-y-4">
                  {problems.map((item) => (
                    <li key={item} className="flex items-start">
                      <XCircle className="h-6 w-6 text-grey-400 mr-3 flex-shrink-0" />
                      <span className="text-grey-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Custom software from Max Facility
                </h3>
                <ul className="space-y-4">
                  {solutions.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-grey-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="bg-soft-fade py-24">
        <Reveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">What we can build for you</h2>
              <p className="section-subheading">
                We combine hands-on facility experience with software
                development, so what we build makes sense on the floor, not
                just on a screen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white border border-grey-200 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-grey-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="py-24">
        <Reveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-heading">How it works</h2>
              <p className="section-subheading">
                A simple, collaborative process, from first conversation to a
                working tool in your team&apos;s hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-navy-900">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-grey-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-700 via-navy to-navy-500 py-16 shadow-float">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s build the right software for your facility
              </h2>
              <p className="text-xl text-grey-300 mb-8">
                Tell us what&apos;s not working today. We&apos;ll show you what
                it could look like.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-900 bg-green-500 rounded-full hover:bg-green-400 transition-colors"
              >
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
