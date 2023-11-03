import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { usePathname } from 'next/navigation'
import { LayoutProvider } from './layoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yelp Camp',
  description: 'Discover amazing camping locations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
         {/* <LayoutProvider> */}
         <Navbar/>
        <main>
        {children}
        </main>
        {/* </LayoutProvider> */}
      </body>
    </html>
  )
}
