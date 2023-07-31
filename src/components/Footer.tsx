import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="grid grid-cols-1 w-full bg-primary h-[880px] md:grid-cols-2 md:h-[650px] lg:grid-cols-3 lg:h-[690px] xl:grid-cols-3 xl:h-[504px]">
        <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:space-y-4 md:mt-[4rem] lg:justify-start lg:space-y-5 lg:mt-[4rem] xl:justify-start xl:space-y-5 xl:mt-[4rem]">
          <span className="text-sm text-center text-secondary font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
            QUICK LINKS
          </span>
          <span className="text-xs text-white font-bold font-poppins ">
            HOME
          </span>
          <span className="text-xs text-white font-bold font-poppins ">
            PRODUCTS
          </span>
          <span className="text-xs text-white font-bold font-poppins ">
            ABOUT
          </span>
          <span className="text-xs text-white font-bold font-poppins ">
            CAREER
          </span>
          <span className="text-xs text-white font-bold font-poppins ">
            BLOG
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:space-y-4 md:mt-[4rem] lg:justify-start lg:space-y-5 lg:mt-[4rem] xl:justify-start xl:space-y-5 xl:mt-[4rem]">
          <span className="text-sm text-center text-secondary font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
            SOCIALS
          </span>
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-secondary hover:text-tertiary w-[18px] h-[18px] ml-2"
            ></FontAwesomeIcon>
            <span className="text-xs text-white font-bold font-poppins">
              FACEBOOK
            </span>
          </div>
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-secondary hover:text-tertiary w-[18px] h-[18px] ml-4"
            ></FontAwesomeIcon>
            <span className="text-xs text-white font-bold font-poppins">
              INSTAGRAM
            </span>
          </div>
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-secondary hover:text-tertiary w-[18px] h-[18px]"
            ></FontAwesomeIcon>
            <span className="text-xs text-white font-bold font-poppins">
              TWITTER
            </span>
          </div>
          <div className="flex gap-x-3">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-secondary hover:text-tertiary w-[18px] h-[18px]"
            ></FontAwesomeIcon>
            <span className="text-xs text-white font-bold font-poppins">
              LINKEDIN
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:space-y-4 md:mt-[4rem] lg:justify-start lg:space-y-5 lg:mt-[4rem] xl:justify-start xl:space-y-5 xl:mt-[4rem]">
          <span className="text-sm text-center text-secondary font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
            CONTACT INFO
          </span>
          <div className="flex gap-x-3">
            <AiOutlineMail
              className="w-[24px] h-[24px] hover:text-tertiary"
              color="white"
            />
            <span className="text-xs text-white font-bold font-poppins">
              cruiserims@gmail.com
            </span>
          </div>
          <div className="flex gap-x-3">
            <AiFillPhone
              className="w-[24px] h-[24px] hover:text-tertiary"
              color="white"
            />
            <span className="text-xs text-white font-bold font-poppins ">
              + 1 *** **** *** ******* **
            </span>
          </div>
          <div className="flex gap-x-3">
            <HiOutlineLocationMarker
              className="w-[24px] h-[24px] hover:text-tertiary"
              color="white"
            />
            <span className="text-xs text-white font-bold font-poppins">
              ************************
            </span>
          </div>
          <div className="flex gap-x-3">
            <AiOutlineClockCircle
              className="w-[24px] h-[24px] hover:text-tertiary ml-[2.5rem]"
              color="white"
            />
            <span className="text-xs text-white text-center font-bold font-poppins ">
              BUSINESS HOURS MON-FRI: <br /> 9am-5pm WEEKENDS:CLOSED
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary w-full h-[60px]">
        <span className="font-extrabold text-xs text-white font-poppins text-center">
          Choose Cruiserims - Elevate Your Driving Experience Today
        </span>
      </div>
    </div>
  );
};

export default Footer;
