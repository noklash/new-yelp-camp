import AnimatedHome from "@/components/AnimatedHome";
import SignIn from "@/components/SignIn";


const Home = () => {
return (
  <div className='p-6 flex flex-col home overflow-y-clip'>
        <div className='flex flex-col mt-8 py-6 justify-center mx-auto'>
          <AnimatedHome/>
        </div>
    <div className='flex m-4 p-6 gap-8 text-white mx-auto '>
        <SignIn/>
    </div>

  </div>
)
}

export default Home