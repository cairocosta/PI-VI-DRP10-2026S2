"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
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

  const columns: ColumnDef<LeadWithActions>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
    {
      accessorKey: "taxationType",
      header: "Tipo de Tributação",
    },
    {
      accessorKey: "source",
      header: "Origem",
      cell: ({ row }) => {
        const source = row.getValue("source") as string;
        return source === "whatsapp" ? "WhatsApp" : "Email";
      },
    },
    {
      accessorKey: "createdAt",
      header: "Data",
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as string | Date;
        return format(new Date(date), "dd/MM/yyyy HH:mm", {
          locale: ptBR,
        });
      },
    },
    {
      id: "actions",
      cell: ({ row }) => row.original.actions,
    },
  ];

  const totalLeads = leads.length;
  const whatsappLeads = leads.filter(
    (lead) => lead.source === "whatsapp"
  ).length;
  const emailLeads = leads.filter((lead) => lead.source === "email").length;
  const conversionRate =
    totalLeads > 0 ? (whatsappLeads / totalLeads) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Total de Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalLeads}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Leads WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{whatsappLeads}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Leads Email</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{emailLeads}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Taxa de Conversão WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{conversionRate.toFixed(1)}%</p>
          </CardContent>
        </Card>
      </div>

      <DataTable columns={columns} data={filteredLeads} searchKey="name" />
    </div>
  );
}
