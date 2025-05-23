import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        taxationType: true,
        message: true,
        source: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erro ao buscar leads:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Erro ao buscar leads";
    return NextResponse.json(
      {
        error: errorMessage,
        details: "Verifique a conexão com o banco de dados",
      },
      { status: 500 }
    );
  }
}
