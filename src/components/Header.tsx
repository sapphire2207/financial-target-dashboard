"use client";

import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";

export default function Header() {
  const { dashboardData } = useDashboard();
  const profile = dashboardData.profile.avatar;

  return (
    <header className="max-w-full bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
      <div className="flex items-center ml-auto space-x-3">
        {/* Settings Button with an Accessible Label */}
        <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Settings">
          <Settings size={14} className="text-gray-500" />
        </button>

        {/* User Avatar with fallback */}
        <Avatar className="h-8 w-8">
          <AvatarImage src={profile || "/default-avatar.png"} alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
