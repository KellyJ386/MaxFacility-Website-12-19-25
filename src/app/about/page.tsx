import fs from "node:fs";
import path from "node:path";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Target, Heart, ArrowRight, Snowflake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Max Facility - 30+ years of ice rink expertise. Meet our CIT, CIRM, and CRA certified team and see the rinks we've served, from Jamestown, NY to Bremerton, WA.",
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
    location: "",
  },
  {
    slug: "apex-ice-arena",
    name: "Apex Ice Arena",
    location: "",
  },
  {
    slug: "bremerton-ice-arena",
    name: "Bremerton Ice Arena",
    location: "Bremerton, WA",
  },
  {
    slug: "tennity-ice-pavilion",
    name: "Tennity Ice Pavilion",
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
                  Max Facility started on the ice, not behind a desk. Our work
                  began with the early-morning realities of running a rink
                  &mdash; edging boards, dialing in ice depth, and keeping
                  aging equipment alive so the first skaters of the day never
                  knew how much went on before the doors opened.
                </p>
                <p>
                  Over the years that hands-on experience grew into something
                  bigger. What began as local ice maintenance became a
                  full-service operations company, and along the way our team
                  earned the industry&apos;s most respected credentials &mdash;
                  CIT, CIRM, and CRA &mdash; while working alongside facilities
                  from Jamestown, New York all the way to Bremerton,
                  Washington.
                </p>
                <p>
                  That range is the heart of who we are. We&apos;ve maintained
                  ice, trained staff, and rebuilt operations at community rinks,
                  competitive arenas, and university pavilions alike &mdash;
                  including Syracuse University&apos;s Tennity Ice Pavilion. Every
                  building taught us something, and every lesson found its way
                  into the way we work today.
                </p>
                <p>
                  Now we combine that old-school craftsmanship with modern
                  technology through our software platform, so the knowledge
                  we&apos;ve gathered on the ice is available to every facility
                  we serve. Whether you need someone to maintain your ice, train
                  your team, or digitize your operations, we&apos;re here to
                  help.
                </p>
              </div>
            </div>
            <div className="bg-grey-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  "Certified experts (CIT, CIRM, CRA) with 30+ years on the ice",
                  "Hands-on maintenance and resurfacing, not just advice",
                  "Operations and staff training tailored to each facility",
                  "Experience spanning community, competitive, and collegiate rinks",
                  "Software built from real rink-floor know-how",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Snowflake className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-grey-700">{item}</span>
                  </li>
                ))}
              </ul>
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

      {/* Certifications Section */}
      <section className="py-20 bg-grey-50">
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
