import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData || typeof formData !== 'object') {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    // Get EmailJS config from environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID_ADMIN;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY; 

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return NextResponse.json(
        { error: 'Email service configuration is missing' },
        { status: 500 }
      );
    }

    // Send email using EmailJS REST API
    const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey, // Optional: use if you have a private key
        template_params: {
          from_name: formData.from_name,
          from_email: formData.from_email,
          company_name: formData.company_name,
          message: formData.message,
          to_email: 'contact@profitagentz.com', // Your receiving email
        },
      }),
    });

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      console.error('EmailJS error:', errorText);
      throw new Error(`EmailJS returned status: ${emailJsResponse.status}`);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}