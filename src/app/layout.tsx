import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap'
})

export const metadata = {
  title: 'Café Sol y Sombra',
  description: 'Café Sol y Sombra - aromas auténticos y menú artesanal para amantes del café',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-gradient-to-b from-white to-stone-50 text-stone-800 font-body min-h-screen antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  )
}
