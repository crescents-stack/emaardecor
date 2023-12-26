import Image from "next/image";
import FadeIn from "../framer/fadein";

const Services = () => {
  return (
    <section
      className="container group flex flex-col justify-center items-center gap-10"
      id="services"
    >
      <h2 className="inline-block text-3xl md:text-4xl xl:text-5xl font-bold border-b-4 md:group-hover:border-secondary border-secondary md:border-white text-primary  delay-300">
        Our Services
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {services.map((item: any) => {
          return (
            <div key={item.id}>
              <FadeIn>
                <div className="relative min-w-[300px] max-w-[300px] h-[250px] [&>*:first-child]:hover:backdrop-filter-none hover:scale-[105%]">
                  <div className="absolute bottom-0 left-0 w-full h-[80px] backdrop-blur bg-white/60 flex items-center justify-center z-10">
                    <span className="text-xl md:text-2xl font-medium">
                      {item.name}
                    </span>
                  </div>
                  <Image
                    src={item.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                  />
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    id: 1,
    name: "Villas",
    image: "/images/home/villa.avif",
  },
  {
    id: 2,
    name: "Apartments",
    image: "/images/home/apartment.avif",
  },
  {
    id: 3,
    name: "Offices",
    image: "/images/home/office.avif",
  },
  {
    id: 4,
    name: "Schools",
    image: "/images/home/school.avif",
  },
  {
    id: 5,
    name: "Club & Bar",
    image: "/images/home/bar.avif",
  },
  {
    id: 6,
    name: "Events",
    image: "/images/home/event.avif",
  },
];
