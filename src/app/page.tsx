import Link from "next/link";
import Image from "next/image";
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
    description: "US Ice Rink Association",
    logo: "/images/certs/cit.png",
  },
  {
    abbr: "CIRM",
    name: "Certified Ice Rink Manager",
    description: "US Ice Rink Association",
    logo: "/images/certs/cirm.png",
  },
  {
    abbr: "CRA",
    name: "Certified Rink Administrator",
    description: "US Ice Rink Association",
    logo: "/images/certs/cra.png",
  },
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
          <div className="mx-auto mb-10 w-full max-w-3xl">
            <div
              className="relative w-full"
              style={{ aspectRatio: "740 / 380" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/rink-diagram.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full drop-shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/max-facility-logo.png"
                alt="Max Facility"
                className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2"
              />
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
                <div className="flex items-center justify-center h-28 mb-4">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} (${cert.abbr}) certification logo`}
                    width={220}
                    height={160}
                    className="max-h-28 w-auto object-contain"
                  />
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
                {/* Ice hockey rink diagram */}
                <div className="bg-white rounded-xl p-4 shadow-lg ring-1 ring-grey-200">
                  <svg
                    viewBox="0 0 1480 760"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Ice hockey rink diagram with faceoff circles, zone lines, and player positioning markers"
                  >
                    {/* Rink surface */}
                    <rect
                      x="185"
                      y="130"
                      width="1150"
                      height="500"
                      rx="95"
                      fill="#e9f2f9"
                      stroke="#0a2342"
                      strokeWidth="12"
                    />

                    {/* Blue lines */}
                    <line x1="590" y1="130" x2="590" y2="630" stroke="#1b5fc1" strokeWidth="8" />
                    <line x1="930" y1="130" x2="930" y2="630" stroke="#1b5fc1" strokeWidth="8" />

                    {/* Center red line */}
                    <line
                      x1="760"
                      y1="130"
                      x2="760"
                      y2="630"
                      stroke="#d1131a"
                      strokeWidth="6"
                      strokeDasharray="18 14"
                    />

                    {/* Goal lines */}
                    <line x1="250" y1="176" x2="250" y2="584" stroke="#d1131a" strokeWidth="4" />
                    <line x1="1270" y1="176" x2="1270" y2="584" stroke="#d1131a" strokeWidth="4" />

                    {/* Goal-line board hash fans */}
                    {[
                      [
                        [212, 210, 250, 226],
                        [200, 246, 250, 258],
                        [200, 502, 250, 502],
                        [212, 550, 250, 534],
                      ],
                      [
                        [1308, 210, 1270, 226],
                        [1320, 246, 1270, 258],
                        [1320, 502, 1270, 502],
                        [1308, 550, 1270, 534],
                      ],
                    ]
                      .flat()
                      .map(([x1, y1, x2, y2], i) => (
                        <line
                          key={`hash-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#d1131a"
                          strokeWidth="3"
                        />
                      ))}

                    {/* Goal creases */}
                    <path
                      d="M250 356 A30 30 0 0 1 250 404"
                      fill="#bcdcf0"
                      stroke="#d1131a"
                      strokeWidth="3"
                    />
                    <path
                      d="M1270 356 A30 30 0 0 0 1270 404"
                      fill="#bcdcf0"
                      stroke="#d1131a"
                      strokeWidth="3"
                    />

                    {/* Center faceoff circle */}
                    <circle cx="760" cy="380" r="90" fill="none" stroke="#1b5fc1" strokeWidth="4" />
                    <circle cx="760" cy="380" r="9" fill="#1b5fc1" />

                    {/* End-zone faceoff circles with hash marks and dots */}
                    {[
                      [330, 255],
                      [330, 505],
                      [1190, 255],
                      [1190, 505],
                    ].map(([cx, cy], i) => (
                      <g key={`faceoff-${i}`}>
                        <circle cx={cx} cy={cy} r="88" fill="none" stroke="#d1131a" strokeWidth="4" />
                        <line x1={cx - 8} y1={cy - 98} x2={cx - 8} y2={cy - 74} stroke="#d1131a" strokeWidth="3" />
                        <line x1={cx + 8} y1={cy - 98} x2={cx + 8} y2={cy - 74} stroke="#d1131a" strokeWidth="3" />
                        <line x1={cx - 8} y1={cy + 74} x2={cx - 8} y2={cy + 98} stroke="#d1131a" strokeWidth="3" />
                        <line x1={cx + 8} y1={cy + 74} x2={cx + 8} y2={cy + 98} stroke="#d1131a" strokeWidth="3" />
                        <circle cx={cx} cy={cy} r="9" fill="#d1131a" />
                      </g>
                    ))}

                    {/* Neutral-zone faceoff dots */}
                    {[
                      [615, 255],
                      [615, 505],
                      [905, 255],
                      [905, 505],
                    ].map(([cx, cy], i) => (
                      <circle key={`ndot-${i}`} cx={cx} cy={cy} r="9" fill="#d1131a" />
                    ))}

                    {/* Player positioning markers (two teams) */}
                    {[
                      // Left end-zone clusters
                      [252, 177, "green"], [408, 177, "navy"], [252, 333, "navy"], [408, 333, "green"],
                      [252, 427, "navy"], [408, 427, "green"], [252, 583, "green"], [408, 583, "navy"],
                      // Right end-zone clusters
                      [1112, 177, "navy"], [1268, 177, "green"], [1112, 333, "green"], [1268, 333, "navy"],
                      [1112, 427, "green"], [1268, 427, "navy"], [1112, 583, "navy"], [1268, 583, "green"],
                      // Zone columns
                      [490, 190, "green"], [490, 300, "navy"], [490, 375, "green"], [490, 460, "navy"], [490, 570, "green"],
                      [1030, 190, "navy"], [1030, 300, "green"], [1030, 375, "navy"], [1030, 460, "green"], [1030, 570, "navy"],
                      // Center column
                      [760, 190, "navy"], [760, 290, "green"], [760, 470, "green"], [760, 570, "navy"],
                    ].map(([x, y, color], i) => (
                      <g key={`marker-${i}`}>
                        <circle
                          cx={x}
                          cy={y}
                          r="17"
                          fill={color === "green" ? "#e4f2d6" : "#dbe4f1"}
                          stroke={color === "green" ? "#5bb02f" : "#12325b"}
                          strokeWidth="2.5"
                          strokeDasharray="3 3"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r="8.5"
                          fill={color === "green" ? "#5bb02f" : "#12325b"}
                        />
                      </g>
                    ))}
                  </svg>
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
