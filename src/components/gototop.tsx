import { ChevronUp } from "lucide-react";
import Link from "next/link";

const GoToTop = () => {
  return (
    <Link
      href="/#top"
      className="fixed bottom-0 right-0 m-[30px] z-10 md:cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white border border-secondary hover:bg-secondary"
    >
      <ChevronUp />
    </Link>
  );
};
export default GoToTop;
