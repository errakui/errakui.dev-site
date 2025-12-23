import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

    // Prepara email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #FF0000; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #000; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuovo Contatto da errakui.dev</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Telefono:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <div class="label">Azienda:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              ${service ? `
              <div class="field">
                <div class="label">Servizio:</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              ${budget ? `
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Messaggio:</div>
                <div class="value" style="white-space: pre-wrap; background: white; padding: 15px; border-left: 3px solid #FF0000;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Ricevuto il ${new Date().toLocaleString('it-CH', { timeZone: 'Europe/Zurich' })}</p>
              <p>ERRAKUI.DEV — Software House Lugano</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Invia email con Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY non configurata')
      return NextResponse.json(
        { error: 'Configurazione email non disponibile' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: 'ERRAKUI.DEV <info@errakui.dev>',
      to: 'info@errakui.dev',
      replyTo: email,
      subject: `Nuovo contatto da ${name}${company ? ` - ${company}` : ''}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Errore Resend:', error)
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email' },
        { status: 500 }
      )
    }

    console.log('✅ Email inviata con successo:', data)

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
