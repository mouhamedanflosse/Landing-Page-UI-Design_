"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import logo from "../../public/assets/dropifyLogo.svg";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MoveUpRight from "../../public/assets/svg/arrow.svg";
import { routes } from "@/conifg/routesConig";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NavMobile from "./MobileNav";
export default function Navbar() {
  const [language, setLanguage] = useState("English");
  const [open, setopen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  // langauge routing switch
  // function switchLocale(locale: string) {
  //   // e.g. '/en/about' or '/fr/contact'
  //   const newPath = `/${locale}${pathname}`
  //   window.history.replaceState(null, '', newPath)
  // }

  console.log(pathname);
  return (
    <div className="w-full sticky bg-[#f7f8f9] top-o pt-6 ">
      <MaxWidthWrapper>
        <div className="flex justify-between  h-10">
          <div className="relative min-w-36 max-w-36 cursor-pointer">
            <Image
              src={logo}
              fill
              alt="Dropify"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="flex item-center">
            <div className="lg:min-w-[657px] flex items-center justify-between gap-10">
              <ul className="lg:min-w-[473px] mt-3 [&>li]:leading-[17.6px] [&>li]:cursor-pointer leading-[17.6px]  flex items-center justify-between font-dm_Sans ">
                {routes.map((route, id) => {
                  return (
                    <li
                      key={id}
                      className="hover:font-[550] hidden lg:block duration-300 "
                    >
                      <Link
                        className={`link ${
                          pathname === `/#${route.route}`
                            ? "underline text-red-500"
                            : ""
                        }`}
                        href={`#${route.route}`}
                      >
                        {route.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="hidden text-[#9facba] text-[8px]  lg:block">
                  |
                </li>
                <li className="mr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        {language}
                        <ChevronDown
                          className={cn(
                            "h-[14px] w-[14px] transition-all text-black font-bold",
                            {
                              "-rotate-180": false,
                            }
                          )}
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 cursor-pointer">
                      {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                      {/* <DropdownMenuSeparator /> */}
                      <DropdownMenuRadioGroup
                        value={language}
                        onValueChange={setLanguage}
                      >
                        <DropdownMenuRadioItem
                          // onClick={() => switchLocale('en')}
                          value="English"
                        >
                          English
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                          // onClick={() => switchLocale('ar')}
                          value="العربية"
                        >
                          العربية
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem
                          // onClick={() => switchLocale('fr')}
                          value="Français"
                        >
                          Français
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
              <Button className="rounded-[20px] w-[90px] hidden lg:flex items-center gap-[3px] h-9 bg-[#0095fb] hover:bg-[#FFB500] duration-300 relative font-dm_Sans">
                Login{" "}
                <Image
                  width={12}
                  height={12}
                  alt="icon"
                  className="mt-[1px]"
                  src={MoveUpRight}
                />
              </Button>
            </div>
            <NavMobile />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
