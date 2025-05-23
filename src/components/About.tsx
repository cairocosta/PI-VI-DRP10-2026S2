"use client";

import { systemConfigs } from "@/config/configs";

export const About = () => {
  return (
    <section id="about" className="py-24 gradient-bg relative">
      <div className="absolute inset-0 bg-[url('../assets/services-bg.webp')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#c6a355]">
            {systemConfigs.about.title}
          </h2>
          <p className="text-xl mb-6 text-zinc-300 leading-relaxed">
            {systemConfigs.about.description}
          </p>
          <p className="text-xl text-zinc-300 leading-relaxed">
            {systemConfigs.about.additionalInfo}
          </p>
        </div>
      </div>
    </section>
  );
};
