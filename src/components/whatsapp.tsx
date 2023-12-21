import Link from "next/link";
import WhatsApp from "./assets/whatsapp";

const WhatsAppCall = () => {
  return (
    <Link
      href="https://wa.me/15551234567"
      passHref={true}
      target="_blank"
      className="fixed bottom-0 right-0 mr-[30px] mb-[80px] z-10 md:cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white border border-secondary hover:bg-secondary"
    >
      <WhatsApp className="w-[20px]" />
    </Link>
  );
};
export default WhatsAppCall;
