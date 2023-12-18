import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnimatedHome from "@/components/AnimatedHome";
// import AuthProviders from "@/components/AuthProviders";
import SignIn from "@/components/SignIn";


const Home = () => {
return (
  <div className='p-6 flex flex-col home overflow-y-clip'>
        <div className='flex flex-col mt-8 py-6 justify-center mx-auto'>
      
          <AnimatedHome/>
        </div>
          

    <div className='flex m-4 p-6 gap-8 text-white mx-auto '>
      {/* <Link href="/login" className='btnn hover:bg-white hover:text-black text-center pt-1 font-bold'>Sign in</Link> */}
      {/* <AuthProviders/> */}
        <SignIn/>
    </div>

  </div>
)
}

export default Home