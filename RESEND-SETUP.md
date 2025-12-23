# 📧 CONFIGURAZIONE RESEND

## ✅ Resend installato e configurato!

Il form contatti ora invia email reali tramite Resend.

---

## 🔑 VARIABILE D'AMBIENTE

**Aggiungi su Vercel:**

1. Vai su **Vercel Dashboard** → Tuo progetto → **Settings** → **Environment Variables**
2. Aggiungi:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_WoUBsPvZ_5SrHhVVY5Yb6MkvYytJVj6RX`
   - **Environment**: Production, Preview, Development (seleziona tutti)
3. Click **Save**
4. **Redeploy** il progetto (o aspetta il prossimo push)

---

## 📧 DOMINIO VERIFICATO

Per inviare email da `noreply@errakui.dev`, devi verificare il dominio su Resend:

1. Vai su: https://resend.com/domains
2. Aggiungi dominio: `errakui.dev`
3. Aggiungi i record DNS che Resend ti fornisce:
   - Record TXT per verifica dominio
   - Record SPF
   - Record DKIM
4. Attendi verifica (5-10 minuti)

**Fino a quando il dominio non è verificato**, puoi usare:
- `onboarding@resend.dev` (solo per test)
- O un dominio verificato che hai già su Resend

---

## ✅ COSA FUNZIONA ORA

- ✅ Form invia dati a `/api/contact`
- ✅ Validazione campi obbligatori
- ✅ Email HTML formattata inviata a `info@errakui.dev`
- ✅ Reply-to impostato all'email del cliente
- ✅ Range budget include "0-10k"

---

## 🧪 TEST

Dopo aver aggiunto la variabile d'ambiente su Vercel:

1. Compila il form su `https://errakui.dev/contatti`
2. Invia
3. Controlla la casella `info@errakui.dev`
4. Dovresti ricevere l'email con tutti i dati del form

---

## 📝 FORMATO EMAIL

L'email include:
- Nome completo
- Email (cliccabile)
- Telefono (cliccabile)
- Azienda (se fornita)
- Servizio richiesto
- Budget indicativo
- Messaggio completo
- Timestamp

---

**🚀 Una volta aggiunta la variabile su Vercel, il form funzionerà al 100%!**
