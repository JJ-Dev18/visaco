"use client"

import { useEffect } from 'react'
import Script from 'next/script'

interface EPaycoConfig {
  publicKey: string
  test: boolean
  name: string
  description: string
  currency: string
  amount: number
  tax?: number
  taxBase?: number
  country?: string
  lang?: string
  external?: string
  response?: string
  confirmation?: string
  email?: string
  name_billing?: string
  type_doc_billing?: string
}

declare global {
  interface Window {
    ePayco?: {
      checkout: {
        configure: (config: any) => void
        open: (config?: any) => void
      }
    }
  }
}

export function useEPayco(config: EPaycoConfig) {
  const initializeEPayco = () => {
    if (window.ePayco) {
      window.ePayco.checkout.configure({
        key: config.publicKey,
        test: config.test,
      })
    }
  }

  useEffect(() => {
    // Initialize ePayco when script is loaded
    if (window.ePayco) {
      initializeEPayco()
    }
  }, [])

  const openCheckout = () => {
    if (window.ePayco) {
      window.ePayco.checkout.open({
        name: config.name,
        description: config.description,
        currency: config.currency,
        amount: config.amount,
        tax: config.tax || 0,
        tax_base: config.taxBase || 0,
        country: config.country || 'co',
        lang: config.lang || 'es',
        external: config.external || 'false',
        response: config.response,
        confirmation: config.confirmation,
        email_billing: config.email || '',
        name_billing: config.name_billing || '',
        type_doc_billing: config.type_doc_billing || 'cc',
      })
    } else {
      console.error('ePayco script not loaded')
    }
  }

  return {
    openCheckout,
  }
}

export default function EPaycoScript() {
  return (
    <Script
      id="epayco-script"
      src="https://checkout.epayco.co/checkout.js"
      strategy="afterInteractive"
      onLoad={() => console.log('ePayco script loaded')}
    />
  )
}