import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  facilityName?: string;
  facilityType?: string;
  serviceInterest: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.serviceInterest || !data.message) {
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

    // Save to Supabase database (when configured)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        facility_name: data.facilityName || null,
        facility_type: data.facilityType || null,
        service_interest: data.serviceInterest,
        message: data.message,
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Supabase error:", error);
      }
    }

    // Send email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "kelly@maxfacility.com";

    if (resendApiKey) {
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
          subject: `New Lead: ${data.name} - ${data.serviceInterest}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Facility Name:</strong> ${data.facilityName || "Not provided"}</p>
            <p><strong>Facility Type:</strong> ${data.facilityType || "Not provided"}</p>
            <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
      }
    } else {
      console.warn("RESEND_API_KEY not configured; skipping email notification");
    }

    // Log the submission for development
    console.log("Contact form submission:", data);

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
