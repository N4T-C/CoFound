
import React, { useState } from 'react';
import { Card, Avatar, Button, Chip } from '../components/UI';
import { Bookmark, FileText, Briefcase, Hash, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { SIGNALS, JOBS } from '../data';

const Saved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'POSTS' | 'JOBS'>('ALL');

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-cofound-nav dark:border-white/10 pb-4">
         <div>
           <h2 className="text-2xl font-bold text-cofound-text dark:text-white flex items-center gap-2">
             <Bookmark className="text-cofound-blue dark:text-cofound-sky fill-current" size={24} /> 
             Saved Items
           </h2>
           <p className="text-cofound-textLight dark:text-cofound-textDark/70 text-sm mt-1">
             Your private collection of posts, opportunities, and resources.
           </p>
         </div>
         
         <div className="flex gap-2 p-1 bg-white dark:bg-cofound-darkCard border border-cofound-grey dark:border-white/10 rounded-lg">
            {['ALL', 'POSTS', 'JOBS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-cofound-blue text-white shadow-sm' 
                    : 'text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-text dark:hover:text-white hover:bg-cofound-bg dark:hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
         </div>
      </div>

      {/* Content Grid */}
      <div className="space-y-4">
        
        {/* Saved Posts (Using existing SIGNALS data) */}
        {(activeTab === 'ALL' || activeTab === 'POSTS') && (
           <>
             {activeTab === 'ALL' && <h3 className="text-sm font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase tracking-wider mt-2 mb-2">From Pulse</h3>}
             {SIGNALS.slice(0, 2).map(signal => (
                <Card key={`saved-signal-${signal.id}`} className="flex gap-4 p-5 hover:border-cofound-blue/30 cursor-pointer group transition-all">
                   <div className="p-3 h-fit bg-blue-50 dark:bg-blue-500/10 rounded-lg text-cofound-blue dark:text-cofound-sky hidden sm:block">
                      <FileText size={20} />
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-2 mb-1">
                            <Avatar initials={signal.avatar} size="xs" />
                            <span className="text-sm font-bold text-cofound-text dark:text-white">{signal.author}</span>
                            <span className="text-xs text-cofound-textLight dark:text-cofound-textDark/50">• {signal.time}</span>
                         </div>
                         <button className="text-cofound-textLight dark:text-cofound-textDark/40 hover:text-cofound-blue"><MoreHorizontal size={16}/></button>
                      </div>
                      <p className="text-cofound-text dark:text-cofound-textDark text-sm line-clamp-2 mb-3 font-medium">
                         {signal.content}
                      </p>
                      <div className="flex items-center gap-2">
                         {signal.tags.map(tag => (
                            <span key={tag} className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 bg-cofound-bg dark:bg-white/5 px-2 py-0.5 rounded border border-transparent group-hover:border-cofound-grey dark:group-hover:border-white/10 transition-colors">#{tag}</span>
                         ))}
                      </div>
                   </div>
                </Card>
             ))}
           </>
        )}

        {/* Saved Jobs (Using existing JOBS data) */}
        {(activeTab === 'ALL' || activeTab === 'JOBS') && (
           <>
             {activeTab === 'ALL' && <h3 className="text-sm font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase tracking-wider mt-6 mb-2">Opportunities</h3>}
             {JOBS.slice(0, 2).map(job => (
                <Card key={`saved-job-${job.id}`} className="flex gap-4 p-5 hover:border-cofound-blue/30 cursor-pointer group transition-all">
                   <div className="p-3 h-fit bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400 hidden sm:block">
                      <Briefcase size={20} />
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between items-start">
                         <div>
                            <h4 className="font-bold text-cofound-text dark:text-white text-base group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors">{job.role}</h4>
                            <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60">{job.company} • {job.location}</p>
                         </div>
                         <Button variant="ghost" size="sm" className="text-cofound-blue dark:text-cofound-sky font-bold">Apply</Button>
                      </div>
                      <div className="mt-3 flex gap-3 text-xs font-medium text-cofound-text dark:text-white">
                         <span className="bg-cofound-bg dark:bg-white/5 px-2 py-1 rounded">{job.salary}</span>
                         <span className="bg-cofound-bg dark:bg-white/5 px-2 py-1 rounded">{job.equity}</span>
                      </div>
                   </div>
                </Card>
             ))}
           </>
        )}

        {/* Empty State if filtering yields nothing (Mock) */}
        {activeTab === 'JOBS' && JOBS.length === 0 && (
           <div className="text-center py-12 text-cofound-textLight dark:text-cofound-textDark/50">
              <Bookmark size={48} className="mx-auto mb-4 opacity-20" />
              <p>No jobs saved yet.</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default Saved;
