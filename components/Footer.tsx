import { FaLocationArrow, FaVolumeLow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { Magicbutton } from "./ui/tailwindbutton";
//import {MagicButton} from "@/components/ui/tailwindbutton";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
    
      <div className="w-full absolute left-0 -bottom-0 min-h-66">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        <span className='text-white'>Ready to take</span> <span className="text-purple">your</span> <span className="text-white">digital
        presence to the next level?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:anilkumarkasi0386@gmail.com">
           <Magicbutton title="Let's get in touch"
              icon={<FaLocationArrow/>}
              position="right" 
           />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          <span className='text-white'>copyright@Anilkumar</span>
        </p>

        <div className="flex items-center justify-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-2"
            >
               <a href={info.link}><img src={info.img}  alt="icons" width={20} height={20}/></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

