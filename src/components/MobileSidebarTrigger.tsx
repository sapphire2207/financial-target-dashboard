import { SidebarTrigger } from "@/components/ui/sidebar";
import { dmSans } from "@/app/fonts";
import { cn } from "@/lib/utils";

export function MobileSidebarTrigger() {
  return (
    <SidebarTrigger className={cn("sidebar-trigger-mobile", dmSans.className)} />
  );
}
