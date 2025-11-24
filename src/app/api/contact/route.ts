import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import nodemailer from 'nodemailer'

// ✅ Initialize the Sanity client with secure environment variables
console.log('🔍 SANITY_PROJECT_ID:', process.env.SANITY_PROJECT_ID);
console.log('🔍 SANITY_TOKEN:', process.env.SANITY_TOKEN ? '✅ Loaded' : '❌ Missing');


const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION!,
  token: process.env.SANITY_TOKEN!, // must be set in .env.local
  useCdn: false,
})

export async function POST(req: Request) {
  try {
    console.log('✅ Contact API triggered')

    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 })
    }

    console.log('📦 Attempting to create contactMessage in Sanity')

    // 1️⃣ Store the message in Sanity
    const result = await client.create({
      _type: 'contactMessage',
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    })

    console.log('✅ Message stored in Sanity:', result._id)

    // 2️⃣ Attempt to send email notification (optional)
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || process.env.EMAIL_TO, // use correct email
          pass: process.env.EMAIL_PASSWORD, // Gmail app password
        },
      })

      await transporter.sendMail({
        from: `"Karol Digital Contact" <${process.env.EMAIL_USER || process.env.EMAIL_TO}>`,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Message:
${message}
        `,
      })

      console.log('📧 Email notification sent successfully')
    } catch (mailError) {
      console.error('⚠️ Email sending failed:', mailError)
    }

    // Respond to frontend
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Error in contact route:', error)
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 })
  }
}
