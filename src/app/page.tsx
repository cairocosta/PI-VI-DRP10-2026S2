"use client";

import * as React from "react";
import {
  ArrowRight,
  Calculator,
  FileCheck,
  PiggyBank,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/modal";
import { ContactForm } from "@/components/ui/contact-form";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  return (
    <main className="min-h-screen">
      <header className="absolute top-0 left-0 w-full z-10 py-4">
        <div className="container mx-auto px-4 flex justify-center md:justify-start">
          <Image src={logo} alt="Logo" className="h-20 w-auto" priority />
        </div>
      </header>
      {/* Hero Section */}
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

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#c6a355]">
            Como podemos ajudar sua empresa
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 card-gradient border-slate-700/50 hover:border-[#c6a355]/50 transition-all duration-300">
              <PiggyBank className="w-12 h-12 text-[#c6a355] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Redução de Impostos
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Estratégias legais para minimizar sua carga tributária e
                maximizar seus lucros
              </p>
            </Card>
            <Card className="p-8 card-gradient border-slate-700/50 hover:border-[#c6a355]/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-[#c6a355] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Prevenção de Riscos
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Evite multas e penalidades com uma gestão tributária preventiva
              </p>
            </Card>
            <Card className="p-8 card-gradient border-slate-700/50 hover:border-[#c6a355]/50 transition-all duration-300">
              <Calculator className="w-12 h-12 text-[#c6a355] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Gestão Financeira
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Otimize seu fluxo de caixa com planejamento tributário
                estratégico
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 gradient-bg relative">
        <div className="absolute inset-0 bg-[url('../assets/services-bg.webp')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#c6a355]">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex gap-6 group">
              <FileCheck className="w-8 h-8 text-[#c6a355] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Planejamento Tributário
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Desenvolvimento de estratégias para otimização fiscal e
                  redução legal de impostos
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <FileCheck className="w-8 h-8 text-[#c6a355] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Consultoria Fiscal
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Orientação especializada para questões tributárias complexas
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <FileCheck className="w-8 h-8 text-[#c6a355] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Recuperação de Impostos
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Identificação e recuperação de créditos tributários
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <FileCheck className="w-8 h-8 text-[#c6a355] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Compliance Fiscal
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  Adequação às normas e regulamentações tributárias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c6a355]">
            Pronto para otimizar sua gestão tributária?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-zinc-300 leading-relaxed">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar
            sua empresa a economizar e crescer com segurança
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
      <footer className="bg-slate-900 text-zinc-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {/* Coluna 1 - Sobre */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[#c6a355] font-semibold text-lg mb-4">
                Sobre Nós
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                Especialistas em consultoria tributária, oferecendo soluções
                personalizadas para otimizar sua gestão fiscal.
              </p>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[#c6a355] font-semibold text-lg mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c6a355] transition-colors duration-200"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c6a355] transition-colors duration-200"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c6a355] transition-colors duration-200"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#c6a355] transition-colors duration-200"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Contato */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[#c6a355] font-semibold text-lg mb-4">
                Contato
              </h4>
              <ul className="space-y-2">
                <li>+55 (11) 1234-5678</li>
                <li>contato@empresa.com.br</li>
                <li>Av. Paulista, 1000</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>

            {/* Coluna 4 - Redes Sociais */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[#c6a355] font-semibold text-lg mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700/50 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} DLG | Consultoria Tributária.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
