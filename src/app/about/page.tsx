import fs from "node:fs";
import path from "node:path";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Heart,
  ArrowRight,
  Snowflake,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Max Facility LLC was founded by career ice rink operator Kelly Johnson (CIT, CIRM, CRA). Operator-built consulting and RinkReports software for rinks of every size, based in Central New York.",
};

// Rinks we've served, in the order requested. Photos live in
// public/images/rinks/. The gallery resolves the real photo when a file is
// present and falls back to a labeled panel otherwise (see resolveRinkImage).
const rinks = [
  {
    slug: "jamestown",
    name: "Jamestown",
    location: "Jamestown, NY",
  },
  {
    slug: "edge-ice-arena",
    name: "Edge Ice Arena",
    location: "Littleton, CO",
  },
  {
    slug: "apex-ice-arena",
    name: "Apex Ice Arena",
    location: "Arvada, CO",
  },
  {
    slug: "bremerton-ice-arena",
    name: "Bremerton Ice Arena",
    location: "Bremerton, WA",
  },
  {
    slug: "tennity-ice-pavilion",
    name: "Tennity Ice Skating Pavilion",
    location: "Syracuse University",
  },
];

// Look for a photo at public/images/rinks/<slug>.<ext>. Returns the public URL
// if one exists, otherwise null so the card renders a placeholder panel.
function resolveRinkImage(slug: string): string | null {
  const exts = ["jpg", "jpeg", "png", "webp", "avif"];
  for (const ext of exts) {
    const file = `${slug}.${ext}`;
    try {
      if (
        fs.existsSync(path.join(process.cwd(), "public", "images", "rinks", file))
      ) {
        return `/images/rinks/${file}`;
      }
    } catch {
      // ignore and try the next extension
    }
  }
  return null;
}

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

const certifications = [
  {
    abbr: "CIT",
    name: "Certified Ice Technician",
    org: "U.S. Ice Rink Association",
    logo: "/images/certs/cit.png",
    description:
      "Advanced ice making and maintenance — ice quality, resurfacing, and refrigeration fundamentals.",
  },
  {
    abbr: "CIRM",
    name: "Certified Ice Rink Manager",
    org: "U.S. Ice Rink Association",
    logo: "/images/certs/cirm.png",
    description:
      "Comprehensive management of rink operations, scheduling, safety, and staffing.",
  },
  {
    abbr: "CRA",
    name: "Certified Rink Administrator",
    org: "U.S. Ice Rink Association",
    logo: "/images/certs/cra.png",
    description:
      "Facility administration, budgeting, capital planning, and organizational leadership.",
  },
];

const education = [
  {
    degree: "M.S., Sport Venue and Event Management",
    school: "Falk College, Syracuse University",
  },
  {
    degree: "B.S.",
    school: "SUNY Brockport",
  },
];

export default function AboutPage() {
  const rinkImages = rinks.map((rink) => ({
    ...rink,
    src: resolveRinkImage(rink.slug),
  }));

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
              Facility management and software built by an operator who runs
              rinks every day &mdash; not someone consulting on them from a
              distance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading text-left">Our Story</h2>
              <div className="space-y-4 text-grey-600">
                <p>
                  Max Facility LLC was founded by Kelly Johnson, a career ice
                  rink operator who runs facilities &mdash; not someone
                  consulting on them from a distance. Kelly currently serves as
                  Associate Director of Recreation at Syracuse University&apos;s
                  Tennity Ice Skating Pavilion, where she oversees ice
                  operations, refrigeration plant monitoring, staff management,
                  and programming for one of Central New York&apos;s busiest
                  collegiate rinks.
                </p>
                <p>
                  That hands-on experience is the foundation of everything Max
                  Facility offers. From ice depth management and resurfacer
                  operations to air quality compliance and capital planning,
                  Kelly has managed the daily realities that most facility
                  software and consultants only read about. She&apos;s led
                  equipment evaluations, dasher board and shielding replacement
                  projects, staff training programs, and the operational
                  documentation that keeps a rink running safely and efficiently
                  year-round.
                </p>
                <p>
                  That same frustration with paper logs, scattered spreadsheets,
                  and software built by people who&apos;ve never cut ice is what
                  led to{" "}
                  <Link
                    href="/software"
                    className="font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    RinkReports
                  </Link>{" "}
                  &mdash; facility management software designed by an operator,
                  for operators.
                </p>
                <p>
                  Based in Central New York, Max Facility works with rinks and
                  recreation facilities of every size &mdash; from single-sheet
                  community rinks to multi-sheet complexes.
                </p>
              </div>
            </div>

            {/* Founder card */}
            <div className="rounded-2xl bg-navy p-8 text-white shadow-md">
              <span className="inline-block rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
                Founder
              </span>
              <h3 className="mt-4 text-2xl font-bold">Kelly Johnson</h3>
              <p className="mt-1 text-grey-300">
                Associate Director of Recreation
              </p>
              <p className="text-sm text-green-400">
                Tennity Ice Skating Pavilion &middot; Syracuse University
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-grey-400">
                  Certifications
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert.abbr}
                      className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-bold text-green-400"
                    >
                      {cert.abbr}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-xs text-grey-400">
                  U.S. Ice Rink Association
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-grey-400">
                  Education
                </p>
                <ul className="mt-3 space-y-3">
                  {education.map((item) => (
                    <li key={item.degree} className="flex items-start">
                      <GraduationCap className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="text-sm text-grey-200">
                        {item.degree}
                        <span className="block text-grey-400">
                          {item.school}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rinks We've Served Gallery */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Rinks We&apos;ve Served</h2>
            <p className="section-subheading">
              A look at some of the facilities we&apos;ve had the privilege to
              maintain, consult for, and help operate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rinkImages.map((rink) => (
              <figure
                key={rink.slug}
                className="group overflow-hidden rounded-2xl bg-navy shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {rink.src ? (
                    <Image
                      src={rink.src}
                      alt={`${rink.name}${rink.location ? ` — ${rink.location}` : ""}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-700 via-navy to-navy-500/70">
                      <Snowflake
                        className="h-10 w-10 text-green-500/70 mb-3"
                        aria-hidden="true"
                      />
                      <span className="px-4 text-center text-sm font-medium text-grey-300">
                        Photo coming soon
                      </span>
                    </div>
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {rink.name}
                    </h3>
                    {rink.location && (
                      <p className="text-sm text-green-400">{rink.location}</p>
                    )}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
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

      {/* Credentials & Education Section */}
      <section className="py-20 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Credentials &amp; Education</h2>
            <p className="section-subheading">
              Industry-recognized certifications from the U.S. Ice Rink
              Association, backed by graduate training in sport venue and event
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.abbr}
                className="flex flex-col rounded-xl border border-grey-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="relative mx-auto mb-6 h-24 w-full max-w-[220px]">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} (${cert.abbr}) — U.S. Ice Rink Association`}
                    fill
                    sizes="(min-width: 768px) 220px, 60vw"
                    className="object-contain"
                  />
                </div>
                <p className="text-green-600 text-sm font-semibold mb-3">
                  {cert.org}
                </p>
                <p className="text-grey-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex items-start rounded-xl border border-grey-200 bg-white p-6"
              >
                <span className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </span>
                <div>
                  <h3 className="font-bold text-navy">{item.degree}</h3>
                  <p className="text-sm text-grey-600">{item.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Band */}
      <section className="py-16 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: "Operator-Led",
                label: "Founded and run by a working rink professional",
              },
              {
                value: "CIT · CIRM · CRA",
                label: "Fully certified by the U.S. Ice Rink Association",
              },
              {
                value: "Every Size",
                label: "Single-sheet community rinks to multi-sheet complexes",
              },
            ].map((item) => (
              <div key={item.value}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {item.value}
                </div>
                <div className="text-green-50 text-sm">{item.label}</div>
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
