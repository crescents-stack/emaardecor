import Link from "next/link";
import WhatsApp from "./assets/whatsapp";

const WhatsAppCall = () => {
  return (
    <Link
    href="https://wa.me/971544091984"
      passHref={true}
      target="_blank"
      className="fixed bottom-0 right-0 mr-[30px] mb-[80px] z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full"
    >
      <WhatsApp className="w-[20px]" />
    </Link>
  );
};
export default WhatsAppCall;
