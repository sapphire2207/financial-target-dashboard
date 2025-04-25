import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";
import { memo } from "react";

const PendingQuestions = () => {
  const { dashboardData } = useDashboard();
  const questions = dashboardData.pendingQuestions;

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-[52px] px-4 border-b border-[#eaecf0]">
        <h2 className="text-base font-semibold">Pending Questions</h2>
        <div className="bg-[#2fbdff] text-white text-xs font-medium rounded-md px-1.5 py-0.5">
          {`0${questions.length}`}
        </div>
      </div>

      <div className="flex flex-col">
        {questions.map((item, index) => (
          <div key={index} className="h-[119.5px] border-b border-[#eaecf0] last:border-b-0">
            <div className="flex items-center p-4">
              <div className="w-2 h-2 rounded-full bg-[#2fbdff] mr-2"></div>
              <div className="relative mr-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={item.avatar} alt={item.user} />
                  <AvatarFallback>{item.initials}</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium mr-1">{item.user}</span>
                <span className="text-xs text-gray-500">{item.handle}</span>
              </div>
              <span className="ml-auto text-xs text-gray-400 self-start">{item.time}</span>
            </div>

            <div className="px-6 mt-1">
              <p className="text-sm text-gray-700 leading-snug">{item.question}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(PendingQuestions);
