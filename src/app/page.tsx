"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileSidebarTrigger } from "@/components/MobileSidebarTrigger";

const AccountProgress = dynamic(() => import("@/components/dashboard/AccountProgress"), { ssr: false });
const FranchiseesOnboard = dynamic(() => import("@/components/dashboard/FranchiseesOnboard"), { ssr: false });
const KeyInsights = dynamic(() => import("@/components/dashboard/KeyInsights"), { ssr: false });
const FinancialWellbeing = dynamic(() => import("@/components/dashboard/FinancialWellbeing"), { ssr: false });
const ProspectLeads = dynamic(() => import("@/components/dashboard/ProspectLeads"), { ssr: false });
const PendingQuestions = dynamic(() => import("@/components/dashboard/PendingQuestions"), { ssr: false });
const AIChat = dynamic(() => import("@/components/dashboard/AIChat"), { ssr: false });

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-white text-gray-900">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <AppSidebar />
        </aside>

        {/* Mobile sidebar trigger */}
        <div className="lg:hidden fixed top-3 left-3 z-50">
          <MobileSidebarTrigger />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <Header />
          <main
            className="flex-1 p-4 space-y-4 overflow-y-auto border-b border-[#eaecf0]"
            aria-label="Dashboard Main Content"
          >
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <AccountProgress />
              </div>
              <div className="space-y-4">
                <FranchiseesOnboard />
                <FinancialWellbeing />
              </div>
              <div className="space-y-4">
                <KeyInsights />
                <ProspectLeads />
              </div>
            </section>
          </main>

          {/* Bottom Section: Pending Questions & AI Chat */}
          <section
            className="flex flex-col lg:flex-row gap-0 bg-gray-50 h-[291px]"
            aria-label="Support Chat and Pending Questions"
          >
            <div className="lg:w-1/3">
              <PendingQuestions />
            </div>
            <div className="lg:w-2/3">
              <AIChat />
            </div>
          </section>
        </div>
      </div>
    </SidebarProvider>
  );
}
