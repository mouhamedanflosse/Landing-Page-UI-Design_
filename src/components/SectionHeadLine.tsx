import { cn } from '@/lib/utils';
interface props {
    title: string ;
    subTitile?: string | null;
    discreption?: string | null;
    className? : string,
  }
export default function SectionHeadLine({title , subTitile , discreption , className} : props) {
  return (
    <div className={cn("w-full items-center flex flex-col gap-y-7 ", className)}>
      <div className='bg-[#e7f2f9] brd-gradient rounded-l-[34px] text-[#0095FB] opacity-70 w-fit text-lg py-2 px-4 font-plus_Jakarta_Sans'>{title}</div>
      <p className='font-plus_Jakarta_Sans font-bold'>{subTitile}</p>
      <p className='font-dm_Sans text-base'>{discreption}</p>
    </div>
  )
}
