import './globals.css';
import { DashboardProvider } from "@/context/DashboardContext";
import { ReactNode } from 'react';
import { dmSans, inter } from './fonts';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Franchise Dashboard",
  description: "A management dashboard for franchisees",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <DashboardProvider>
          {children}
        </DashboardProvider>
      </body>
    </html>
  );
}
