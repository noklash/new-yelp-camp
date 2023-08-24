import Image from "next/image"
import Link from "next/link"
import AuthProviders from "./AuthProviders"

const Navbar = () => {
  const session = null
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

            {session ? (
              <>
              UserPhoto
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