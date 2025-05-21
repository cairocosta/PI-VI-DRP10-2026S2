"use client";

import { MessageCircle } from "lucide-react";
import { systemConfigs } from "@/config/configs";

export const WhatsAppButton = () => {
  return (
    <a
      href={systemConfigs.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors duration-300 z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
