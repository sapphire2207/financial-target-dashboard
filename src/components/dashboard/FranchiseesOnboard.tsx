"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { memo } from "react";

const FranchiseesOnboard = () => {
  const { dashboardData } = useDashboard();
  const { franchiseesOnboardAvatars, stages, total, growth } = dashboardData.franchisees;

  const avatarCount = franchiseesOnboardAvatars.length;
  const remainingAvatars = total - avatarCount;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full h-[263px] max-w-sm">
      <h2 className="text-lg font-semibold mb-1 pt-1">Total Franchisees Onboard</h2>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-3 pt-1">
        <div className="flex items-center mb-2 xl:mb-0">
          <span className="text-3xl font-bold text-gray-900 mr-3">{total}</span>
          <div className="flex items-center text-green-600 text-xs border-green-600 border-[1.5px] px-2 py-0.5 rounded-full font-semibold">
            <TrendingUp size={12} className="mr-1" />
            <span>{growth}%</span>
          </div>
        </div>

        <div className="flex -space-x-2">
          {franchiseesOnboardAvatars.map((user, i) => (
            <Avatar key={i} className="w-7 h-7 border-2 border-white">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
          ))}
          {remainingAvatars > 0 && (
            <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 text-xs flex items-center justify-center font-medium border-2 border-white">
              +{remainingAvatars}
            </div>
          )}
        </div>
      </div>

      <div className="flex h-[12px] mb-5">
        {stages.map((stage, index) => {
          const width = (stage.count / total) * 100;
          return (
            <div
              key={index}
              className={`${stage.color} ${index !== 0 ? "ml-2" : ""} rounded-sm`}
              style={{ width: `${width}%` }}
            />
          );
        })}
      </div>

      <div className="space-y-2 md:space-y-3">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${stage.color} mr-2`}></div>
              <span className="text-sm text-gray-600">{stage.name}</span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {stage.count.toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FranchiseesOnboard);
