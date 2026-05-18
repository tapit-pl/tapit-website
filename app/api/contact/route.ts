import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kontakt@tapit.com.pl',
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, company, email, phone, url, service, checkboxes, message } = data

    const html = `
      <h2 style="color:#f53c3c;font-family:sans-serif">Nowe zapytanie z tapit.com.pl</h2>
      <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;color:#666;width:160px">Imię i nazwisko:</td><td style="padding:8px;font-weight:bold">${name}</td></tr>
        <tr><td style="padding:8px;color:#666">Firma:</td><td style="padding:8px;font-weight:bold">${company || '—'}</td></tr>
        <tr><td style="padding:8px;color:#666">E-mail:</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;color:#666">Telefon:</td><td style="padding:8px"><a href="tel:${phone}">${phone}</a></td></tr>
        ${url ? `<tr><td style="padding:8px;color:#666">Strona WWW:</td><td style="padding:8px"><a href="${url}">${url}</a></td></tr>` : ''}
        ${service ? `<tr><td style="padding:8px;color:#666">Usługa:</td><td style="padding:8px">${service}</td></tr>` : ''}
        ${checkboxes?.length ? `<tr><td style="padding:8px;color:#666">Zakres audytu:</td><td style="padding:8px">${checkboxes.join(', ')}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:8px;color:#666;vertical-align:top">Wiadomość:</td><td style="padding:8px">${message}</td></tr>` : ''}
      </table>
    `

    await transporter.sendMail({
      from: '"Tapit.com.pl" <kontakt@tapit.com.pl>',
      to: 'kontakt@tapit.com.pl',
      replyTo: email,
      subject: `Nowe zapytanie — ${name} (${company || email})`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
