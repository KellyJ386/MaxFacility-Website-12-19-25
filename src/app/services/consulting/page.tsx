import { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
  Settings,
  FileText,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facility Consulting Services",
  description:
    "Expert ice facility consulting services for the Northeast and nationwide. Operational assessments, staff training, and best practices implementation.",
};

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

export default function ConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576466759611-1fc88c3d9e3b?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-green-500 mr-3" />
              <span className="text-green-500 font-semibold uppercase tracking-wider">
                Northeast / Nationwide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ice Facility Consulting Services
            </h1>
            <p className="text-xl text-grey-300 mb-8">
              Transform your ice facility operations with expert consulting from
              industry veterans. Our CIRM and CRA certified consultants bring
              30+ years of experience to every engagement.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Consulting Services</h2>
            <p className="section-subheading">
              Expert guidance to optimize every aspect of your ice facility
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Consulting Process</h2>
            <p className="section-subheading">
              A structured approach to delivering measurable improvements for
              your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
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
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-grey-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h2 className="section-heading text-left">
                Nationwide Coverage
              </h2>
              <p className="text-grey-600 mb-6">
                While we&apos;re based in Central New York, our consulting
                services extend throughout the Northeast and across the nation.
                We&apos;ve worked with facilities of all sizes, from community
                rinks to multi-sheet complexes.
              </p>
              <p className="text-grey-600 mb-6">
                Our consultants travel to your location, providing hands-on
                guidance and support throughout the engagement. Remote
                consulting options are also available for initial assessments
                and follow-up support.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-xl text-grey-300 mb-8">
            Schedule a free initial consultation to discuss your facility&apos;s
            needs and how we can help.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
