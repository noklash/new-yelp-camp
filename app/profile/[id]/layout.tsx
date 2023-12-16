import Footer from '@/components/Footer'
import ProfileNav from '@/components/ProfileNav'
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
         <ProfileNav/>
        
        {children}
        <Footer session={session}/>
    </div>  
  )
}