import { FileCheck } from "lucide-react";
import { Card } from "./ui/card";
import { systemConfigs } from "../config/configs";

export const TaxRegimes = () => {
  return (
    <section id="tax-regimes" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#c6a355]">
          {systemConfigs.taxRegimes.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {systemConfigs.taxRegimes.items.map((regime, index) => (
            <Card
              key={index}
              className="p-8 card-gradient border-slate-700/50 hover:border-[#c6a355]/50 transition-all duration-300"
            >
              <FileCheck className="w-12 h-12 text-[#c6a355] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {regime.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                {regime.description}
              </p>
              <p className="text-zinc-300 leading-relaxed">
                → {regime.details}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
