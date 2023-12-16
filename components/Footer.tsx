import Link from "next/link";
import { BiBell } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SessionInterface } from "@/common.types";




const Footer = ({ session }: { session: SessionInterface }) => {
  return (
    <footer className='flex justify-between py-4 bg-white fixed bottom-0 w-full z-20 px-4'>
      <Link href="/campgrounds"><CiHome size={36}/></Link>
      <Link href="/create-post"><CiCirclePlus size={36}/></Link>
      <Link href="#"><CiSearch size={36}/></Link>
      {/* <BiBell size={36}/>   */}
      <Link href={`/profile/${session?.user?.id}`}><IoPersonOutline size={36}/></Link>
    </footer>
  )
}

export default Footer