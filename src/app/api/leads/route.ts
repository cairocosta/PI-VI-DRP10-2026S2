import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  taxationType: z.string().min(1, "Tipo de tributação é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
  source: z.string().default("whatsapp"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    const lead = await prisma.lead.create({
      data,
    });

    return NextResponse.json({
      lead: {
        id: lead.id,
        name: lead.name,
        email: lead.email,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { error: "Erro ao salvar os dados. Por favor, tente novamente." },
      { status: 500 }
    );
  }
}
