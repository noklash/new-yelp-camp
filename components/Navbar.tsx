import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"
// import { MdOutlineTextsms } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";


import { getCurrentUser } from "@/lib/session"
import ProfileMenu from "./ProfileMenu"
// import { signOut } from "next-auth/react"

const Navbar = async () => {
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

            {/* {session?.user ? (
              <>
              <ProfileMenu session={session} />

              
              <Link href="/create-post">Post</Link>
              </>
            ) : (
              <AuthProviders />
            )} */}
          <div className="mx-4 my-4">
            {/* <MdOutlineTextsms size={42}/> */}
            
            
              <BsChatDots size={42}/>
          </div>
        </div>
    </div>
  )
}

export default Navbar