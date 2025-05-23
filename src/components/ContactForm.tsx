"use client";

import * as React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Mail } from "lucide-react";
import { generateEmailTemplate } from "../templates/emailTemplate";
import { generateConfirmationEmailTemplate } from "../templates/confirmationEmailTemplate";

type TaxationType = "simples" | "presumido" | "real";

type FormData = {
  name: string;
  email: string;
  phone: string;
  taxationType: TaxationType;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = React.useState<Partial<FormData>>({
    taxationType: undefined,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTaxationTypeChange = (value: TaxationType) => {
    setFormData((prev) => ({ ...prev, taxationType: value }));
  };

  const isFormValid = () => {
    return (
      formData.name?.trim() &&
      formData.email?.trim() &&
      formData.phone?.trim() &&
      formData.taxationType &&
      formData.message?.trim()
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    try {
      // Salva o lead no banco de dados
      const leadResponse = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          taxationType: formData.taxationType,
          source: "email",
        }),
      });

      if (!leadResponse.ok) {
        const errorData = await leadResponse.json();
        throw new Error(errorData.error || "Erro ao salvar o lead.");
      }

      // Gera os templates dos emails (principal e confirmação)
      const emailData = generateEmailTemplate({
        name: formData.name!,
        email: formData.email!,
        phone: formData.phone!,
        message: formData.message!,
        taxationType: formData.taxationType!,
      });
      const confirmationEmailData = generateConfirmationEmailTemplate({
        name: formData.name!,
        email: formData.email!,
        phone: formData.phone!,
        message: formData.message!,
        taxationType: formData.taxationType!,
      });

      // Combina os dados dos dois emails
      const combinedEmailData = {
        ...emailData,
        confirmationText: confirmationEmailData.text,
        confirmationHtml: confirmationEmailData.html,
      };

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
        throw new Error(responseData.error || "Erro ao enviar o email.");
      }

      // Limpa o formulário e fecha o modal

      setFormData({ taxationType: undefined });
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      alert(
        "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTaxationTypeLabel = (type: TaxationType): string => {
    const labels = {
      simples: "Simples Nacional",
      presumido: "Lucro Presumido",
      real: "Lucro Real",
    };
    return labels[type];
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name || ""}
            onChange={handleInputChange}
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
            name="email"
            type="email"
            required
            value={formData.email || ""}
            onChange={handleInputChange}
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
            name="phone"
            type="tel"
            required
            value={formData.phone || ""}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="taxationType" className="text-sm font-medium">
            Tipo de Atendimento
          </label>
          <Select
            value={formData.taxationType}
            onValueChange={handleTaxationTypeChange}
          >
            <SelectTrigger className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent">
              <SelectValue placeholder="Selecione o tipo de atendimento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="simples"
                className="hover:bg-slate-100 cursor-pointer"
              >
                Simples Nacional
              </SelectItem>
              <SelectItem
                value="presumido"
                className="hover:bg-slate-100 cursor-pointer"
              >
                Lucro Presumido
              </SelectItem>
              <SelectItem
                value="real"
                className="hover:bg-slate-100 cursor-pointer"
              >
                Lucro Real
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message || ""}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c6a355] focus:border-transparent min-h-[100px]"
            placeholder="Como podemos ajudar?"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#c6a355] hover:bg-[#b89142] text-slate-900 font-semibold"
          disabled={!isFormValid() || isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  );
}
