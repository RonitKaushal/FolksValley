import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[100vh] justify-center items-center align-middle">
      <ModeToggle></ModeToggle>
    </div>
  );
}
