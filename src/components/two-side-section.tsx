import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import FadeIn from "./framer/fadein";

const TwoSideSection = () => {
  return (
    <div className="container">
      {items.map((item: any) => {
        const { key, title, p, image, features } = item;
        return (
          <section key={item.key} id={item.id}>
            <FadeIn>
              <div
                className={`flex flex-col  ${
                  key % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center justify-center gap-16 group`}
              >
                <div className="max-w-[500px]">
                  <h2 className="inline-block text-3xl md:text-4xl xl:text-5xl font-bold border-b-4 md:group-hover:border-secondary border-secondary md:border-white text-primary  delay-300">
                    {title}
                  </h2>
                  <p className="py-10 text-xl md:text-2xl leading-loose">{p}</p>
                  <ul className=" flex flex-col gap-3">
                    {features.map((feature: string, index: number) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-[8px] text-xl md:text-2xl"
                        >
                          <BadgeCheck className="stroke-[1.8px] stroke-secondary" />
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Image
                  src={image}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-full md:w-1/2 h-[500px]"
                />
              </div>
            </FadeIn>
          </section>
        );
      })}
    </div>
  );
};

export default TwoSideSection;

const items = [
  {
    key: 1,
    id: "curtains-&-blinds",
    title: "Curtains & blinds",
    p: "Elevate home and office aesthetics with EmaarDecor's chic curtains and blinds. Our curated collection blends style and functionality, offering the perfect touch for a cozy home or professional workspace.",
    image: "/images/home/curtain1.jpg",
    features: [
      "Stylish Designs",
      "High Quality Materials",
      "Functionality and Elegance",
      "Perfect for Home and Office",
      "Cozy and Professional",
    ],
  },
  {
    key: 2,
    id: "sofa-&-cushions",
    title: "Sofa & Cushions",
    p: "Transform your living and office spaces with EmaarDecor's stylish sofas and cushions. Curated for comfort and elegance, our collection adds a touch of luxury to every setting.",
    image: "/images/home/sofa.jpg",
    features: [
      "Comfortable Seating",
      "Stylish Designs",
      "Luxurious Feel",
      "Ideal for Living Spaces",
      "Office Elegance",
    ],
  },
  {
    key: 3,
    id: "lights",
    title: "Lights",
    p: "Transform your spaces with EmaarDecor's stylish wallpaper and photo frames. Elevate home and office aesthetics with curated designs, adding a personal touch to create a warm and professional ambiance.",
    image: "/images/home/curtain1.jpg",
    features: [
      "Customizable Lighting",
      "Modern Designs",
      "Energy Efficient",
      "Professional Ambiance",
      "Personalized Touch",
    ],
  },
  {
    key: 4,
    id: "artificial-grass-&-plants",
    title: "Artificial Grass & Plants",
    p: "Transform your surroundings with EmaarDecor's lush artificial grass and lifelike plants. Ideal for homes and offices, our curated collection brings nature's touch, blending aesthetics and low-maintenance elegance",
    image: "/images/home/curtain1.jpg",
    features: [
      "Lush Greenery",
      "Low Maintenance",
      "Natural Look",
      "Ideal for Homes and Offices",
      "Aesthetic Appeal",
    ],
  },
  {
    key: 5,
    id: "wall-panels",
    title: "Wall Panels",
    p: "Transform your spaces with EmaarDecor's stylish wall panels. Blending form and function, our curated collection adds a touch of sophistication to any space, creating a visually appealing environment",
    image: "/images/home/curtain1.jpg",
    features: [
      "Modern Wall Decor",
      "Functional Design",
      "Easy Installation",
      "Sophisticated Look",
      "Visual Appeal",
    ],
  },
  {
    key: 6,
    id: "carpets",
    title: "Carpets",
    p: "Transform your home or office with EmaarDecor's exquisite carpets. Our curated collection blends style and comfort, adding a touch of luxury to your living or workspace ambiance.",
    image: "/images/home/curtain1.jpg",
    features: [
      "Luxurious Texture",
      "Durable Materials",
      "Stylish Patterns",
      "Comfortable Feel",
      "Home and Office Use",
    ],
  },
];
