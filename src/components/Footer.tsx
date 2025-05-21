import { systemConfigs } from "@/config/configs";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-zinc-300 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-left">
          {/* Coluna 1 - Sobre */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-[#c6a355] font-semibold text-lg text-center">
              Sobre Nós
            </h4>
            <p className="text-sm text-center leading-relaxed text-zinc-300/90">
              {systemConfigs.company.description}
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-[#c6a355] font-semibold text-lg text-center">
              Links Rápidos
            </h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="text-center">
                <a
                  href="#hero"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Início
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#benefits"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Benefícios
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#services"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Serviços
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#tax-regimes"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Regimes Tributários
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#about"
                  className="hover:text-[#c6a355] transition-colors duration-200"
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-[#c6a355] font-semibold text-lg text-center">
              Contato
            </h4>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="text-center">
                <a
                  href={`tel:${systemConfigs.contact.phone}`}
                  className="flex items-center gap-2 hover:text-[#c6a355] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  {systemConfigs.contact.phone}
                </a>
              </li>
              <li className="text-center">
                <a
                  href={`mailto:${systemConfigs.contact.email}`}
                  className="flex items-center gap-2 hover:text-[#c6a355] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  {systemConfigs.contact.email}
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {systemConfigs.company.address}
              </li> */}
            </ul>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-[#c6a355] font-semibold text-lg text-center">
              Redes Sociais
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href={systemConfigs.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c6a355] transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={systemConfigs.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c6a355] transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {systemConfigs.company.name}.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
