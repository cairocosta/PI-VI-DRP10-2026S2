"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/modal";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="relative gradient-bg py-24">
      <div className="absolute inset-0 bg-[url('../assets/hero-bg.webp')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-white p-10">
            Consultoria Tributária Especializada
          </h1>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Maximize seus resultados com uma gestão tributária inteligente e
            eficiente
          </p>
          <Dialog
            open={isContactModalOpen}
            onOpenChange={setIsContactModalOpen}
          >
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="gap-2 bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Fale com um especialista <ArrowRight className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTitle>Entre em Contato</DialogTitle>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
