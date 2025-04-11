import { Calculator, PiggyBank, Shield } from "lucide-react";
import { Card } from "./ui/card";

export const Benefits = () => {
  return (
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
              Estratégias legais para minimizar sua carga tributária e maximizar
              seus lucros
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
              Otimize seu fluxo de caixa com planejamento tributário estratégico
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
