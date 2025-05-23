import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/pt_BR";

const prisma = new PrismaClient();

const taxationTypes = ["Simples Nacional", "Lucro Presumido", "Lucro Real"];

const sources = ["whatsapp", "email"];
const status = [
  "Novo",
  "Em Análise",
  "Convertido",
  "Não Convertido",
  "Em Negociação",
];

async function main() {
  const leads = [];

  for (let i = 0; i < 100; i++) {
    const lead = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number({ style: "national" }),
      taxationType: faker.helpers.arrayElement(taxationTypes),
      message: faker.lorem.paragraph(),
      source: faker.helpers.arrayElement(sources),
      status: faker.helpers.arrayElement(status),
      createdAt: faker.date.past({ years: 1 }),
      updatedAt: faker.date.recent(),
    };
    leads.push(lead);
  }

  // Ordenar leads por data de criação
  leads.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());

  console.log("🌱 Iniciando seed...");

  for (const lead of leads) {
    await prisma.lead.create({
      data: lead,
    });
  }

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro durante o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
