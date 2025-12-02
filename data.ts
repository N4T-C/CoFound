
import { Signal, IntelItem, SquadMember, ChatThread, Message, Job } from './types';

export const SIGNALS: Signal[] = [
  {
    id: 1,
    author: "Sanjay Aaron",
    handle: "@sanjay_builds",
    avatar: "SA",
    type: "MILESTONE",
    metric: "ARR",
    value: "₹10L",
    content: "Crossed the ₹10L MRR mark today. The pivot to B2B finally paid off. Here are the 3 cold email templates that worked.",
    tags: ["SaaS", "Growth", "B2B"],
    engagement: { upvotes: 342, comments: 45 },
    time: "2h ago",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: 2,
    author: "Priya Sharma",
    handle: "@priya_tech",
    avatar: "PS",
    type: "ASK",
    metric: "HELP",
    value: "URGENT",
    content: "We're facing a high churn rate (8%) after the latest UI update. Looking for UX researchers who specialize in fintech onboarding flows.",
    tags: ["Product", "UX", "Hiring"],
    engagement: { upvotes: 89, comments: 120 },
    time: "5h ago",
    color: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    id: 3,
    author: "Rahul Verma",
    handle: "@rahul_design",
    avatar: "RV",
    type: "LAUNCH",
    metric: "BETA",
    value: "LIVE",
    content: "DesignSystem.io is live on Product Hunt! It's a Figma plugin to automate your handoff process. Would love your support.",
    tags: ["Launch", "Tooling"],
    engagement: { upvotes: 56, comments: 12 },
    time: "1d ago",
    color: "bg-violet-50 text-violet-700 border-violet-200"
  },
  {
    id: 4,
    author: "David Chen",
    handle: "@dchen_vc",
    avatar: "DC",
    type: "INTEL",
    metric: "MARKET",
    value: "TREND",
    content: "Noticing a massive shift in investor sentiment towards 'Vertical AI' agents over generic LLM wrappers. The moat is in the proprietary data.",
    tags: ["VC", "AI", "Trends"],
    engagement: { upvotes: 890, comments: 44 },
    time: "3h ago",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  }
];

export const INTEL_BRIEFING: IntelItem[] = [
  { id: 1, topic: "Regulations", title: "New DPDPA Act Compliance Guide", source: "LegalTech", time: "10m ago" },
  { id: 2, topic: "Market", title: "SaaS Multiples compress to 5.4x", source: "TechCrunch", time: "1h ago" },
  { id: 3, topic: "Funding", title: "YCombinator increases deal size", source: "YC Blog", time: "3h ago" },
];

export const SQUAD_SUGGESTIONS: SquadMember[] = [
  { id: 1, name: "Arun Kumar", role: "CTO", company: "FinBase", match: "98%", skill: "Rust / Systems" },
  { id: 2, name: "Sarah Lee", role: "Angel Investor", company: "Sequoia Scout", match: "85%", skill: "Fintech" },
  { id: 3, name: "Meera Reddy", role: "Growth Lead", company: "HyperGrowth", match: "92%", skill: "B2B Sales" },
  { id: 4, name: "John Doe", role: "Product Manager", company: "Stripe", match: "88%", skill: "API Design" },
  { id: 5, name: "Jane Smith", role: "Founder", company: "Stealth", match: "95%", skill: "GTM Strategy" },
];

export const CHAT_THREADS: ChatThread[] = [
  { 
    id: 1, 
    user: "Arun Kumar", 
    role: "CTO @ FinBase",
    avatar: "AK", 
    lastMsg: "I've reviewed the API docs.",
    time: "10:42 AM", 
    unread: 2,
    status: "online",
    tags: ["Tech", "Urgent"]
  },
  { 
    id: 2, 
    user: "Sarah Lee", 
    role: "Angel Investor",
    avatar: "SL", 
    lastMsg: "Let's schedule a call.",
    time: "Yesterday", 
    unread: 0,
    status: "offline",
    tags: ["Deal Flow"]
  },
  { 
    id: 3, 
    user: "Meera Reddy", 
    role: "Growth Lead",
    avatar: "MR", 
    lastMsg: "Press release draft attached.",
    time: "Mon", 
    unread: 0,
    status: "away",
    tags: ["Marketing"]
  },
];

export const MOCK_MESSAGES: Record<number, Message[]> = {
  1: [
    { id: 1, sender: "them", text: "Hey Sanjay, got a minute to check the new architecture?", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Sure Arun, what specifically?", time: "10:32 AM" },
    { id: 3, sender: "them", text: "I've reviewed the API docs. The webhook implementation looks solid, but we need to discuss rate limits.", time: "10:42 AM" },
  ],
  2: [
    { id: 1, sender: "me", text: "Hi Sarah, thanks for connecting.", time: "Yesterday" },
    { id: 2, sender: "them", text: "Let's schedule a call for Tuesday. I'm interested in the B2B pivot strategy.", time: "Yesterday" }
  ],
  3: [
    { id: 1, sender: "them", text: "Sent you the draft for the press release.", time: "Mon" }
  ]
};

export const JOBS: Job[] = [
  { id: 1, role: "Founding Engineer", company: "NexusAI", equity: "1.0% - 2.5%", salary: "₹35L - ₹50L", location: "Bangalore / Remote", posted: "2d ago", tags: ["Fullstack", "React", "Python"] },
  { id: 2, role: "Chief of Staff", company: "Vercel", equity: "0.1% - 0.5%", salary: "₹45L - ₹60L", location: "Mumbai", posted: "4h ago", tags: ["Ops", "Strategy"] },
  { id: 3, role: "Head of Growth", company: "Supabase", equity: "0.5% - 1.0%", salary: "₹50L - ₹75L", location: "Remote", posted: "1d ago", tags: ["Marketing", "PLG"] },
  { id: 4, role: "Sr. Product Designer", company: "Linear", equity: "0.2% - 0.8%", salary: "₹40L - ₹55L", location: "Remote", posted: "3d ago", tags: ["UI/UX", "Figma"] },
];
