import HomeHero from "@/components/pages/homehero";
import Services from "@/components/pages/services";
import TwoSideSection from "@/components/two-side-section";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeHero />
      <TwoSideSection />
      <Services />
    </div>
  );
};

export default Home;
