"use client";

import { TrendingUp } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { memo } from "react";

function FinancialWellbeing() {
  const { dashboardData } = useDashboard();
  const financialData = dashboardData?.financialWellbeing;

  if (!financialData) return null;

  const { franchisees, growth, target, current } = financialData;

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm h-[263px]">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-base font-semibold">Financial Wellbeing</h2>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-3xl font-bold">{franchisees}</div>
          <div className="text-sm text-gray-500">Total Franchisees</div>
        </div>
        <div>
          <div className="flex items-center text-green-600 text-xs border-green-600 border-[1.5px] px-2 py-0.5 rounded-full font-semibold">
            <TrendingUp size={12} className="mr-1" />
            <span>{growth}%</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e9eff6] pt-4 flex justify-between">
        <div className="bg-[#f6f7fb] p-3 rounded-lg text-center flex-1 mr-2">
          <div className="text-sm text-gray-500 mb-1">Target</div>
          <div className="text-lg font-semibold">${target?.toLocaleString() ?? 0}</div>
        </div>
        <div className="bg-[#f6f7fb] p-3 rounded-lg text-center flex-1 ml-2">
          <div className="text-sm text-gray-500 mb-1">Current</div>
          <div className="text-lg font-semibold">${current?.toLocaleString() ?? 0}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(FinancialWellbeing);
