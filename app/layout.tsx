import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo, Assistant } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'עץ תמיר | גיזום עצים מקצועי ובטוח באזור המרכז',
  description:
    'עץ תמיר מספק שירותי גיזום עצים מקצועיים, בטוחים ונקיים לבתים פרטיים, בניינים ועסקים. גיזום עצים, דילול, עיצוב, ענפים מסוכנים ופינוי גזם. לקבלת הצעת מחיר מהירה.',
  generator: 'v0.app',
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
