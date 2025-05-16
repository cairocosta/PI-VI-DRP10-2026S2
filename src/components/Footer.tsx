export const Footer = () => {
  return (
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
              <li>+55 (16) 98123-7871</li>
              <li>denisgoncalves2008@hotmail.com</li>
              {/* <li>Av. Paulista, 1000</li> */}
              <li>Morro Agudo - SP</li>
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
  );
};
