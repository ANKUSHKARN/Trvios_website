import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroimg from "../../assets/HeroSectionImg.jpg";
import Navbar from "../common/Navbar";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[600px] bg-white"> 
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0" 
          style={{ backgroundImage: `url(${heroimg})` }}
        />

        <div className="relative z-20 w-full h-full flex flex-col justify-between">
          
          <div className="w-full">
            <Navbar />
          </div>
          
          <div className="flex-1 flex items-center justify-center lg:px-28 px-10">
            <h1 
              data-aos="zoom-in" 
              className="text-6xl font-bold text-black text-center lg:leading-[70px] leading-[60px]"
            >
              Where would you like to go?
            </h1>
          </div>

          <div className="h-14"></div>
        </div>
      </div>

      <div className="relative z-30">
        <div 
          data-aos="zoom-in" 
          id="form" 
          className="lg:w-[70%] w-full m-auto justify-center items-center p-8 rounded-xl -mt-14 bg-transparent"
        >
          <div className="flex items-center justify-between w-full px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm max-w-4xl mx-auto">
            
            <div className="flex items-center flex-1 gap-4">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
              </svg>

              <div className="w-[1px] h-6 bg-gray-300"></div>

              <input 
                type="text" 
                placeholder="Hidden gems nearby..." 
                className="w-full text-lg text-gray-600 bg-transparent placeholder-gray-400 outline-none"
              />
            </div>

            <button type="button" className="p-2.5 ml-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shrink-0">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
