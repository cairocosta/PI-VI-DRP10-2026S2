import { FileCheck } from "lucide-react";
import { systemConfigs } from "../config/configs";

export const Services = () => {
  return (
    <section id="services" className="py-24 gradient-bg relative">
      <div className="absolute inset-0 bg-[url('../assets/services-bg.webp')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#c6a355]">
          {systemConfigs.services.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {systemConfigs.services.items.map((service, index) => (
            <div key={index} className="flex gap-6 group">
              <FileCheck className="w-8 h-8 text-[#c6a355] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
