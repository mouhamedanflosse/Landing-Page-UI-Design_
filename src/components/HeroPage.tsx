"use client";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import MoveUpRight from "../../public/assets/svg/arrow.svg";
import dropifxDash from "../../public/assets/images/dropifyImage.png";
import billingIcon from "../../public/assets/svg/billingIcon.svg";
import dargAndDropElement from "../../public/assets/svg/darg&dropElement.svg";

export default function HeroPage() {
  return (
    <div className="bg-[#f7f8f9]">
    <MaxWidthWrapper className="pt-16">
      <div className="max-h-screen relative">
        <div className="flex flex-col items-center">
          <p className="text-6xl leading-[62px] -tracking-[3%] font-sofia_pro text-center font-bold">
            Launch your own <br /> eCommerce store with Dropify
          </p>
          <p className="font-dm_Sans text-center mt-4 mb-9 font-[400] max-w-[808px] text-2xl leading-[33px]">
            In just a few clicks and Maximise your ROI with 500%+. Create your
            own store without prior experience in programming
          </p>
          <form className="max-w-[500px] w-full  mt-2">
            <label className="mb-2 text-sm  text-gray-900 sr-only">
              Search
            </label>
            <div className="relative z-20 mb-6 lg:m-0 h-[74px] ">
              <input
                type="search"
                className="block lg:text-lg  text-base rounded-[74px] text-[#001829] max-w-[500px] lg:h-[62px] h-[58px] w-full p-4 pl-8 border  bg-gray-50 duration-100 outline-none focus:outline-none focus:border-2 border-[#001829] "
                placeholder="Enter Your Email Address"
              />
              {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              <Button className="rounded-[34px]  font-Gilroy shadow-[0px_24px_66px_10px_#a5daff]  font-bold lg:w-[170px] lg:h-[54px]  h-[47px]  absolute top-1 right-1 flex items-center gap-[3px]  text-lg  bg-[#0095fb] hover:bg-[#FFB500] duration-300 hover:shadow-[0px_57px_97px_0px_#ffb50061]">
                Get Started{" "}
                <Image
                  width={17}
                  height={17}
                  alt="icon"
                  className="mt-[1px]"
                  src={MoveUpRight}
                />
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full relative h-[270px] hidden lg:flex items-center flex-col mb-4">
          <div className="flex w-full -top-32 absolute justify-between items-center">
            <div className="relative w-[161px] h-[193px]">
              <div className="absolute"></div>
              <Image
                alt="billing icon"
                className="absolute"
                src={billingIcon}
                fill
              />
            </div>
            <div className="relative w-[248px] -right-14  h-[357px]">
              <Image alt="billing icon" src={dargAndDropElement} fill />
            </div>
          </div>
          <div className="w-[628px] mt-5 relative h-[338px]">
          <div className="absolute -bottom-1/2 w-[628px] h-[338px] flex shadow-[0px_76px_242px_25px_#c9d1da] justify-center items-center p-4 bg-white rounded-[16px]">
            <div className="relative min-w-[612px] min-h-[322px] w-full h-full">
              <Image
                src={dropifxDash}
                className="aspect-video rounded-[13px]"
                fill
                alt="dropify dashboard"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
    </div>
  );
}
