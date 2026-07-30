import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Max Facility privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-32 bg-navy pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-grey-300">Last updated: December 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-grey-600 mb-4">
              We collect information you provide directly to us, such as when
              you fill out a contact form, request a demo, or subscribe to our
              services. This may include:
            </p>
            <ul className="list-disc pl-6 text-grey-600 mb-6">
              <li>Name and contact information</li>
              <li>Facility name and type</li>
              <li>Service interests and inquiries</li>
              <li>Account credentials for RinkReports Software users</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-grey-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-grey-600 mb-6">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you service-related communications</li>
              <li>Analyze usage patterns to improve our offerings</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-grey-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-grey-600 mb-6">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. Our RinkReports Software platform uses
              enterprise-grade security including encryption and regular
              backups.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              5. Cookies and Analytics
            </h2>
            <p className="text-grey-600 mb-6">
              We use cookies and similar technologies to analyze website traffic
              and improve user experience. You can control cookie preferences
              through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              6. Your Rights
            </h2>
            <p className="text-grey-600 mb-6">
              You have the right to access, correct, or delete your personal
              information. Contact us at{" "}
              <a
                href="mailto:kelly@maxfacility.com"
                className="text-green-600 hover:underline"
              >
                kelly@maxfacility.com
              </a>{" "}
              to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-grey-600 mb-6">
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              8. Contact Us
            </h2>
            <p className="text-grey-600 mb-6">
              If you have questions about this privacy policy, please contact us
              at{" "}
              <a
                href="mailto:kelly@maxfacility.com"
                className="text-green-600 hover:underline"
              >
                kelly@maxfacility.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-grey-200">
            <Link href="/" className="text-green-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
