import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import { usePathname } from 'next/navigation'
import { getCurrentUser } from "@/lib/session"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await getCurrentUser()

  return (
    <div>
         <Navbar/>
        
        {children}
        <Footer session={session}/>
    </div>  
  )
}