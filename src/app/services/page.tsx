import { Metadata } from "next";
import Link from "next/link";
import {
  Snowflake,
  Users,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Droplets,
  Gauge,
  Shield,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
  Settings,
  FileText,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ice maintenance and facility consulting services from Max Facility. Professional ice care in Central New York, plus expert operational consulting for facilities nationwide.",
};

const maintenanceServices = [
  {
    icon: Thermometer,
    title: "Ice Resurfacing",
    description:
      "Expert resurfacing with precise water temperature and blade depth control for optimal ice quality.",
  },
  {
    icon: Droplets,
    title: "Ice Building",
    description:
      "Professional ice sheet installation and building with industry-best practices and techniques.",
  },
  {
    icon: Gauge,
    title: "Ice Depth Management",
    description:
      "Regular monitoring and maintenance of ice depth using our proprietary tracking systems.",
  },
  {
    icon: Shield,
    title: "Equipment Maintenance",
    description:
      "Comprehensive care for Zamboni machines, edgers, and other ice maintenance equipment.",
  },
];

const maintenanceBenefits = [
  "CIT certified technicians with extensive experience",
  "Consistent ice quality for all skating activities",
  "Reduced operational costs through efficient practices",
  "Flexible scheduling to meet your facility's needs",
  "Emergency response available for critical situations",
  "Detailed documentation and reporting",
];

const consultingServices = [
  {
    icon: ClipboardCheck,
    title: "Operational Assessment",
    description:
      "Comprehensive review of your facility's operations, identifying inefficiencies and improvement opportunities.",
  },
  {
    icon: GraduationCap,
    title: "Staff Training",
    description:
      "Hands-on training programs for ice technicians, managers, and support staff at all experience levels.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "Data-driven strategies to improve ice quality, reduce costs, and enhance customer satisfaction.",
  },
  {
    icon: Settings,
    title: "Equipment Evaluation",
    description:
      "Expert assessment of your ice maintenance equipment with recommendations for upgrades or replacements.",
  },
  {
    icon: FileText,
    title: "Standard Operating Procedures",
    description:
      "Development of customized SOPs tailored to your facility's unique needs and requirements.",
  },
  {
    icon: Calendar,
    title: "Scheduling Optimization",
    description:
      "Analysis and improvement of ice time scheduling to maximize utilization and revenue.",
  },
];

const expertise = [
  "Municipal recreation facilities",
  "University and college arenas",
  "Private ice rinks",
  "Multi-sheet complexes",
  "Olympic training facilities",
  "Youth hockey associations",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your facility, challenges, and goals through detailed discussions.",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "On-site evaluation of operations, equipment, staff, and procedures.",
  },
  {
    step: "03",
    title: "Strategy",
    description:
      "Development of customized recommendations and implementation plan.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "Hands-on support to execute improvements and train your team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy pt-32">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-500/60" />
          <div className="absolute top-1/2 right-0 w-[32rem] h-[32rem] -translate-y-1/2 translate-x-1/3 bg-green-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-grey-300 mb-8">
              From hands-on ice maintenance in Central New York to facility
              consulting nationwide, our certified team helps ice facilities
              run at their best.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ice-maintenance" className="btn-primary">
                Ice Maintenance
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#consulting"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Facility Consulting
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ice Maintenance Section */}
      <section id="ice-maintenance" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Snowflake className="h-8 w-8 text-green-500 mr-3" />
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Central New York
              </span>
            </div>
            <h2 className="section-heading">Ice Maintenance Services</h2>
            <p className="section-subheading">
              Expert ice maintenance and resurfacing services for facilities
              throughout Central New York. Our CIT certified technicians
              deliver consistent, high-quality ice for all skating
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {maintenanceServices.map((service) => (
              <div
                key={service.title}
                className="flex items-start p-6 bg-grey-50 rounded-xl hover:bg-grey-100 transition-colors"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-grey-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Why Choose Our Ice Maintenance?
              </h3>
              <p className="text-grey-600 mb-8">
                Our team brings decades of experience and industry
                certifications to every job, ensuring your ice meets the
                highest standards.
              </p>
              <ul className="space-y-4">
                {maintenanceBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-grey-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Service Area
              </h3>
              <p className="text-grey-300 mb-6">
                We provide ice maintenance services throughout Central New
                York, including:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-grey-300">
                {[
                  "Syracuse",
                  "Utica",
                  "Rome",
                  "Auburn",
                  "Oswego",
                  "Cortland",
                  "Ithaca",
                  "Binghamton",
                ].map((city) => (
                  <li key={city} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Request Service Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Consulting Section */}
      <section id="consulting" className="py-20 bg-grey-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-green-500 mr-3" />
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Northeast / Nationwide
              </span>
            </div>
            <h2 className="section-heading">Facility Consulting Services</h2>
            <p className="section-subheading">
              Transform your ice facility operations with expert consulting
              from industry veterans. Our CIRM and CRA certified consultants
              bring 20+ years of experience to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {consultingServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white border border-grey-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-grey-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Our Consulting Process
              </h3>
              <p className="section-subheading">
                A structured approach to delivering measurable improvements
                for your facility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-grey-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-navy rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Facility Types We Serve
              </h3>
              <ul className="space-y-3">
                {expertise.map((item) => (
                  <li key={item} className="flex items-center text-grey-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Nationwide Coverage
              </h3>
              <p className="text-grey-600 mb-6">
                While we&apos;re based in Central New York, our consulting
                services extend throughout the Northeast and across the
                nation. We&apos;ve worked with facilities of all sizes, from
                community rinks to multi-sheet complexes.
              </p>
              <p className="text-grey-600 mb-6">
                Our consultants travel to your location, providing hands-on
                guidance and support throughout the engagement. Remote
                consulting options are also available for initial
                assessments and follow-up support.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CIT", "CIRM", "CRA"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-full text-sm"
                  >
                    {cert} Certified
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to talk about ice maintenance, facility
            consulting, or both.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-grey-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
