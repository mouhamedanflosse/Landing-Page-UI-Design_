"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/conifg/routesConig";

export default function NavMobile() {
  const router = useRouter();

  const goToCategory = (herf: string) => {
    router.push(herf);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="lg:hidden">
        <SheetTrigger asChild>
          <div className="flex flex-col gap-9">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {routes.map((route, i) => {
                return (
                  <li key={i} className="me-2">
                    <Link
                      href={`#${route.route}`}
                      aria-current="page"
                      className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                    >
                      {route.route}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
}
