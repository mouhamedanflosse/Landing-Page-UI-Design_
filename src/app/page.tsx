import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <div>
        <Navbar />
        <HeroPage />
        <Features />
      </div>
    </main>
  );
}
