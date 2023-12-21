import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import BrandLogo from "./assets/brandlogo";

const Footer = () => {
  return (
    <footer className="border-t-[2px] border-secondary">
      <section className="container flex items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <BrandLogo className="w-[150px]" />
          <p className="text-center">Al Asmawi Building, Al Manama Street, Ras Al Khor 3, Dubai</p>
          <div className="flex item-center justify-center gap-[10px]">
            <Facebook className="stroke-[1.3px] w-[24px] h-[24px] hover:stroke-secondary md:cursor-pointer duration-0" />
            <Instagram className="stroke-[1.3px] w-[24px] h-[24px] hover:stroke-secondary md:cursor-pointer duration-0" />
            <Youtube className="stroke-[1.3px] w-[24px] h-[24px] hover:stroke-secondary md:cursor-pointer duration-0" />
            <Mail className="stroke-[1.3px] w-[24px] h-[24px] hover:stroke-secondary md:cursor-pointer duration-0" />
          </div>
        </div>
      </section>
      <div className="pt-5 pb-10 bg-secondary/80 px-5 text-center">
        All rights reserved @{new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
