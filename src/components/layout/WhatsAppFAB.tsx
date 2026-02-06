import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917568798310";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I am interested in joining your gym. Please share details.");

export const WhatsAppFAB = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg hover:shadow-xl hover:shadow-[hsl(142,70%,45%)]/30 hover:scale-110 transition-all duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: '0 0 20px hsl(142 70% 45% / 0.4)' }}
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};
