import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface props {
    image : string, 
    title : string, 
    className? : string, 
    disk : any
}

export default function CardElement({image, title, disk ,className} : props) {
  return (
    <div className={cn("flex flex-col gap-y-2 p-4  border-[1.5px] border-[#001829,10%] rounded-[34px] items-center w-full aspect-square lg:max-w-[392px] lg:max-h-[394px] max-w-[322px] max-h-[322px] text-center", className)}>
            <div className="relative h-full w-full p-4">
              {/* <Image alt="Drag and drop element" fill className="absolute" s /> */}
              <Image alt="Drag and absolute drop feature" fill className="absolute scale-125 scale-x-[1.3]" src={image} />
            </div>
            <div className="-translate-y-4">
              <p className="font-bold text-xl">{title}</p>
              <p className="mt-2 font-[400]">{disk}</p>
            </div>
          </div>
  )
}
