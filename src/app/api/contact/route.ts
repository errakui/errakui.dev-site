import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, budget, message } = body

    // Validazione base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    // Qui puoi integrare:
    // - Resend (https://resend.com) - Consigliato per Next.js
    // - SendGrid
    // - Nodemailer con SMTP
    // - Webhook a Zapier/Make
    
    // Per ora loggiamo i dati (in produzione usa un servizio email)
    console.log('📧 Nuovo contatto ricevuto:', {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Invia email a info@errakui.dev
    // Esempio con Resend:
    // await resend.emails.send({
    //   from: 'noreply@errakui.dev',
    //   to: 'info@errakui.dev',
    //   subject: `Nuovo contatto da ${name}`,
    //   html: `...`
    // })

    return NextResponse.json(
      { 
        success: true,
        message: 'Messaggio inviato con successo' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Errore invio form:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio del messaggio' },
      { status: 500 }
    )
  }
}
