import SectionHeadLine from "./SectionHeadLine";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import languagesSVg from "../../public/assets/svg/features/translationicon.svg";
import { svg } from "@/conifg/svgConifg";


export default function Features() {
  return (
    <div className="w-full">
    <MaxWidthWrapper className="  w-full">
      <div id="Features" className="min-h-screen  w-full lg:mt-96 mt-14">
        <SectionHeadLine
          className="text-center mb-10 lg:text-[56px] text-2xl"
          title="Features"
          subTitile="Dropify Is Not Just A Platform"
        />
        <div className="flex  w-[1224px] flex-wrap  gap-3">
          <div className="flex  flex-col ">
            <div className="flex w-full  flex-wrap  mx-auto lg:m-0 gap-5">
              <div className="flex flex-col mx-auto gap-y-1 px-4 pt-0 pb-0  border-[1.5px] border-[#001829,10%] rounded-[34px] items-center h-fit  max-w-[342px] max-h-[342px] text-center">
                <div className="relative aspect-square w-full">
                  {/* <Image alt="Drag and drop element" fill className="absolute" s /> */}
                  <Image
                    alt="Drag and absolute drop feature"
                    fill
                    className="absolute scale-125 scale-x-[1.3]"
                    src={svg.dargANDdropElement}
                  />
                </div>
                <div className="-translate-y-8 ">
                  <p className="font-[650] text-lg font-dm_Sans">
                    Drag & Drop Builder
                  </p>
                  <p className="text-[14px] translate-y-2 font-[400]">
                    It has never been so simple to edit your pages and design.No
                    coding skills required.
                  </p>
                </div>
              </div>
              <div className="flex mx-auto flex-col gap-y-2">
                <div className="grow pt-5 px-6 mb-2  flex flex-col  border-[1.5px] border-[#001829,10%] rounded-[34px] items-center h-fit  max-w-[338px]">
                  <div>
                    <h2 className="font-bold font-dm_Sans text-lg ">
                      Dropify marketplace
                    </h2>
                    <p className="font-dm_Sans font-[400] mt-3 text-sm">
                      Pre-made beautiful ecommerce themes and apps that
                      integrate directly with dropify.
                    </p>
                  </div>
                  <div className="relative self-end felx justify-between  w-44 h-16">
                    <Image
                      alt="product icon"
                      src={svg.TshirtCard}
                      className=" absolute w-40 -left-11  aspect-video"
                    />
                    <Image
                      alt="product icon"
                      src={svg.shoseCard}
                      className="absolute w-64 aspect-video"
                    />
                    <Image
                      alt="product icon"
                      src={svg.pantsCard}
                      className="absolute w-40 -right-11 aspect-video"
                    />
                  </div>
                </div>
                <div className="flex p gap-5 justify-center px-6 py-4 border-[1.5px] border-[#001829,10%] rounded-[26px] items-center h-fit  max-w-[338px]">
                  <div className="relative w-32 h-16">
                    <Image
                      src={svg.chineseLett}
                      className="absolute w-14 h-14 top-0 right-0"
                      alt="languages icon"
                    />
                    <Image
                      src={svg.alphabetLett}
                      className="absolute w-9 h-14 -bottom-0.5 left-2"
                      alt="languages icon"
                    />
                  </div>
                  <p className="font-bold font-dm_Sans text-lg leading-[23px]">
                    Multiple Langauges & currencies
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto h-16">t7aaan</div>
          </div>
          <div></div>
          <div className="gap-2 ">
            <div className="flex grow flex-col gap-y-1 px-4 pt-0 pb-0  border-[1.5px] border-[#001829,10%] rounded-[32px] items-center h-[442px] max-w-[300px] text-center">
              <div className="w-[244px] h-[251px] rounded-[24px] m-4 bg-[rgb(245,246,246)] ">
              <div className="relative w-[200px] h-[170px] mx-auto aspect-square  ">
                {/* <Image alt="Drag and drop element" fill className="absolute" s /> */}
                <Image
                  alt="Drag and absolute drop feature"
                  fill
                  className="absolute -translate-x-[25px] translate-y-[40px] scale-125 scale-x-[1.2]"
                  src={svg.computreIllustration}
                />
              </div>
              </div>
              <div className="">
                <p className="font-[650] text-lg font-dm_Sans">
                Responsive design
                </p>
                <p className="text-[14px] translate-y-2 font-[400]">
                Your pages will render well on all devices or screen sizes to ensure usability.
                </p>
              </div>
            </div>
            <div className="grow pt-5 px-6 mt-5  flex flex-col  border-[1.5px] border-[#001829,10%] rounded-[34px] items-center h-fit  max-w-[282px]">
              <div>
                <div className="relative w-24 aspect-square">
                  <Image src={svg.graphIllustration} fill alt="graph Illustration" className="absolute" />
                </div>
                <div className="-translate-y-4 flex flex-col gap-4">
                <h2 className="font-bold font-dm_Sans text-lg ">
                Tools to help you grow
                </h2>
                <p className="font-dm_Sans font-[400] text-[14px] text-sm">
                We&#44;re here to give you tools that will help you grow a successful, sustainable online business.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
    </div>
  );
}
