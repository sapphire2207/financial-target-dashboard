import { useState, FormEvent } from "react";
import { ChevronUp } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const { dashboardData } = useDashboard();
  const chatlogo = dashboardData?.chat?.logo || "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="relative h-full p-4 bg-[#f9fafb] shadow">
      {/* Collapse Icon */}
      <div className="absolute top-4 right-7 p-1 bg-[#e9eff6] rounded-full cursor-pointer hover:bg-[#d4e1f0]">
        <ChevronUp className="w-4 h-4 text-[#279dd4]" />
      </div>

      {/* Chat Content */}
      <div className="flex flex-col items-center justify-center py-6 pt-16 gap-4">
        <Avatar className="w-[64px] h-[35px]">  
          <AvatarImage src={chatlogo} alt="AI Chat Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>

        <h2 className="text-xl font-medium text-center">
          Welcome to the AI Chat Assistant
        </h2>

        {/* Chat Input */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Ask your question here..."
            className="flex-grow px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 flex items-center justify-center hover:bg-gray-100"
            aria-label="Send message"
          >
            <img
              src="/send.svg"
              alt=""
              className="w-4 h-4"
              loading="lazy"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
