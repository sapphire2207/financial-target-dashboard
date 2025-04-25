"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";

const KeyInsights = () => {
  const { dashboardData } = useDashboard();
  const { salesGrowth, performer } = dashboardData.feedback;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full max-w-sm h-[263px]">
      <div className="flex justify-between items-start mb-4 pt-2">
        <h2 className="text-lg font-semibold text-gray-900">Key Insights & Feedback</h2>
      </div>

      <div className="flex items-center mb-3">
        <div className="flex-1">
          <div className="text-3xl font-bold text-gray-900">{salesGrowth}%</div>
          <div className="text-sm text-gray-600">Sales Growth</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-9 h-9">
            <AvatarImage src={performer} alt="Top Performer Badge" />
            <AvatarFallback>TP</AvatarFallback>
          </Avatar>
          <div className="ml-2 px-3 py-1 text-xs text-[#279dd4] font-medium rounded-full bg-[#d5f2ff80] border-[#bae9ff] border-[1.5px]">
            Top Performer
          </div>
        </div>
      </div>

      <Separator className="h-2 bg-[#eaecf0] mb-4" />

      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Feedback</h3>
        <div className="flex items-start">
          <span className="w-2 h-2 rounded-full bg-gray-300 mr-2 p-1 mt-1"></span>
          <p className="text-xs text-gray-600 p-0">
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(KeyInsights);
