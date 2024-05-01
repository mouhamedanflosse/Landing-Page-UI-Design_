"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

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

          </div>
        </SheetTrigger>
      </SheetContent>
    </Sheet>
  );
}
