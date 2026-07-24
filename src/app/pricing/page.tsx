import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Snowflake, Users, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Max Facility services and RinkReports software. Ice maintenance, consulting, and software solutions starting at $750/year.",
};

const softwarePlans = [
  {
    name: "All Modules",
    description: "Complete ice facility management platform",
    annualPrice: 999,
    highlight: true,
    badge: "Most Popular — All Features Included",
    features: [
      "Ice Depth Monitoring",
      "Ice Operations Log (4 customizable tabs)",
      "Incident Reports with body diagrams",
      "Accident Reports for staff & patrons",
      "Employee Scheduling (up to 1000 employees)",
      "Refrigeration Plant tracking",
      "Air Quality Monitoring",
      "Daily Reports (up to 20 admin-customizable tabs)",
      "Communications Center",
      "Admin Panel with analytics",
      "Bluetooth caliper integration",
      "PDF report generation",
      "Unlimited users",
      "Mobile-friendly access",
      "Implementation support",
      "Staff training included",
      "Data migration assistance",
      "Email & phone support",
    ],
  },
  {
    name: "Ice Depth",
    description: "Ice depth monitoring with custom diagrams and ice operations",
    annualPrice: 750,
    highlight: false,
    badge: null,
    features: [
      "Ice Depth Monitoring",
      "Custom ice depth diagrams",
      "Ice Operations Log (4 customizable tabs)",
      "Bluetooth caliper integration",
      "PDF report generation",
    ],
  },
];

const servicePlans = [
  {
    icon: Snowflake,
    name: "Ice Maintenance",
    description: "Professional ice care for Central NY facilities",
    pricing: "Custom Quote",
    features: [
      "Expert ice resurfacing",
      "Ice building & maintenance",
      "Ice depth management",
      "Equipment maintenance",
      "Emergency response available",
      "CIT certified technicians",
    ],
    note: "Pricing based on facility size and service frequency",
  },
  {
    icon: Users,
    name: "Facility Consulting",
    description: "Expert guidance for Northeast & nationwide",
    pricing: "Custom Quote",
    features: [
      "Operational assessment",
      "Staff training programs",
      "Performance optimization",
      "Equipment evaluation",
      "SOP development",
      "Scheduling optimization",
    ],
    note: "Pricing based on scope and engagement length",
  },
];

const faqs = [
  {
    question: "What's included in the implementation support?",
    answer:
      "Our team will help you set up your facility in RinkReports, configure your custom settings, import any existing data, and train your staff on using the platform effectively.",
  },
  {
    question: "Do you offer discounts for multiple facilities?",
    answer:
      "Yes! We offer a 15% discount for organizations managing 2 or more facilities. Contact us for volume pricing details.",
  },
  {
    question: "How does the consulting pricing work?",
    answer:
      "Consulting engagements are priced based on scope, duration, and travel requirements. We'll provide a detailed proposal after an initial discovery call.",
  },
  {
    question: "How is RinkReports Software billed?",
    answer:
      "RinkReports Software is billed annually. The All Modules plan is $999 per year for the full platform, and the Ice Depth plan is $750 per year for ice depth monitoring with custom diagrams and ice operations.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH bank transfers, and can also accommodate purchase orders for qualifying organizations.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy pt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-grey-300 max-w-2xl mx-auto">
            Choose the solutions that fit your facility&apos;s needs. No hidden
            fees, no surprises.
          </p>
        </div>
      </section>

      {/* Software Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Image
              src="/images/rinkreports_logo.svg"
              alt="RinkReports"
              width={360}
              height={185}
              unoptimized
              className="mx-auto mb-6 h-auto w-[200px] md:w-[260px]"
            />
            <div className="flex items-center justify-center mb-4">
              <Monitor className="h-8 w-8 text-green-500 mr-2" />
              <h2 className="text-2xl font-bold text-navy">RinkReports Software</h2>
            </div>
            <p className="text-grey-600">
              Annual subscriptions billed once per year. Choose the full
              platform or the ice depth package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {softwarePlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl ${
                  plan.highlight
                    ? "border-2 border-green-500"
                    : "border border-grey-200"
                }`}
              >
                {plan.badge && (
                  <div className="bg-green-500 py-4 px-8">
                    <p className="text-center text-white font-semibold">
                      {plan.badge}
                    </p>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-navy mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-grey-500 mb-4">
                      {plan.description}
                    </p>
                    <div
                      className={`text-4xl font-bold ${
                        plan.highlight ? "text-green-600" : "text-navy"
                      }`}
                    >
                      ${plan.annualPrice}
                    </div>
                    <div className="text-grey-500">per year</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-grey-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      href="/contact"
                      className={
                        plan.highlight ? "btn-primary" : "btn-outline"
                      }
                    >
                      Request Information
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-grey-500 mt-8">
            15% discount available for 2+ facility subscriptions
          </p>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Professional Services</h2>
            <p className="section-subheading">
              Custom solutions tailored to your facility&apos;s specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center">
                    <plan.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                    <p className="text-grey-500 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-green-600">
                    {plan.pricing}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-grey-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-grey-500 mb-6">{plan.note}</p>

                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-grey-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-navy mb-2">
                  {faq.question}
                </h3>
                <p className="text-grey-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Pricing?
          </h2>
          <p className="text-xl text-grey-300 mb-8">
            Contact us for a personalized quote or to discuss your
            facility&apos;s specific needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Sales
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
