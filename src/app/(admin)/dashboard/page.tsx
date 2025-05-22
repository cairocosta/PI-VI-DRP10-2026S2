"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { LeadsManagement } from "@/components/LeadsManagement";
import { Lead } from "@prisma/client";

const DashboardPage = () => {
  const { data: session } = useSession();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/leads/get");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Erro ao carregar leads");
        }

        setLeads(data);
      } catch (error) {
        console.error("Erro ao buscar leads:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/auth/signin" });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-slate-600">Carregando...</p>
          </div>
        ) : (
          <LeadsManagement leads={leads} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
