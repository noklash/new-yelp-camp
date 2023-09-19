import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"

import { getCurrentUser } from "@/lib/session"

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
              {/* <Link href="#" className="rounded-full">
                <Image
                    src={session.user.image}
                    width={150}
                    height={80}
                    alt="logo"
                />
            </Link> */}ProfilePhoto
              <Link href="/create-post">Post</Link>
              </>
            ) : (
              <AuthProviders />
            )}
        </div>
    </div>
  )
}

export default Navbar