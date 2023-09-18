import Image from "next/image";
import Link from "next/link";

const Home = () => {
  // const screen = window.innerWidth
  return (
    <div className="lg:flex overflow-hidden">
          <div className="lg:w-1/2">

          <div className="w-full m-4 ">
              <Link href="/">
                  <Image
                      src="/logo.svg"
                      width={150}
                      height={80}
                      alt="logo"
                  />
              </Link>
          </div>

          

          {/* { screen < 765 && <div> */}
               <div className="w-full lg:hidden">
                    <Image
                      className="w-full"
                      src="/HeroImageMobile.jpg"
                      width={400}
                      height={350}
                      // layout="responsive"
                      alt="hero image"
                    />
               </div>
               <div className="p-7 lg:mt-12">
                    <h3 className="header font-bold text-2xl  lg:text-4xl capitalize">Explore the best camps on earth</h3>
                    <p className="description font-2xl lg:text-2xl py-2">YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <div className="flex py-3">
                        <Image
                          src="/CheckMark.svg"
                          alt="checkmark"
                          width={30}
                          height={30}
                        />
                       <span className="px-3 ">Add your own camp suggestions.</span> 
                    </div> 
                    <div className="flex py-3">
                    <Image
                          src="/CheckMark.svg"
                          alt="checkmark"
                          width={30}
                          height={30}
                        />
                       <span className="px-3 ">Leave reviews and experiences.</span> 
                    </div>
                    <div className="flex pt-3 pb-6">
                    <Image
                          src="/CheckMark.svg"
                          alt="checkmark"
                          width={30}
                          height={30}
                        />
                       <span className="px-3 ">See locations for all camps.</span> 
                    </div>
                    <Link href="/campgrounds" className=""><div className="w-40 bg-black text-white text-sm py-3 px-3 rounded capitalize">view campgrounds</div></Link>
  
                    <div className="py-4">
                        <h5>Partnered with:</h5>
                        <div className="flex px-2">
                        <Image
                          src="/Airbnb.svg"
                          alt="airbnb logo "
                          width={100}
                          height={75}
                        />

                        <Image  
                          src="/Booking.svg"
                          alt="Booking logo "
                          width={100}
                          height={75}
                        />

                        <Image  
                          src="/PlumGuide.svg"
                          alt="PlumGuide logo "
                          width={100}
                          height={75}
                        />
                            
                        </div>
                    </div>
               </div>
            
              

          </div>
{/* this is for the desktop view */}
                <div className="w-1/2 hidden lg:flex overflow-hidden ">
                    <Image
                      className="w-full"
                      src="/HeroImage.jpg"
                      width={400}
                      height={400}
                      // layout="responsive"
                      alt="hero image"
                      // objectFit="cover"
                    />
                </div>
    </div>
  )
}

export default Home