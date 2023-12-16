
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discovery',
  description: 'Discover and share beautiful locations and ideas',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        
         {/* <Navbar/> */}
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
