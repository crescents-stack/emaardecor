import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import BrandLogo from "./assets/brandlogo";
import Link from "next/link";
import TikTok from "./assets/tittok";

const Footer = () => {
  return (
    <footer className="border-t-[2px] border-secondary">
      <section className="container flex items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <BrandLogo className="w-[150px]" />
          <p className="text-center">
            Al Asmawi Building, Al Manama Street, Ras Al Khor 3, Dubai
          </p>
          <div className="flex item-center justify-center gap-[10px]">
            <Link
              href="https://facebook.com/profile.php?id=61554859595529"
              passHref={true}
              target="_blank"
            >
              <Facebook className="stroke-[1.3px] w-[20px] h-[20px] hover:stroke-secondary md:cursor-pointer" />
            </Link>
            <Link
              href="https://instagram.com/emaar_decor/?next=%2F"
              passHref={true}
              target="_blank"
            >
              <Instagram className="stroke-[1.3px] w-[20px] h-[20px] hover:stroke-secondary md:cursor-pointer" />
            </Link>
            <Link
              href="http://tiktok.com/@emaardecor"
              passHref={true}
              target="_blank"
            >
              <TikTok className="stroke-[0.8px] w-[20px] h-[20px] hover:stroke-secondary md:cursor-pointer" />
            </Link>
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
