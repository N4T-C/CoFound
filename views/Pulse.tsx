
import React, { useState, useEffect, useMemo } from 'react';
import { Radio, MoreHorizontal, TrendingUp, Image, Mic, Link as LinkIcon, ThumbsUp, MessageCircle, Share2, Bookmark, Flag, EyeOff, Copy } from 'lucide-react';
import { Card, Avatar, Button, Skeleton } from '../components/UI';
import { SIGNALS } from '../data';

const Pulse: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'TOP' | 'LATEST' | 'FOLLOWING'>('TOP');
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenuId(null);
    if (activeMenuId !== null) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeMenuId]);

  // Filter and Sort Data
  const displayedSignals = useMemo(() => {
    let data = [...SIGNALS];

    const parseTime = (timeStr: string) => {
      if (timeStr.includes('m ago')) return parseInt(timeStr) * 1; 
      if (timeStr.includes('h ago')) return parseInt(timeStr) * 60;
      if (timeStr.includes('d ago')) return parseInt(timeStr) * 1440;
      return 999999;
    };

    switch (filter) {
      case 'TOP':
        return data.sort((a, b) => b.engagement.upvotes - a.engagement.upvotes);
      case 'LATEST':
        return data.sort((a, b) => parseTime(a.time) - parseTime(b.time));
      case 'FOLLOWING':
        // Simulating a "Following" list by filtering specific authors or IDs
        return data.filter((_, i) => i % 2 === 0); // Mock: Shows every 2nd post
      default:
        return data;
    }
  }, [filter]);

  // Handle Tab Change with visual loading feedback
  const handleFilterChange = (newFilter: 'TOP' | 'LATEST' | 'FOLLOWING') => {
    if (filter === newFilter) return;
    setLoading(true);
    setFilter(newFilter);
    // Short fake loading to make the transition feel real
    setTimeout(() => setLoading(false), 300);
  };

  const getFilterStyle = (type: string) => {
    const isActive = filter === type;
    return isActive 
      ? "bg-white dark:bg-cofound-darkCard shadow-sm border border-cofound-grey/50 dark:border-white/10 text-cofound-text dark:text-white font-bold"
      : "text-cofound-textLight dark:text-cofound-textDark/60 hover:bg-white/50 dark:hover:bg-white/5 hover:text-cofound-blue dark:hover:text-white font-medium border border-transparent";
  };

  const toggleMenu = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-5 md:space-y-8 pb-12">
      
      {/* 1. MOBILE COMPOSER TRIGGER */}
      <div className="md:hidden px-4 pt-2">
         <div className="flex items-center gap-4 bg-white dark:bg-cofound-darkCard p-4 rounded-2xl border border-cofound-grey/60 dark:border-white/5 shadow-sm active:scale-[0.98] transition-transform">
            <Avatar initials="SA" size="sm" />
            <span className="text-sm text-cofound-textLight dark:text-cofound-textDark/50 font-medium">What's on your mind?</span>
         </div>
      </div>

      {/* 2. DESKTOP STICKY COMPOSER */}
      <div className="hidden md:block sticky top-[88px] z-30">
        <Card className="!p-0 border-cofound-blue/10 dark:border-white/10 shadow-xl shadow-blue-900/5 dark:shadow-none backdrop-blur-md bg-white/90 dark:bg-cofound-darkCard/90">
           <div className="p-6">
              <div className="flex gap-5">
                 <Avatar initials="SA" size="lg" className="mt-1" />
                 <div className="flex-1">
                    <textarea 
                       rows={2}
                       placeholder="Share a milestone, ask for advice, or shoutout a win..." 
                       className="w-full bg-transparent border-none outline-none text-cofound-text dark:text-white placeholder:text-cofound-textLight/50 dark:placeholder:text-white/30 resize-none text-lg md:text-xl font-medium py-2 leading-relaxed" 
                    />
                 </div>
              </div>
           </div>
           
           <div className="px-6 pb-4 flex justify-between items-center">
              <div className="flex gap-2 text-cofound-textLight dark:text-cofound-textDark/60">
                 <button className="p-2.5 hover:bg-blue-50 dark:hover:bg-white/10 hover:text-cofound-blue dark:hover:text-cofound-sky rounded-full transition-colors" title="Media"><Image size={20} /></button>
                 <button className="p-2.5 hover:bg-blue-50 dark:hover:bg-white/10 hover:text-cofound-blue dark:hover:text-cofound-sky rounded-full transition-colors" title="Poll"><Radio size={20} /></button>
                 <button className="p-2.5 hover:bg-blue-50 dark:hover:bg-white/10 hover:text-cofound-blue dark:hover:text-cofound-sky rounded-full transition-colors" title="Link"><LinkIcon size={20} /></button>
                 <button className="p-2.5 hover:bg-blue-50 dark:hover:bg-white/10 hover:text-cofound-blue dark:hover:text-cofound-sky rounded-full transition-colors hidden sm:block" title="Voice"><Mic size={20} /></button>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 font-medium hidden sm:inline-block">Draft saved</span>
                 <Button variant="accent" size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-blue-900/20">Post</Button>
              </div>
           </div>
        </Card>
      </div>

      {/* 3. FEED SORTING */}
      <div className="flex items-center justify-between px-4 md:px-2">
         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => handleFilterChange('TOP')}
              className={`text-sm px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${getFilterStyle('TOP')}`}
            >
              Top
            </button>
            <button 
              onClick={() => handleFilterChange('LATEST')}
              className={`text-sm px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${getFilterStyle('LATEST')}`}
            >
              Latest
            </button>
            <button 
              onClick={() => handleFilterChange('FOLLOWING')}
              className={`text-sm px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${getFilterStyle('FOLLOWING')}`}
            >
              Following
            </button>
         </div>
      </div>

      {/* 4. FEED ITEMS */}
      <div className="space-y-4 md:space-y-8">
        {loading ? (
          // Skeleton Loader
          [1, 2].map((i) => (
            <Card key={i} className="space-y-6 p-6 md:p-8 animate-pulse border-0 md:border rounded-none md:rounded-2xl">
              <div className="flex gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-3">
                  <Skeleton className="w-48 h-4 rounded-md" />
                  <Skeleton className="w-32 h-3 rounded-md" />
                </div>
              </div>
              <Skeleton className="w-full h-32 rounded-xl" />
            </Card>
          ))
        ) : displayedSignals.length > 0 ? (
          displayedSignals.map((signal, idx) => (
            <Card 
              key={signal.id} 
              hoverable
              className="group animate-slide-up p-5 md:p-8 border-x-0 md:border-x border-t md:border-t border-b-0 md:border-b md:rounded-2xl rounded-none shadow-none md:shadow-[0_2px_12px_rgba(0,0,0,0.03)]" 
              style={{animationDelay: `${idx * 100}ms`}}
            >
              
              {/* Header */}
              <div className="flex justify-between items-start mb-5 relative">
                 <div className="flex items-center gap-4">
                   <Avatar initials={signal.avatar} size="md" className="md:w-12 md:h-12 ring-2 ring-white dark:ring-cofound-darkCard shadow-sm" />
                   <div>
                     <div className="flex flex-wrap items-center gap-2">
                       <span className="font-bold text-cofound-text dark:text-white text-base hover:text-cofound-blue dark:hover:text-cofound-sky hover:underline cursor-pointer transition-colors">{signal.author}</span>
                       {idx === 0 && <span className="text-[9px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-0.5 rounded-md font-extrabold uppercase tracking-widest shadow-sm">PRO</span>}
                       <span className="text-xs text-cofound-textLight dark:text-cofound-textDark/40">• {signal.time}</span>
                     </div>
                     <div className="text-sm text-cofound-textLight dark:text-cofound-textDark/70 leading-tight mt-0.5 font-medium">{signal.type === 'MILESTONE' ? 'Founder @ TechStart' : 'Product Designer'}</div>
                   </div>
                 </div>
                 
                 <div className="relative">
                    <button 
                      onClick={(e) => toggleMenu(e, signal.id)}
                      className="p-2 -mr-2 md:mr-0 rounded-full text-cofound-textLight dark:text-cofound-textDark/40 hover:bg-cofound-bg dark:hover:bg-white/10 hover:text-cofound-text dark:hover:text-white transition-colors"
                    >
                        <MoreHorizontal size={20} />
                    </button>

                    {activeMenuId === signal.id && (
                       <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-cofound-darkCard border border-cofound-grey dark:border-white/10 rounded-xl shadow-xl shadow-blue-900/10 z-20 overflow-hidden animate-fade-in origin-top-right">
                          <button className="w-full text-left px-5 py-3 hover:bg-cofound-bg dark:hover:bg-white/5 text-sm font-medium text-cofound-text dark:text-white flex items-center gap-3 transition-colors">
                             <Copy size={16} className="text-cofound-textLight dark:text-cofound-textDark/60"/> Copy Link
                          </button>
                          <button className="w-full text-left px-5 py-3 hover:bg-cofound-bg dark:hover:bg-white/5 text-sm font-medium text-cofound-text dark:text-white flex items-center gap-3 transition-colors">
                             <EyeOff size={16} className="text-cofound-textLight dark:text-cofound-textDark/60"/> Not Interested
                          </button>
                          <div className="h-px bg-cofound-grey dark:bg-white/10 my-1 mx-2"></div>
                          <button className="w-full text-left px-5 py-3 hover:bg-red-50 dark:hover:bg-red-900/10 text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-3 transition-colors">
                             <Flag size={16} /> Report Post
                          </button>
                       </div>
                    )}
                 </div>
              </div>
              
              {/* Content Body */}
              <div className="mb-6 pl-0 md:pl-[64px]">
                <p className="text-cofound-text dark:text-cofound-textDark text-[17px] md:text-lg leading-relaxed whitespace-pre-line font-normal tracking-wide">
                  {signal.content}
                </p>
                
                {/* Visual Attachment */}
                {signal.type === 'MILESTONE' && (
                   <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#F0FDF4] to-white dark:from-[#064E3B]/20 dark:to-cofound-darkCard border border-emerald-100 dark:border-emerald-500/20 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-[0_2px_8px_rgba(16,185,129,0.05)]">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-50 dark:border-emerald-500/10 shrink-0"><TrendingUp size={28}/></div>
                         <div>
                            <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-widest mb-1.5">Milestone Unlocked</div>
                            <div className="text-2xl font-bold text-emerald-900 dark:text-white tracking-tight">{signal.value}</div>
                         </div>
                      </div>
                      <Button variant="outline" size="md" className="bg-white dark:bg-transparent border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 w-full md:w-auto justify-center shadow-sm">View Metrics</Button>
                   </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                   {signal.tags.map(tag => (
                     <span key={tag} className="text-xs md:text-sm font-medium text-cofound-blue dark:text-cofound-sky hover:underline cursor-pointer bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded-lg transition-colors">#{tag}</span>
                   ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pl-0 md:pl-[64px] pt-5 border-t border-cofound-nav dark:border-white/5">
                 <div className="flex gap-4 md:gap-6">
                    <button className="flex items-center gap-2.5 text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue dark:hover:text-cofound-sky text-sm font-semibold transition-colors group px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 active:scale-95">
                       <ThumbsUp size={20} className="group-hover:scale-110 transition-transform stroke-[2px]"/>
                       <span>{signal.engagement.upvotes}</span>
                    </button>
                    <button className="flex items-center gap-2.5 text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue dark:hover:text-cofound-sky text-sm font-semibold transition-colors group px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 active:scale-95">
                       <MessageCircle size={20} className="group-hover:scale-110 transition-transform stroke-[2px]"/>
                       <span>{signal.engagement.comments}</span>
                    </button>
                    <button className="flex items-center gap-2.5 text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue dark:hover:text-cofound-sky text-sm font-semibold transition-colors group px-3 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/5 active:scale-95">
                       <Share2 size={20} className="group-hover:scale-110 transition-transform stroke-[2px]"/>
                       <span className="hidden sm:inline">Share</span>
                    </button>
                 </div>
                 <button className="text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue dark:hover:text-cofound-sky transition-colors p-2.5 hover:bg-blue-50 dark:hover:bg-white/5 rounded-xl active:scale-95">
                    <Bookmark size={20} className="stroke-[2px]" />
                 </button>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-24 text-cofound-textLight dark:text-cofound-textDark/40">
             <div className="mb-6 text-7xl grayscale opacity-50">📭</div>
             <h3 className="text-xl font-bold text-cofound-text dark:text-white mb-2">No posts found</h3>
             <p className="max-w-xs mx-auto">Try switching to another filter or check back later for new updates.</p>
          </div>
        )}
      </div>
      
      {/* End of Feed */}
      {displayedSignals.length > 0 && (
        <div className="text-center py-10 md:py-16">
           <div className="inline-flex items-center gap-3 text-sm text-cofound-textLight dark:text-cofound-textDark/50 font-medium px-4 py-2 bg-white dark:bg-white/5 rounded-full border border-cofound-grey dark:border-white/5 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              You're all caught up
           </div>
        </div>
      )}
    </div>
  );
};

export default Pulse;
