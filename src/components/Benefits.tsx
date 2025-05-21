import { Calculator, PiggyBank, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { systemConfigs } from "../config/configs";

export const Benefits = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "PiggyBank":
        return <PiggyBank className="w-12 h-12 text-[#c6a355] mb-6" />;
      case "Shield":
        return <Shield className="w-12 h-12 text-[#c6a355] mb-6" />;
      case "Calculator":
        return <Calculator className="w-12 h-12 text-[#c6a355] mb-6" />;
      default:
        return null;
    }
  };

  return (
    <section id="benefits" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#c6a355]">
          {systemConfigs.benefits.title}
        </h2>
        <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto text-center">
          {systemConfigs.company.description}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {systemConfigs.benefits.items.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 card-gradient border-slate-700/50 hover:border-[#c6a355]/50 transition-all duration-300"
            >
              {getIconComponent(benefit.icon)}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
