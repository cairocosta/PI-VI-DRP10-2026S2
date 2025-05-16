"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { generateEmailTemplate } from "../templates/emailTemplate";
import { generateConfirmationEmailTemplate } from "../templates/confirmationEmailTemplate";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulário enviado!");
    setIsSubmitting(true);

    // Captura os valores dos campos do formulário
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      // Gera os templates dos emails (principal e confirmação)
      const emailData = generateEmailTemplate({ name, email, phone, message });
      const confirmationEmailData = generateConfirmationEmailTemplate({
        name,
        email,
        phone,
        message,
      });

      // Combina os dados dos dois emails
      const combinedEmailData = {
        ...emailData,
        confirmationText: confirmationEmailData.text,
        confirmationHtml: confirmationEmailData.html,
      };

      console.log("Dados do email a serem enviados:", combinedEmailData);

      // Envia os dados para a rota API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedEmailData),
      });

      // Verifica se o envio foi bem-sucedido
      const responseData = await response.json();

      if (!response.ok) {
        console.error("Resposta da API com erro:", responseData);
        throw new Error(responseData.error || "Erro ao enviar o email.");
      }

      console.log("Resposta de sucesso da API:", responseData);

      // Exibe uma mensagem de sucesso
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      console.error("Erro ao enviar o formulário:", error);
      console.error("Mensagem de erro:", errorMessage);
      alert(
        `Ocorreu um erro ao enviar sua mensagem: ${errorMessage}. Por favor, tente novamente.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-[#c6a355]">
          Entre em Contato
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="name"
              name="name" // Adicionado o atributo `name`
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
            </label>
            <input
              id="email"
              name="email" // Adicionado o atributo `name`
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefone
            </label>
            <input
              id="phone"
              name="phone" // Adicionado o atributo `name`
              type="tel"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message" // Adicionado o atributo `name`
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent min-h-[100px]"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
