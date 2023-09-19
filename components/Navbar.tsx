import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"

import { getCurrentUser } from "@/lib/session"
// import { signOut } from "next-auth/react"

const Navbar = async () => {
  const session = await getCurrentUser()
  return (
    <div className="m-4">
        <div className="w-full flex">
            <Link href="/" className="mr-auto">
                <Image
                    src="/logo.svg"
                    width={150}
                    height={80}
                    alt="logo"
                />
            </Link>

            {session?.user ? (
              <>
              <Link href="/create-post">Post</Link>
              
              <Link href="#" className=" p-x">
                <Image
                    src={session.user?.image}
                    width={70}
                    height={50}
                    alt="logo"
                    className="rounded-full "

                />
            </Link>
              {/* <Link href="/create-post">Post</Link> */}
              </>
            ) : (
              <AuthProviders />
            )}
        </div>
    </div>
  )
}

export default Navbar