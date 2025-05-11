"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  sexo: string;
  role: string;
  content: string;
  image: string;
}

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const testimonials: TestimonialProps[] = [
  {
    name: "João Silva",
    sexo: "Masculino",
    role: "CEO, Empresa ABC",
    content:
      "A DLG Consultoria transformou completamente nossa gestão tributária. Sua expertise nos ajudou a economizar recursos significativos.",
    image: "",
  },
  {
    name: "Maria Santos",
    sexo: "Feminino",
    role: "Diretora Financeira, XYZ Ltda",
    content:
      "Profissionalismo e conhecimento técnico excepcionais. Recomendo fortemente os serviços da DLG Consultoria.",
    image: "",
  },
  {
    name: "Pedro Oliveira",
    sexo: "Masculino",
    role: "Empresário",
    content:
      "Excelente suporte em questões tributárias complexas. A equipe da DLG é altamente qualificada e atenciosa.",
    image: "",
  },
  {
    name: "Ana Beatriz Costa",
    sexo: "Feminino",
    role: "Diretora Administrativa, Grupo RST",
    content:
      "A consultoria personalizada da DLG nos permitiu implementar estratégias tributárias que resultaram em economia substancial para nossa empresa.",
    image: "",
  },
  {
    name: "Ricardo Mendes",
    sexo: "Masculino",
    role: "CFO, Indústrias Tech",
    content:
      "Desde que começamos a trabalhar com a DLG, nossa gestão fiscal se tornou mais eficiente e segura. O retorno sobre o investimento foi excepcional.",
    image: "",
  },
  {
    name: "Carla Rodrigues",
    sexo: "Feminino",
    role: "Contadora Sênior, Grupo W&W",
    content:
      "A expertise da DLG em planejamento tributário nos ajudou a identificar oportunidades de economia que não havíamos considerado antes.",
    image: "",
  },
  {
    name: "Fernando Almeida",
    sexo: "Masculino",
    role: "Diretor Jurídico, Corporação Alpha",
    content:
      "O conhecimento profundo da equipe DLG em legislação tributária nos proporcionou segurança e tranquilidade em nossas operações.",
    image: "",
  },
  {
    name: "Luciana Martins",
    sexo: "Feminino",
    role: "Empresária, Rede de Varejo MM",
    content:
      "O atendimento da DLG é excepcional. Sempre disponíveis e proativos, nos mantêm atualizados sobre mudanças que impactam nosso negócio.",
    image: "",
  },
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const users = await Promise.all(
          testimonials.map(async (testimonial) => {
            try {
              const gender =
                testimonial.sexo === "Feminino" ? "female" : "male";
              const response = await fetch(
                `https://randomuser.me/api/?gender=${gender}`,
                { next: { revalidate: 3600 } }
              );
              if (!response.ok) throw new Error("Failed to fetch user");
              const data = await response.json();
              return data.results[0];
            } catch (error) {
              console.error("Error fetching individual user:", error);
              return null;
            }
          })
        );
        setRandomUsers(users.filter(Boolean));
      } catch (error) {
        console.error("Error fetching random users:", error);
        setRandomUsers([]);
      }
    };

    fetchRandomUsers();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative gradient-bg py-24">
      <div className="absolute inset-0 bg-[url('../assets/hero-bg.webp')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#c6a355]">
          O que nossos clientes dizem
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <button
              onClick={previousTestimonial}
              className="absolute cursor-pointer left-0 z-10 p-2 text-zinc-400 hover:text-[#c6a355] transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-center px-8 md:px-16">
              <div className="w-20 h-20 mx-auto mb-6 overflow-hidden rounded-full border-2 border-[#c6a355]">
                {randomUsers.length > 0 ? (
                  <Image
                    src={randomUsers[currentIndex]?.picture.large}
                    alt={`Foto de ${testimonials[currentIndex].name}`}
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                    <div className="animate-pulse w-12 h-12 rounded-full bg-zinc-700" />
                  </div>
                )}
              </div>
              <blockquote className="text-lg md:text-xl text-zinc-300 mb-6 italic">
                {testimonials[currentIndex].content}
              </blockquote>
              <div className="text-[#c6a355] font-semibold mb-1">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-zinc-400 text-sm">
                {testimonials[currentIndex].role}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute cursor-pointer right-0 z-10 p-2 text-zinc-400 hover:text-[#c6a355] transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#c6a355]" : "bg-zinc-700"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
