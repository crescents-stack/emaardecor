import Link from "next/link";
import BrandLogo from "./assets/brandlogo";
import WhatsApp from "./assets/whatsapp";
import MobileNav from "./mobile-nav";
import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 backdrop-blur bg-white/80 border-b z-50"
      id="top"
    >
      <div className="hidden md:block bg-secondary/70 py-[4px]">
        <div className="container flex items-center justify-between gap-[20px]">
          <div className="flex item-center justify-start gap-[8px]">
            <MapPin className="w-[16px] h-[16px] stroke-[1.3px]" />
            <span className="text-[12px]">
              Al Asmawi Building, Al Manama Street, Ras Al Khor 3, Dubai
            </span>
          </div>
          <div className="flex item-center justify-start gap-[10px]">
            <Facebook className="stroke-[1.3px] w-[16px] h-[16px] hover:stroke-white md:cursor-pointer" />
            <Instagram className="stroke-[1.3px] w-[16px] h-[16px] hover:stroke-white md:cursor-pointer" />
            <Youtube className="stroke-[1.3px] w-[16px] h-[16px] hover:stroke-white md:cursor-pointer" />
            <Mail className="stroke-[1.3px] w-[16px] h-[16px] hover:stroke-white md:cursor-pointer" />
          </div>
        </div>
      </div>
      <nav className="container py-[10px] flex items-center justify-between gap-[90px]">
        <Link href="/">
          <BrandLogo className="w-[100px]" />
        </Link>
        <ul className="hidden min-[950px]:flex items-center justify-center">
          {Links.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="hover:text-secondary px-[10px] py-[4px]"
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;

export const Links = [
  {
    id: 1,
    text: "Curtains & blinds",
    link: "#curtains-&-blinds",
  },
  {
    id: 2,
    text: "Sofa & cushions",
    link: "#sofa-&-cushions",
  },
  {
    id: 3,
    text: "Artificial grass & plants",
    link: "#artificial-grass-&-plants",
  },
  {
    id: 4,
    text: "Wall panels",
    link: "#wall-panels",
  },
  {
    id: 5,
    text: "Carpets",
    link: "#carpets",
  },
  {
    id: 6,
    text: "Services",
    link: "#services",
  },
];