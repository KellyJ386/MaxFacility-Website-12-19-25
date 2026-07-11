import { Metadata } from "next";
import Link from "next/link";
import {
  Snowflake,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Droplets,
  Gauge,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ice Maintenance Services",
  description:
    "Professional ice maintenance and resurfacing services in Central New York. Expert care for optimal ice quality from CIT certified technicians.",
};

const services = [
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

const benefits = [
  "CIT certified technicians with extensive experience",
  "Consistent ice quality for all skating activities",
  "Reduced operational costs through efficient practices",
  "Flexible scheduling to meet your facility's needs",
  "Emergency response available for critical situations",
  "Detailed documentation and reporting",
];

export default function IceMaintenancePage() {
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
            <div className="flex items-center mb-4">
              <Snowflake className="h-8 w-8 text-green-500 mr-3" />
              <span className="text-green-500 font-semibold uppercase tracking-wider">
                Central New York
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Ice Maintenance Services
            </h1>
            <p className="text-xl text-grey-300 mb-8">
              Expert ice maintenance and resurfacing services for facilities
              throughout Central New York. Our CIT certified technicians deliver
              consistent, high-quality ice for all skating activities.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Service Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Maintenance Services</h2>
            <p className="section-subheading">
              Comprehensive ice maintenance solutions to keep your facility
              operating at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left">
                Why Choose Our Ice Maintenance?
              </h2>
              <p className="text-grey-600 mb-8">
                Our team brings decades of experience and industry certifications
                to every job, ensuring your ice meets the highest standards.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
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
                We provide ice maintenance services throughout Central New York,
                including:
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Ice Maintenance Services?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free assessment of your facility&apos;s ice
            maintenance needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-grey-100 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
