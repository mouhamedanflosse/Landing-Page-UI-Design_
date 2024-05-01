import { Inter,Oswald,DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"], variable : "--font-inter" ,display: 'swap',});
export const oswald = Oswald({ subsets: ["latin"], variable : "--font-oswald" , display: 'swap', });
export const dm_Sans = DM_Sans({ subsets: ["latin"], variable : "--font-dm_Sans" , display: 'swap', });
export const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] ,variable : "--font-plus_Jakarta_Sans" , display: 'swap', });
export const sofia_pro = localFont({src : "../../../public/assets/font_lib/Sofia Pro Bold Az.otf" , variable : "--font-sofia_pro"})
export const Gilroy = localFont({src : "../../../public/assets/font_lib/Gilroy-FREE/Gilroy-Light.otf" , variable : "--font-Gilroy"})

