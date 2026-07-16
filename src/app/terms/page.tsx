import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Max Facility terms of service - terms and conditions for using our services and software.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-32 bg-navy pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-grey-300">Last updated: December 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-grey-600 mb-6">
              By accessing or using Max Facility&apos;s services, including our
              website, consulting services, and RinkReports Software platform, you agree
              to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              2. Services Description
            </h2>
            <p className="text-grey-600 mb-4">
              Max Facility provides:
            </p>
            <ul className="list-disc pl-6 text-grey-600 mb-6">
              <li>Ice maintenance services in Central New York</li>
              <li>Facility consulting services (Northeast and Nationwide)</li>
              <li>RinkReports Software - Ice rink management platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              3. RinkReports Software Subscription
            </h2>
            <p className="text-grey-600 mb-4">
              RinkReports Software is provided on a subscription basis:
            </p>
            <ul className="list-disc pl-6 text-grey-600 mb-6">
              <li>All Modules plan: $999 per year (annual billing)</li>
              <li>Ice Depth plan: $750 per year (annual billing)</li>
              <li>Multi-facility discount: 15% off for 2+ facilities</li>
              <li>Subscriptions renew automatically unless cancelled</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-grey-600 mb-4">As a user, you agree to:</p>
            <ul className="list-disc pl-6 text-grey-600 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not share your account with unauthorized users</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-grey-600 mb-6">
              All content, software, and materials provided by Max Facility are
              protected by intellectual property laws. You may not copy,
              modify, distribute, or create derivative works without our
              express written permission.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-grey-600 mb-6">
              Max Facility shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of our services. Our total liability shall not exceed the amount
              paid by you in the twelve months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              7. Service Availability
            </h2>
            <p className="text-grey-600 mb-6">
              While we strive to maintain high availability, we do not guarantee
              uninterrupted access to our services. We reserve the right to
              modify, suspend, or discontinue services with reasonable notice.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              8. Cancellation and Refunds
            </h2>
            <p className="text-grey-600 mb-6">
              You may cancel your RinkReports Software subscription at any time.
              Cancellation takes effect at the end of the current billing
              period. We do not provide refunds for partial billing periods.
              Contact us for questions about our refund policy.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              9. Governing Law
            </h2>
            <p className="text-grey-600 mb-6">
              These terms shall be governed by the laws of the State of New
              York, without regard to conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-grey-600 mb-6">
              We may update these terms from time to time. We will notify users
              of material changes via email or through our platform. Continued
              use of our services after changes constitutes acceptance of the
              new terms.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              11. Contact Information
            </h2>
            <p className="text-grey-600 mb-6">
              For questions about these terms, please contact us at{" "}
              <a
                href="mailto:contact@maxfacility.com"
                className="text-green-600 hover:underline"
              >
                contact@maxfacility.com
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
