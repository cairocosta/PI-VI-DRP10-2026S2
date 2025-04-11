"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/modal";
import { ContactForm } from "./ContactForm";

export const Cta = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c6a355]">
          Pronto para otimizar sua gestão tributária?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
          Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua
          empresa a economizar e crescer com segurança
        </p>
        <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="gap-2 bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Agende uma consulta gratuita <ArrowRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle>Agende uma Consulta</DialogTitle>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
