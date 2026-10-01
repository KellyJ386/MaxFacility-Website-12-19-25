import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  facilityName?: string;
  facilityType?: string;
  serviceInterest: string;
  message?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    const isDemo = data.serviceInterest === "demo";
    if (
      !data.name ||
      !data.email ||
      !data.serviceInterest ||
      (!isDemo && !data.message)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Save to Supabase database
    // 2. Send email notification via Resend

    // Example Supabase integration (uncomment when configured):
    /*
    const { createClient } = await import("@supabase/supabase-js");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        facility_name: data.facilityName || null,
        facility_type: data.facilityType || null,
        service_interest: data.serviceInterest,
        message: data.message || null,
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to save lead");
      }
    }
    */

    // Log first so a lead is recoverable from the server logs even if the
    // email send below fails.
    console.log("Contact form submission:", data);

    // Email notification via Resend. Active when RESEND_API_KEY and
    // CONTACT_EMAIL are set; otherwise the submission is only logged.
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (resendApiKey && contactEmail) {
      const label = isDemo ? "Demo Request" : "New Lead";
      const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ").trim();
      const row = (name: string, value?: string) =>
        `<p><strong>${name}:</strong> ${escapeHtml(value || "Not provided")}</p>`;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Max Facility <noreply@maxfacility.com>",
          to: contactEmail,
          reply_to: data.email,
          subject: `${label}: ${oneLine(data.name)} - ${oneLine(
            data.serviceInterest
          )}`,
          html: `
            <h2>${label}</h2>
            ${row("Name", data.name)}
            ${row("Email", data.email)}
            ${row("Phone", data.phone)}
            ${row("Facility Name", data.facilityName)}
            ${row("Facility Type", data.facilityType)}
            ${row("Service Interest", data.serviceInterest)}
            ${row("Message", data.message)}
          `,
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
        return NextResponse.json(
          { error: "Failed to send notification" },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
