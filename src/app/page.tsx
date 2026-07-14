import Link from "next/link";
import {
  Snowflake,
  Users,
  Monitor,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    name: "Ice Maintenance",
    description:
      "Professional ice maintenance and resurfacing services for facilities throughout Central New York. Expert care for optimal ice quality.",
    icon: Snowflake,
    href: "/services/ice-maintenance",
    location: "Central New York",
  },
  {
    name: "Facility Consulting",
    description:
      "Comprehensive operational assessments, staff training, and best practices implementation for ice facilities across the Northeast and nationwide.",
    icon: Users,
    href: "/services/consulting",
    location: "Northeast / Nationwide",
  },
  {
    name: "MFO Software",
    description:
      "All-in-one ice rink management platform. Digitize operations, track ice depth, manage schedules, and generate reports effortlessly.",
    icon: Monitor,
    href: "/software",
    price: "$49.99/month",
  },
];

const certifications = [
  {
    abbr: "CIT",
    name: "Certified Ice Technician",
    description: "NHL/US Ice Rink Association",
  },
  {
    abbr: "CIRM",
    name: "Certified Ice Rink Manager",
    description: "Industry-recognized credential",
  },
  {
    abbr: "CRA",
    name: "Certified Rink Administrator",
    description: "Operations excellence",
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "100+", label: "Facilities Served" },
  { value: "500+", label: "Staff Trained" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy to-navy-500/60" />
          <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-green-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-52 -left-40 w-[30rem] h-[30rem] bg-navy-400/25 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo splash: brand wordmark over the rink measurement grid */}
          <div className="mx-auto mb-10 w-full max-w-md">
            <div className="relative rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-white/10 sm:p-6">
              <div
                className="relative w-full"
                style={{ aspectRatio: "740 / 380" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rink-diagram.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/max-facility-logo.png"
                  alt="Max Facility"
                  className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevating Ice Rink Operations
            <br />
            <span className="text-green-500">Through Expert Solutions</span>
          </h1>
          <p className="text-xl text-grey-300 max-w-3xl mx-auto mb-10">
            30+ years of experience optimizing operations, reducing costs, and
            enhancing user experiences at ice facilities across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/software" className="btn-secondary text-lg px-8 py-4">
              Explore Our Software
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive solutions for ice facility operations, from hands-on
              maintenance to cutting-edge software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white border border-grey-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                  <service.icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.name}
                </h3>
                <p className="text-grey-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">
                    {service.location || service.price}
                  </span>
                  <Link
                    href={service.href}
                    className="text-navy font-semibold text-sm hover:text-green-600 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-grey-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Industry Certifications</h2>
            <p className="section-subheading">
              Our team holds the highest credentials in ice facility management,
              ensuring expert service for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-500">
                    {cert.abbr}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{cert.name}</h3>
                <p className="text-sm text-grey-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left">
                Why Choose Max Facility?
              </h2>
              <p className="text-grey-600 mb-8">
                We combine decades of hands-on experience with modern technology
                to deliver unmatched value for ice facility operations.
              </p>
              <ul className="space-y-4">
                {[
                  "Certified experts with 30+ years in ice operations",
                  "Comprehensive software that digitizes paper systems",
                  "Proven track record with 100+ facilities served",
                  "Personalized consulting tailored to your needs",
                  "Ongoing support and training for your staff",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-grey-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-grey-100 rounded-2xl p-8 relative">
                {/* Mock MFO dashboard preview */}
                <div className="bg-navy rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <Monitor className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          MFO Dashboard
                        </div>
                        <div className="text-grey-400 text-xs">
                          Central Ice Arena
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">
                      Ice: Optimal
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 200 85"
                    fill="none"
                    className="w-full rounded-lg bg-navy-700 mb-5"
                    aria-hidden="true"
                  >
                    <rect x="8" y="8" width="184" height="69" rx="18" fill="#f0f9ff" fillOpacity="0.08" stroke="#69BE28" strokeOpacity="0.4" strokeWidth="1" />
                    <line x1="100" y1="8" x2="100" y2="77" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
                    <circle cx="100" cy="42.5" r="13" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
                    <line x1="66" y1="8" x2="66" y2="77" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
                    <line x1="134" y1="8" x2="134" y2="77" stroke="white" strokeOpacity="0.25" strokeWidth="0.75" />
                    {[
                      [36, 24],
                      [36, 61],
                      [66, 42.5],
                      [100, 24],
                      [100, 61],
                      [134, 42.5],
                      [164, 24],
                      [164, 61],
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="3.5" fill="#69BE28" />
                    ))}
                  </svg>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '1.25"', label: "Avg Ice Depth" },
                      { value: "12/12", label: "Checks Done" },
                      { value: "8", label: "Staff On Shift" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-lg px-3 py-2.5 text-center"
                      >
                        <div className="text-green-400 font-bold">
                          {stat.value}
                        </div>
                        <div className="text-grey-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                  30+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Ice Facility Operations?
          </h2>
          <p className="text-xl text-grey-300 mb-8">
            Schedule a free consultation with our certified experts and discover
            how we can help optimize your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
