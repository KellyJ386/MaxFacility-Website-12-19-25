"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const facilityTypes = [
  "Municipal Recreation Center",
  "University/College Arena",
  "Private Ice Rink",
  "Multi-Sheet Complex",
  "Youth Hockey Association",
  "Figure Skating Club",
  "Other",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  facilityName: "",
  facilityType: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent";

export default function DemoForm() {
  const [formData, setFormData] = useState(emptyForm);
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
        body: JSON.stringify({ ...formData, serviceInterest: "demo" }),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setIsSubmitted(true);
      setFormData(emptyForm);
    } catch {
      setError(
        "There was an error submitting your request. Please try again, or email kelly@maxfacility.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-xl font-bold text-navy mb-2">Demo request sent</h2>
        <p className="text-grey-600">
          Thanks. We&apos;ll be in touch within one business day to schedule
          your RinkReports demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="facilityName" className="block text-sm font-medium text-navy mb-2">
            Facility Name *
          </label>
          <input
            type="text"
            id="facilityName"
            name="facilityName"
            required
            value={formData.facilityName}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="facilityType" className="block text-sm font-medium text-navy mb-2">
            Facility Type
          </label>
          <select
            id="facilityType"
            name="facilityType"
            value={formData.facilityType}
            onChange={handleChange}
            className={`${inputClass} bg-white`}
          >
            <option value="">Select type...</option>
            {facilityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
          Anything you want us to cover? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Number of sheets, how you track ice depth today, etc."
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
        className="w-full md:w-auto px-8 py-4 bg-green-500 text-navy-900 font-semibold rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
