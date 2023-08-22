import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="m-4">
        <div className="w-full">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={150}
                    height={80}
                    alt="logo"
                />
            </Link>
        </div>
    </div>
  )
}

export default Navbar