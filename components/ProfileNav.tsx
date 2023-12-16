// "use client"
import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"
import { getCurrentUser } from "@/lib/session"
import ProfileMenu from "./ProfileMenu"
// import { signOut } from "next-auth/react"

const ProfileNav = async () => {
  const session = await getCurrentUser()
  return (
    <div className="top-0 fixed z-10 w-full bg-white rounded">
        <div className="w-full flex shadow-lg">
            <Link href="/campgrounds" className="mr-auto">
                <Image
                    src="/discoveryy.svg"
                    width={170}
                    height={60}
                    alt="logo"
                />
            </Link>

            {session?.user ? (
              <>
              <ProfileMenu session={session} />

              </>
            ) : (
              <AuthProviders />
            )}
          
        </div>
    </div>
  )
}

export default ProfileNav