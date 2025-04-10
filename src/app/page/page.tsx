"use client";

import {
  ArrowRight,
  Calculator,
  FileCheck,
  PiggyBank,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-white p-10">
              Consultoria Tributária Especializada
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
              Maximize seus resultados com uma gestão tributária inteligente e
              eficiente
            </p>
            <Button
              size="lg"
              className="gap-2 bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Fale com um especialista <ArrowRight className="w-4 h-4" />
            </Button>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')] bg-cover bg-center opacity-5"></div>
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
          <Button
            size="lg"
            className="gap-2 bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Agende uma consulta gratuita <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
