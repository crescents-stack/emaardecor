import Link from "next/link";
import { HeroCarousel } from "../carousel";
import FadeIn from "../framer/fadein";

const HomeHero = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/90 to-black/40 z-10">
        <div className="container flex items-center justify-center md:justify-start">
          <FadeIn>
            <div className="max-w-[500px] h-full flex flex-col gap-10 [&>*]:text-white">
              <h1 className="text-primary font-semibold text-2xl lg:text-3xl">
                Crafting Dreams, Defining Spaces
              </h1>
              <p className="text-primary leading-loose">
                Step into a world of refined luxury with EmaarDecor! Elevate
                your space with our exquisite range - from chic curtains to lush
                artificial grass, plush sofas, dazzling lights, and more. Our
                design expertise extends from villas to events. Redefine your
                style with EmaarDecor, where every detail tells a captivating
                story!
              </p>
              <Link
                href="https://wa.me/971544091984"
                passHref={true}
                target="_blank"
              >
                <button className="px-[24px] py-[10px] bg-secondary hover:bg-white hover:text-primary text-primary font-semibold active:scale-[98%] ">
                  Get a Service
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      <HeroCarousel />
    </div>
  );
};

export default HomeHero;
