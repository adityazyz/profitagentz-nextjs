import { 
  MessageCircle, 
  Target, 
  Scale, 
  UserPlus, 
  BarChart, 
  Search, 
  TrendingUp, 
  Cpu 
} from 'lucide-react';

// for ai agents page 

export const AGENTS = [
  {
    id: 1,
    title: "Support Agent",
    description: "Handles customer queries, reduces ticket volume by 80%, integrates with existing CRM.",
    icon: "MessageCircle",
    isBeta: false,
  },
  {
    id: 2,
    title: "Sales Agent",
    description: "Automates lead qualification, follow-ups, and pipeline management with real-time insights.",
    icon: "Target",
    isBeta: false,
  },
  {
    id: 3,
    title: "Legal Agent",
    description: "Reviews contracts, identifies risks, ensures compliance with latest regulations.",
    icon: "Scale",
    isBeta: true,
  },
  {
    id: 4,
    title: "Recruitment Agent",
    description: "Screens resumes, schedules interviews, reduces hiring cycle by 60%.",
    icon: "UserPlus",
    isBeta: false,
  },
  {
    id: 5,
    title: "Data Agent",
    description: "Analyzes business data, generates reports, identifies growth opportunities.",
    icon: "BarChart",
    isBeta: false,
  },
  {
    id: 6,
    title: "Research Agent",
    description: "Scrapes market data, tracks competitors, delivers actionable insights.",
    icon: "Search",
    isBeta: true,
  },
  {
    id: 7,
    title: "Financial Agent",
    description: "Monitors expenses, forecasts budgets, detects anomalies in real-time.",
    icon: "TrendingUp",
    isBeta: false,
  },
  {
    id: 8,
    title: "Custom Agent",
    description: "Tailored AI solution built from scratch for your unique business needs.",
    icon: "Cpu",
    isBeta: false,
  },
] as const;

export const iconMap = {
  MessageCircle,
  Target,
  Scale,
  UserPlus,
  BarChart,
  Search,
  TrendingUp,
  Cpu,
};

// for contact page
// Add to the existing constants file
export const FAQS = [
  {
    question: "How fast can you deploy an AI agent for my business?",
    answer: "Pre-built agents deploy within 5–10 business days. Custom builds typically take 4–6 weeks, depending on complexity. We provide a detailed timeline during your free audit."
  },
  {
    question: "What kind of ROI can I expect from your AI automation?",
    answer: "Clients typically see 30–70% cost reduction in automated processes and 2–5x efficiency gains. Specific ROI projections are provided in your free AI business audit."
  },
  {
    question: "Is my data secure with your AI systems?",
    answer: "Yes. We implement SOC 2 compliant infrastructure, data encryption at rest and in transit, and never use client data for public model training. Your data remains isolated and owned by you."
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer: "Absolutely. All deployments include 6 months of premium support, regular performance reviews, and optimization updates. Extended support plans are available."
  },
  {
    question: "Can your AI agents integrate with our existing software?",
    answer: "Yes. Our agents integrate with most CRMs, ERPs, databases, and APIs (Salesforce, HubSpot, Zoho, custom solutions). We handle the complete integration process."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across sectors including FinTech, SaaS, Healthcare, E-commerce, Legal, Recruitment, and Manufacturing. Our solutions are adaptable to any industry with repetitive processes."
  }
] as const;

// EmailJS configuration 
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateIdAdmin: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  // templateIdUser: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER || '',
};