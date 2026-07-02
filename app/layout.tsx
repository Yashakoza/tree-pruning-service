import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo, Assistant } from 'next/font/google'
import { BUSINESS_CONFIG } from '@/lib/contact-info'
import './globals.css'

const heebo = Heebo({
  variable: '--font-heading',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
})
const assistant = Assistant({
  variable: '--font-body',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700'],
})

const SITE_TITLE = `${BUSINESS_CONFIG.businessName} | גיזום עצים מקצועי ובטוח באזור המרכז`
const SITE_DESCRIPTION =
  `${BUSINESS_CONFIG.businessName} מספק שירותי גיזום עצים מקצועיים, בטוחים ונקיים לבתים פרטיים, בניינים ועסקים. גיזום עצים, דילול, עיצוב, ענפים מסוכנים ופינוי גזם. לקבלת הצעת מחיר מהירה.`

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  robots: {
    index: !BUSINESS_CONFIG.noindex,
    follow: !BUSINESS_CONFIG.nofollow,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/',
    siteName: BUSINESS_CONFIG.businessName,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f3d2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`light ${heebo.variable} ${assistant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
