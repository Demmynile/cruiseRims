import { useCallback, useState } from "react";
import Navbar from "./Navbar";

type heroProps = {
  title: string;
  subtitle: string;
  imageLabel: string;
};

function Hero({ title, subtitle, imageLabel }: heroProps) {
  // state for the hamburger using the mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // function that switches the hamburger to the nav links
  const showMobileNavLinks = useCallback(() => {
    setIsMobile(!isMobile);

    return () => {
      setIsMobile(false);
    };
  }, [isMobile]);

  console.log(isMobile);

  return (
    <div className={`w-full h-[452px] bg-no-repeat bg-cover ${imageLabel}`}>
      <Navbar isMobile={isMobile} showMobileNavLinks={showMobileNavLinks} />

      {/* Mobile view navigation links */}
      {isMobile && (
        <div className="w-full h-[395px] bg-black z-10 flex flex-col space-y-9 items-center justify-center">
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              HOME
            </span>
          </div>
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              PRODUCTS
            </span>
          </div>
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              ABOUT
            </span>
          </div>
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              CONTACT
            </span>
          </div>
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              CAREER
            </span>
          </div>
          <div>
            <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              BLOG
            </span>
          </div>
        </div>
      )}

      <div className=" flex flex-col space-y-6 items-center justify-center w-full h-[395px] ">
        <span className="text-white font-jost text-[2rem] font-bold text-center xl:text-[5rem] lg:text-[4rem] md:text-[3rem]">
          {title}
        </span>

        <span className="text-white font-poppins text-xs text-center font-bold">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default Hero;
