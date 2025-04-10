"use client";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white relative">
      <Button
        variant="secondary"
        className={`fixed bottom-4 right-4 rounded-full size-10 transition-opacity duration-300 hover:bg-gray-200 group ${
          showScrollButton ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 text-gray-600 group-hover:text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </Button>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
          <Image src={logo} alt="Logotipo" width={100} />
          <div className="hidden md:flex space-x-8">
            <Button
              variant={"link"}
              onClick={() => scrollToSection("servicos")}
            >
              Serviços
            </Button>
            <Button variant={"link"} onClick={() => scrollToSection("sobre")}>
              Sobre Nós
            </Button>
            <Button variant={"link"} onClick={() => scrollToSection("contato")}>
              Contato
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button
              variant={"secondary"}
              onClick={() => scrollToSection("contato")}
            >
              Agendar Consulta
            </Button>
            <Button onClick={() => scrollToSection("contato")}>
              Fale Conosco
            </Button>
          </div>
        </nav>

        <div className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Consultoria Tributária Especializada
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Soluções personalizadas para otimizar sua carga tributária e manter
            sua empresa em conformidade com a legislação
          </p>
          <Button size="lg" className="px-8 py-6 text-lg">
            Solicite uma Avaliação Gratuita
          </Button>
        </div>
      </section>

      <section id="servicos" className="bg-gray-50 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Planejamento Tributário
              </h3>
              <p className="text-gray-600">
                Estratégias para redução legal da carga tributária e otimização
                fiscal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Consultoria Fiscal</h3>
              <p className="text-gray-600">
                Orientação especializada em tributos e obrigações fiscais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Regularização Tributária
              </h3>
              <p className="text-gray-600">
                Auxílio na regularização de débitos e conformidade fiscal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Por que nos escolher?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Experiência</h3>
              <p className="text-gray-600">+15 anos no mercado tributário</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Atendimento</h3>
              <p className="text-gray-600">Suporte personalizado</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-gray-600">Economia comprovada</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">100% em conformidade</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="bg-gray-900 text-white py-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para otimizar seus impostos?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e agende uma consulta gratuita
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
            Agende sua Consulta
          </Button>
        </div>
      </section>
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Sobre Nós</h4>
              <p className="text-gray-600">
                Especialistas em consultoria tributária, oferecendo soluções
                personalizadas para sua empresa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-600">
                <li>contato@empresa.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>
              &copy; 2024 Consultoria Tributária. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
