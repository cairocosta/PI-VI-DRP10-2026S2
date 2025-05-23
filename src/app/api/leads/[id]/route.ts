import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as z from "zod";

// Validação opcional, caso queira expandir depois
const statusSchema = z.enum(["NOVO", "ATENDIMENTO", "FINALIZADO"]);

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;
    const body = await request.json();

    const parse = statusSchema.safeParse(body.status);

    if (!parse.success) {
      return NextResponse.json(
        { error: "Status inválido. Use: NOVO, ATENDIMENTO ou FINALIZADO." },
        { status: 400 }
      );
    }

    await prisma.lead.update({
      where: { id },
      data: { status: parse.data },
    });

    return NextResponse.json({
      message: "Status atualizado com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
