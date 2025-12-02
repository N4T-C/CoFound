
import React from 'react';
import { Card, Button, Chip, Avatar } from '../components/UI';
import { Plus, Rocket, ExternalLink, Settings, Users, Activity, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in pb-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
         <div>
           <h2 className="text-3xl font-extrabold text-cofound-text dark:text-white tracking-tight">My Projects</h2>
           <p className="text-cofound-textLight dark:text-cofound-textDark/70 mt-1">Manage your ventures, team permissions, and public pages.</p>
         </div>
         <Button variant="primary" size="md" className="shadow-lg shadow-blue-900/20">
            <Plus size={18} /> New Project
         </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
         {/* ACTIVE PROJECT CARD */}
         <Card className="flex flex-col h-full border-t-4 border-t-cofound-blue dark:border-t-cofound-blue relative group overflow-visible">
            <div className="absolute top-4 right-4">
               <button className="text-cofound-textLight dark:text-cofound-textDark/40 hover:text-cofound-blue dark:hover:text-white transition-colors">
                  <Settings size={18} />
               </button>
            </div>

            <div className="mb-6">
               <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cofound-blue to-cofound-darkBlue flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-900/20 mb-4">
                  C
               </div>
               <h3 className="text-xl font-bold text-cofound-text dark:text-white">CoFound</h3>
               <a href="#" className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue flex items-center gap-1 mt-1">
                  cofound.com <ExternalLink size={12} />
               </a>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
               <div className="p-3 bg-cofound-bg dark:bg-white/5 rounded-lg border border-transparent hover:border-cofound-grey dark:hover:border-white/10 transition-colors">
                  <div className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase mb-1">Status</div>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live
                  </div>
               </div>
               <div className="p-3 bg-cofound-bg dark:bg-white/5 rounded-lg border border-transparent hover:border-cofound-grey dark:hover:border-white/10 transition-colors">
                  <div className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase mb-1">Team</div>
                  <div className="flex -space-x-2">
                     <Avatar initials="SA" size="xs" />
                     <Avatar initials="JD" size="xs" color="bg-purple-600" />
                     <div className="w-6 h-6 rounded-full bg-cofound-grey dark:bg-white/10 flex items-center justify-center text-[9px] font-bold border border-white dark:border-cofound-darkCard">+2</div>
                  </div>
               </div>
            </div>

            <div className="mt-auto space-y-3">
               <div className="flex justify-between text-sm">
                  <span className="text-cofound-textLight dark:text-cofound-textDark/60 font-medium">Profile Strength</span>
                  <span className="font-bold text-cofound-text dark:text-white">85%</span>
               </div>
               <div className="h-1.5 w-full bg-cofound-bg dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-cofound-lime rounded-full"></div>
               </div>
               <Button variant="outline" size="sm" fullWidth className="mt-4">Manage Dashboard</Button>
            </div>
         </Card>

         {/* ACQUIRED PROJECT CARD */}
         <Card className="flex flex-col h-full border-t-4 border-t-emerald-500 relative group opacity-90 hover:opacity-100 transition-opacity">
            <div className="absolute top-4 right-4">
               <Chip label="ACQUIRED" color="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" size="sm" />
            </div>

            <div className="mb-6">
               <div className="w-16 h-16 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md mb-4 grayscale group-hover:grayscale-0 transition-all">
                  P
               </div>
               <h3 className="text-xl font-bold text-cofound-text dark:text-white">PayFlow</h3>
               <span className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 mt-1 block">
                  Fintech API Infrastructure
               </span>
            </div>

            <div className="space-y-4 mb-6">
               <div className="flex items-center gap-3 text-sm text-cofound-textLight dark:text-cofound-textDark/70">
                  <Activity size={16} /> <span>Scaled to ₹16Cr ARR</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-cofound-textLight dark:text-cofound-textDark/70">
                  <Users size={16} /> <span>12 Team Members</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-cofound-textLight dark:text-cofound-textDark/70">
                  <BarChart3 size={16} /> <span>Exit via Acquisition (2023)</span>
               </div>
            </div>

            <div className="mt-auto">
               <Button variant="ghost" size="sm" fullWidth className="text-cofound-textLight dark:text-cofound-textDark/60">View Archive</Button>
            </div>
         </Card>

         {/* CREATE NEW PLACEHOLDER */}
         <button className="h-full min-h-[320px] rounded-xl border-2 border-dashed border-cofound-grey dark:border-white/10 hover:border-cofound-blue hover:bg-blue-50/20 dark:hover:bg-white/5 transition-all flex flex-col items-center justify-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-cofound-bg dark:bg-white/5 group-hover:bg-white dark:group-hover:bg-cofound-darkCard group-hover:scale-110 transition-all flex items-center justify-center text-cofound-textLight dark:text-cofound-textDark/40 group-hover:text-cofound-blue dark:group-hover:text-white shadow-sm">
               <Plus size={32} />
            </div>
            <div className="text-center">
               <h3 className="font-bold text-lg text-cofound-text dark:text-white group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors">Start New Project</h3>
               <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/50 px-8 mt-1">
                  Launch a hiring page, showcase your MVP, or find co-founders.
               </p>
            </div>
         </button>

      </div>
    </div>
  );
};

export default Projects;
