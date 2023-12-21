"use client";

import { useState } from "react";
import BrandLogo from "./assets/brandlogo";
import { X, Menu } from "lucide-react";
import { Links } from "./navbar";
import Link from "next/link";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="flex min-[950px]:hidden">
        <Menu onClick={() => setOpenNav(true)} className="md:cursor-pointer" />
      </div>
      <div
        className={`fixed bg-white/40 top-0 left-0 w-full h-[100vh] z-50 ${
          openNav ? "-translate-y-[0px]" : "-translate-y-[100vh]"
        } `}
      >
        <div className="container py-10 bg-white px-5">
          <div className="flex items-center justify-between gap-10">
            <BrandLogo className="w-[100px]" />
            <X onClick={() => setOpenNav(false)} className="stroke-gray-500" />
          </div>
          <ul className="flex flex-col gap-2 pt-10">
            {Links.map((item: any) => {
              return (
                <li key={item.id} onClick={() => setOpenNav(false)}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
