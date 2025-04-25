"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DashboardData {
  profile: {
    avatar: string;
  }
  accountProgress: {
    progress: number;
    completedSteps: string[];
    remainingSteps: string[];
  };  
  franchisees: {
    total: number;
    growth: number;
    stages: { name: string; count: number; color: string }[];
    franchiseesOnboardAvatars : { name: string; avatar: string; initials: string }[];
  };
  feedback: {
    salesGrowth: number;
    performer: string;
  },
  financialWellbeing: {
    franchisees: number;
    growth: number;
    target: number;
    current: number;
  };
  prospects: { id: number, name: string; stage: string; avatar: string; initials: string }[];
  pendingQuestions: {
    id: number;
    user: string;
    handle: string;
    avatar: string;
    initials: string;
    question: string;
    time: string;
  }[];
  chat: {
    logo: string;
  }
}

interface DashboardContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  dashboardData: DashboardData;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

interface DashboardProviderProps {
  children: ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  
  const dashboardData: DashboardData = {
    profile: {
      avatar: "/profile.png",
    },
    accountProgress: {
      progress: 85,
      completedSteps: ["Profile Setup", "Initial Training", "Legal Documents"],
      remainingSteps: ["Financial Integration", "Final Review"],
    },
    franchisees: {
      total: 14,
      growth: 7.4,
      stages: [
        { name: "Stage 1 (Initial Inquiry)", count: 2, color: "bg-[#1f7eaa]" },
        { name: "Stage 2 (Document Submission)", count: 7, color: "bg-[#2fbdff]" },
        { name: "Stage 3 (Training)", count: 5, color: "bg-[#97deff]" }
      ],
      franchiseesOnboardAvatars: [
        { name: "Olivia Rhye", avatar: "/olivia-rhye.png", initials: "OR" },
        { name: "Phoenix Baker", avatar: "/phoenix-baker.png", initials: "PB" },
        { name: "Lana Steiner", avatar: "/lana-steiner.png", initials: "LS" },
        { name: "Demi Wilkinson", avatar: "/demi-wilkinson.png", initials: "DW" },
        { name: "Candice Wu", avatar: "/candice-wu.png", initials: "CW" },
      ],
    },
    feedback: {
      salesGrowth: 10,
      performer: "/performer.png"
    },
    financialWellbeing: {
      franchisees: 20,
      growth: 2.1,
      target: 500000,
      current: 450000
    },
    prospects: [
      { id: 1, name: "Wade Warren", stage: "Initial Inquiry", avatar: "/wade-warren.png", initials: "WW" },
      { id: 2, name: "Ava Wright", stage: "Initial Inquiry", avatar: "/ava-wright.png", initials: "AW" },
      { id: 3, name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/cody-fisher.png", initials: "CF" }
    ],
    pendingQuestions: [
      { 
        id: 1,
        user: "Phoenix Baker", 
        handle: "@phoenix", 
        avatar: "/phoenix-baker.png", 
        initials: "PB",
        question: "What are the requirements for opening a new store?",
        time: "5min ago"
      },
      { 
        id: 2,
        user: "Koray Okumus", 
        handle: "@koray", 
        avatar: "/koray-okumus.png", 
        initials: "KO",
        question: "How do I manage inventory effectively?",
        time: "4hr ago"
      },
    ],
    chat: {
      logo: "/chat-logo.png"
    }
  };

  return (
    <DashboardContext.Provider value={{
      sidebarOpen,
      setSidebarOpen,
      activeSection,
      setActiveSection,
      dashboardData
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
