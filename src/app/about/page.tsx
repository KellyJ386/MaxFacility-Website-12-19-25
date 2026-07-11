import { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Max Facility - 30+ years of ice rink expertise. Meet our CIT, CIRM, and CRA certified team dedicated to elevating ice facility operations.",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we do, from ice quality to customer service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside our clients as true partners, invested in their long-term success.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously seek better ways to serve ice facilities through technology and best practices.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our love for the ice rink industry drives us to deliver exceptional results every day.",
  },
];

const milestones = [
  { year: "1994", event: "Founded in Central New York" },
  { year: "2000", event: "Achieved CIT Certification" },
  { year: "2005", event: "Expanded to Northeast consulting" },
  { year: "2010", event: "100th facility milestone" },
  { year: "2015", event: "Launched MFO Software beta" },
  { year: "2020", event: "Nationwide consulting coverage" },
  { year: "2024", event: "MFO Software 2.0 release" },
];

const certifications = [
  {
    abbr: "CIT",
    name: "Certified Ice Technician",
    org: "NHL/US Ice Rink Association",
    description:
      "The premier certification for ice making and maintenance professionals, demonstrating mastery of ice quality standards.",
  },
  {
    abbr: "CIRM",
    name: "Certified Ice Rink Manager",
    org: "Ice Rink Managers Association",
    description:
      "Recognizes comprehensive knowledge of all aspects of ice facility management and operations.",
  },
  {
    abbr: "CRA",
    name: "Certified Rink Administrator",
    org: "National Ice Arena Association",
    description:
      "Demonstrates expertise in facility administration, budgeting, and organizational leadership.",
  },
];

export default function AboutPage() {
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
              About Max Facility
            </h1>
            <p className="text-xl text-grey-300">
              For over three decades, we&apos;ve been dedicated to elevating ice
              rink operations through expert consulting, professional services,
              and innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-left">Our Story</h2>
              <div className="space-y-4 text-grey-600">
                <p>
                  Max Facility was founded in Central New York with a simple
                  mission: to help ice facilities operate at their best. What
                  started as local ice maintenance services has grown into a
                  comprehensive operations company serving facilities across the
                  nation.
                </p>
                <p>
                  Our founder&apos;s passion for ice sports and facility
                  management led to decades of hands-on experience, earning the
                  industry&apos;s most respected certifications along the way.
                  This deep expertise became the foundation for both our
                  consulting services and our MFO software platform.
                </p>
                <p>
                  Today, we combine old-school craftsmanship with modern
                  technology to deliver solutions that work. Whether you need
                  someone to maintain your ice, train your staff, or digitize
                  your operations, we&apos;re here to help.
                </p>
              </div>
            </div>
            <div className="bg-grey-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-green-600 font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === milestones.length - 1
                            ? "bg-green-500"
                            : "bg-navy"
                        }`}
                      />
                      <div className="ml-4 text-grey-700">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading">
              The principles that guide everything we do at Max Facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-grey-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Credentials</h2>
            <p className="section-subheading">
              Industry-recognized certifications that demonstrate our commitment
              to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="bg-navy rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {cert.abbr}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-green-400 text-sm mb-4">{cert.org}</p>
                <p className="text-grey-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: "Years of Experience" },
              { value: "100+", label: "Facilities Served" },
              { value: "500+", label: "Staff Trained" },
              { value: "3", label: "Certifications Held" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-green-100 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-grey-300 mb-8">
            Ready to elevate your ice facility operations? Get in touch with our
            team.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
