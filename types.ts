
export interface Engagement {
  upvotes: number;
  comments: number;
}

export interface Signal {
  id: number;
  author: string;
  handle: string;
  avatar: string;
  type: string;
  metric: string;
  value: string;
  content: string;
  tags: string[];
  engagement: Engagement;
  time: string;
  color: string;
}

export interface IntelItem {
  id: number;
  topic: string;
  title: string;
  source: string;
  time: string;
}

export interface SquadMember {
  id: number;
  name: string;
  role: string;
  match: string;
  skill: string;
  company: string;
}

export interface ChatThread {
  id: number;
  user: string;
  role: string;
  avatar: string;
  lastMsg: string;
  time: string;
  unread: number;
  status: 'online' | 'offline' | 'away';
  tags?: string[];
}

export interface Message {
  id: number;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

export interface Job {
  id: number;
  role: string;
  company: string;
  equity: string;
  salary: string;
  location: string;
  posted: string;
  tags: string[];
}

export type ModuleType = 'PULSE' | 'INTEL' | 'SQUAD' | 'CHAT' | 'JOBS' | 'SETTINGS' | 'PROFILE' | 'SAVED' | 'PROJECTS' | 'FLUX';
