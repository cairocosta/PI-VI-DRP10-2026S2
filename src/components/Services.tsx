import { FileCheck } from "lucide-react";

export const Services = () => {
  return (
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
                Desenvolvimento de estratégias para otimização fiscal e redução
                legal de impostos
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
  );
};
