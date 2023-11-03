"use client"
// this file helps exclude the homepage from default layout
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'

export const LayoutProvider = ({ children, }: {children: React.ReactNode}) => {
    const pathName = usePathname()
    const specific = "/"
    return (
        <>
        {pathName !== specific && <Navbar/>} 
        {children}
        </>
    )
}