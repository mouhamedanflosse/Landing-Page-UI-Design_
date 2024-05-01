import SectionHeadLine from "./SectionHeadLine";
import Image from "next/image";
import dargANDdropElement from "../../public/assets/svg/features/darg&dropElement.svg";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Features() {
  return (
    <MaxWidthWrapper>
    <div id="Features" className="min-h-screen lg:mt-96 mt-14">
      <SectionHeadLine
        className="text-center mb-10 lg:text-[56px] text-2xl"
        title="Features"
        subTitile="Dropify Is Not Just A Platform"
      />
      <div className="flex">
        <div className="flex mx-auto lg:m-0">
          <div className="flex flex-col gap-y-2 p-4  border-[1.5px] border-[#001829,10%] rounded-[34px] items-center w-full aspect-square lg:max-w-[392px] lg:max-h-[394px] max-w-[322px] max-h-[322px] text-center">
            <div className="relative h-full w-full p-4">
              {/* <Image alt="Drag and drop element" fill className="absolute" s /> */}
              <Image alt="Drag and absolute drop feature" fill className="absolute scale-125 scale-x-[1.3]" src={dargANDdropElement} />
            </div>
            <div className="-translate-y-4">
              <p className="font-bold text-xl">Drag & Drop Builder</p>
              <p className="mt-2">It has never been so simple to edit your pages and design.No coding skills required.</p>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
}
