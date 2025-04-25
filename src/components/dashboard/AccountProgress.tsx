import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useDashboard } from "@/context/DashboardContext";

export default function AccountProgress() {
  const { dashboardData } = useDashboard();
  const { progress = 85, completedSteps = [], remainingSteps = [] } = dashboardData?.accountProgress || {};

  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const center = size / 2;

  return (
    <Card className="w-full max-w-sm mx-auto border-none bg-white">
      <CardContent className="px-4">
        <h2 className="text-center text-lg font-semibold mb-4">Account Progress</h2>

        {/* Progress Circle */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg
              width={size}
              height={size}
              className="transform -rotate-90"
              role="img"
              aria-label={`Account progress: ${progress}%`}
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#279dd4"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-[stroke-dashoffset] duration-500 ease-in-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-900">{progress}%</span>
            </div>
          </div>
        </div>

        <Separator className="h-2 bg-[#eaecf0] my-4" />

        {/* Steps Completed */}
        <Card className="bg-[#f6f7fb] mb-4 border-none">
          <CardContent className="flex flex-col px-4">
            <h3 className="text-sm font-semibold mb-3">Steps Completed</h3>
            <ul className="space-y-2" aria-label="Completed Steps">
              {completedSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-3" />
                  <span className="flex-1 text-sm text-gray-700">{step}</span>
                  <Image
                    src="/tick.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    loading="lazy"
                    className="ml-2"
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Steps Remaining */}
        <Card className="bg-[#f6f7fb] border-none">
          <CardContent className="flex flex-col px-4">
            <h3 className="text-sm font-semibold mb-3">Steps Remaining</h3>
            <ul className="space-y-2" aria-label="Remaining Steps">
              {remainingSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-3" />
                  <span className="flex-1 text-sm text-gray-700">{step}</span>
                  <Image
                    src="/pending.svg"
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    loading="lazy"
                    className="ml-2"
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
