import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Ice Maintenance", href: "/services/ice-maintenance" },
    { name: "Facility Consulting", href: "/services/consulting" },
    { name: "MFO Software", href: "/software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const certifications = [
  { name: "CIT", title: "Certified Ice Technician" },
  { name: "CIRM", title: "Certified Ice Rink Manager" },
  { name: "CRA", title: "Certified Rink Administrator" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">MAX</span>
              <span className="text-2xl font-bold text-green-500">FACILITY</span>
            </div>
            <p className="text-grey-400 text-sm">
              Expert ice rink operations consulting and management software solutions.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@maxfacility.com"
                className="flex items-center text-sm text-grey-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contact@maxfacility.com
              </a>
              <a
                href="tel:+1-315-555-0100"
                className="flex items-center text-sm text-grey-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (315) 555-0100
              </a>
              <div className="flex items-start text-sm text-grey-400">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>Central New York</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="px-3 py-2 bg-navy-500 border border-grey-700 rounded-lg text-center"
                  title={cert.title}
                >
                  <span className="text-xs font-bold text-green-500">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-grey-500">
              NHL/US Ice Rink Association Certified
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-grey-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-grey-500">
              &copy; {new Date().getFullYear()} Max Facility. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-grey-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
