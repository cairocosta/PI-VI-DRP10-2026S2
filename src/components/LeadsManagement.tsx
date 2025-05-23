"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowUpDown, MoreHorizontal, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Lead } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";

type LeadWithActions = Lead & {
  actions: React.ReactNode;
};

interface LeadsManagementProps {
  leads: Lead[];
}

export function LeadsManagement({ leads }: LeadsManagementProps) {
  const [filteredLeads, setFilteredLeads] = useState<LeadWithActions[]>(
    leads.map((lead) => ({
      ...lead,
      actions: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(lead.email)}
            >
              Copiar email
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(lead.phone)}
            >
              Copiar telefone
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    }))
  );

  const newLeads = leads.filter((l) => l.status === "NOVO").length;
  const inProgressLeads = leads.filter(
    (l) => l.status === "ATENDIMENTO"
  ).length;
  const finishedLeads = leads.filter((l) => l.status === "FINALIZADO").length;
  const whatsappLeads = leads.filter(
    (l) => l.source && l.source.toUpperCase() === "WHATSAPP"
  ).length;
  const emailLeads = leads.filter(
    (l) => l.source && l.source.toUpperCase() === "EMAIL"
  ).length;

  const columns: ColumnDef<LeadWithActions>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "email",
      header: "E-mail",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        const statusMap = {
          NOVO: "Novo",
          ATENDIMENTO: "Em atendimento",
          FINALIZADO: "Finalizado",
        };
        return statusMap[status as keyof typeof statusMap] || status;
      },
    },
    {
      accessorKey: "createdAt",
      header: "Data",
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
        return format(date, "dd/MM/yyyy", { locale: ptBR });
      },
    },
    {
      id: "actions",
      cell: ({ row }) => row.original.actions,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-md rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Status de Leads
            </CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 p-2">
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">Novos</p>
                <p className="text-2xl font-bold text-blue-600">{newLeads}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">
                  Em atendimento
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {inProgressLeads}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">Finalizados</p>
                <p className="text-2xl font-bold text-green-600">
                  {finishedLeads}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Fonte de Leads
            </CardTitle>
            <BarChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 p-2">
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">WhatsApp</p>
                <p className="text-2xl font-bold text-green-600">
                  {whatsappLeads}
                </p>
                <p className="text-xs text-gray-400">
                  {Math.round((whatsappLeads / leads.length) * 100)}% do total
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 font-medium">E-mail</p>
                <p className="text-2xl font-bold text-blue-600">{emailLeads}</p>
                <p className="text-xs text-gray-400">
                  {Math.round((emailLeads / leads.length) * 100)}% do total
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <DataTable columns={columns} data={filteredLeads} />
    </div>
  );
}
