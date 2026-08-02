"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const facilityTypes = [
  "Municipal Recreation Center",
  "University/College Arena",
  "Private Ice Rink",
  "Multi-Sheet Complex",
  "Youth Hockey Association",
  "Figure Skating Club",
  "Other",
];

const serviceInterests = [
  { value: "maintenance", label: "Ice Maintenance Services" },
  { value: "consulting", label: "Facility Consulting" },
  { value: "software", label: "RinkReports Software" },
  { value: "all", label: "All Services" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    facilityName: "",
    facilityType: "",
    serviceInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        facilityName: "",
        facilityType: "",
        serviceInterest: "",
        message: "",
      });
    } catch {
      setError("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy pt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-grey-300 max-w-2xl mx-auto">
            Ready to elevate your ice facility operations? Contact us for a free
            consultation or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a
                      href="mailto:kelly@maxfacility.com"
                      className="text-grey-600 hover:text-green-600"
                    >
                      kelly@maxfacility.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Phone</h3>
                    <a
                      href="tel:+1-315-439-8847"
                      className="text-grey-600 hover:text-green-600"
                    >
                      (315) 439-8847
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Location</h3>
                    <p className="text-grey-600">Central New York</p>
                    <p className="text-grey-500 text-sm">
                      Serving Northeast & Nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-navy">Business Hours</h3>
                    <p className="text-grey-600">Mon - Fri: 8am - 6pm EST</p>
                    <p className="text-grey-500 text-sm">
                      Emergency support available
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-grey-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/software"
                      className="text-green-600 hover:underline"
                    >
                      Request RinkReports Demo →
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-green-600 hover:underline"
                    >
                      View Pricing →
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services#consulting"
                      className="text-green-600 hover:underline"
                    >
                      Schedule Consultation →
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-grey-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-grey-600 mb-6">
                      Thank you for contacting us. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="(555) 555-5555"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="facilityName"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Facility Name
                        </label>
                        <input
                          type="text"
                          id="facilityName"
                          name="facilityName"
                          value={formData.facilityName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Central Ice Arena"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="facilityType"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Facility Type
                        </label>
                        <select
                          id="facilityType"
                          name="facilityType"
                          value={formData.facilityType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select type...</option>
                          {facilityTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="serviceInterest"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Service Interest *
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          required
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select interest...</option>
                          {serviceInterests.map((interest) => (
                            <option key={interest.value} value={interest.value}>
                              {interest.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your facility and how we can help..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-green-100 mb-6">
            Book a free 30-minute consultation with one of our ice facility
            experts.
          </p>
          <a
            href="tel:+1-315-439-8847"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg hover:bg-grey-100 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call (315) 439-8847
          </a>
        </div>
      </section>
    </>
  );
}
