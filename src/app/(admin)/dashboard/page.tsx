"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  LogOut,
  Menu,
  X,
  BarChart,
  Settings,
  Bell,
} from "lucide-react";
import { LeadsManagement } from "@/components/LeadsManagement";
import { Lead } from "@prisma/client";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 text-gray-700 transition-all duration-300 fixed h-full z-10`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } font-bold text-xl text-blue-600`}
          >
            Admin
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-600 hover:bg-gray-100"
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            <li>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  !isSidebarOpen && "justify-center"
                }`}
                onClick={() => router.push("/dashboard")}
              >
                <LayoutDashboard className="h-5 w-5" />
                {isSidebarOpen && <span>Dashboard</span>}
              </Button>
            </li>
            {/* <li>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  !isSidebarOpen && "justify-center"
                }`}
                onClick={() => router.push("/dashboard/leads")}
              >
                <Users className="h-5 w-5" />
                {isSidebarOpen && <span>Leads</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  !isSidebarOpen && "justify-center"
                }`}
              >
                <BarChart className="h-5 w-5" />
                {isSidebarOpen && <span>Relatórios</span>}
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                  !isSidebarOpen && "justify-center"
                }`}
              >
                <Settings className="h-5 w-5" />
                {isSidebarOpen && <span>Configurações</span>}
              </Button>
            </li> */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300 bg-gray-50`}
      >
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              Administrador
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-blue-600 rounded-full"></span>
            </Button> */}
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-gray-200"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </header>

        <div className="p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="text-gray-600">Carregando informações...</p>
              </div>
            </div>
          ) : (
            <LeadsManagement leads={leads} />
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
