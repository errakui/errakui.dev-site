'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

interface CookieConsentContextType {
  consent: CookieConsent | null
  showBanner: boolean
  acceptAll: () => void
  rejectAll: () => void
  updateConsent: (consent: Partial<CookieConsent>) => void
  hasConsent: () => boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Carica consenso da localStorage
    const savedConsent = localStorage.getItem('cookie_consent')
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent)
        setConsent(parsed)
        setShowBanner(false)
        
        // Inizializza tracking se consenso dato
        if (parsed.analytics) {
          initializeAnalytics()
        }
      } catch (e) {
        setShowBanner(true)
      }
    } else {
      // Mostra banner dopo 1 secondo se non c'è consenso
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie_consent', JSON.stringify(newConsent))
    setConsent(newConsent)
    setShowBanner(false)

    // Inizializza o rimuovi tracking
    if (newConsent.analytics) {
      initializeAnalytics()
    } else {
      removeAnalytics()
    }
  }

  const acceptAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    saveConsent(newConsent)
  }

  const rejectAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }
    saveConsent(newConsent)
  }

  const updateConsent = (updates: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...consent!,
      ...updates,
      necessary: true, // Sempre true
      timestamp: Date.now(),
    }
    saveConsent(newConsent)
  }

  const hasConsent = () => {
    return consent !== null && consent.analytics === true
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptAll, rejectAll, updateConsent, hasConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }
  return context
}

// Funzioni helper per tracking
function initializeAnalytics() {
  // Google Analytics
  const GA_ID = 'G-WBSP7CY48N'
  
  // Script Google Analytics
  if (!document.getElementById('ga-script')) {
    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)
    
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { 'anonymize_ip': true });
    `
    document.head.appendChild(script2)
  }
  
  console.log('✅ Analytics inizializzato')
}

function removeAnalytics() {
  // Rimuovi script analytics se presenti
  const gaScript = document.getElementById('ga-script')
  if (gaScript) {
    gaScript.remove()
  }
  
  // Pulisci cookies analytics
  document.cookie.split(";").forEach((c) => {
    if (c.trim().startsWith('_ga')) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    }
  })
  
  console.log('🚫 Analytics disabilitato')
}

