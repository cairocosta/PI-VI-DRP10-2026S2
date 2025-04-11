import Image from "next/image";
import logo from "@/assets/logo.svg";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-4">
      <div className="container mx-auto px-4 flex justify-center md:justify-start">
        <Image src={logo} alt="Logo" className="h-20 w-auto" priority />
      </div>
    </header>
  );
};
