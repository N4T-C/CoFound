import React from 'react';
import { Filter, Bookmark, Zap, Search, UserPlus } from 'lucide-react';
import { Card, Avatar, Button } from '../components/UI';
import { SQUAD_SUGGESTIONS } from '../data';
const Squad = () => {
    return (<div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-10">
       {/* Header & Filter */}
       <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b border-cofound-nav dark:border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-cofound-text dark:text-white">Network Graph</h2>
            <p className="text-cofound-textLight dark:text-cofound-textDark/70 text-sm mt-1">AI-curated matches based on your goals.</p>
          </div>
          
          <div className="flex gap-3">
             <div className="relative">
                <Search className="absolute left-3 top-2.5 text-cofound-textLight dark:text-cofound-textDark/50" size={16}/>
                <input type="text" placeholder="Filter by skill..." className="pl-10 pr-4 py-2 bg-white dark:bg-cofound-darkCard border border-cofound-grey dark:border-white/10 rounded-lg text-sm outline-none focus:border-cofound-blue w-56 shadow-sm dark:shadow-none dark:text-white"/>
             </div>
             <Button variant="outline" size="md"><Filter size={16}/> Advanced</Button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SQUAD_SUGGESTIONS.map((user, idx) => (<Card key={user.id} className="group hover:-translate-y-1 hover:shadow-lg dark:shadow-none transition-all duration-300 relative p-6" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue"><Bookmark size={20}/></button>
                </div>
                
                <div className="flex flex-col items-center text-center mt-2">
                   <Avatar initials={user.name.split(' ').map(n => n[0]).join('')} size="xl" className="mb-4 ring-4 ring-cofound-bg dark:ring-white/5 group-hover:ring-white dark:group-hover:ring-white/10 transition-colors"/>
                   
                   <h3 className="font-bold text-xl text-cofound-text dark:text-white group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors cursor-pointer">{user.name}</h3>
                   <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/70 font-medium mt-1">{user.role}</p>
                   <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/50 mt-0.5">{user.company}</p>
                </div>

                <div className="bg-cofound-bg/50 dark:bg-white/5 rounded-lg p-3 my-5 flex items-center justify-between border border-transparent group-hover:border-cofound-grey dark:group-hover:border-white/10 transition-colors">
                   <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                      <Zap size={14} fill="currentColor"/>
                      <span className="text-xs font-bold">{user.skill}</span>
                   </div>
                   <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded">{user.match}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <Button variant="secondary" size="sm" className="font-medium">Profile</Button>
                   <Button variant="primary" size="sm" className="font-bold"><UserPlus size={16}/> Connect</Button>
                </div>
             </Card>))}
          
          {/* 'Add New' Placeholder */}
          <div className="rounded-xl border-2 border-dashed border-cofound-grey dark:border-white/10 flex flex-col items-center justify-center p-8 text-center hover:border-cofound-blue/50 hover:bg-blue-50/10 transition-all cursor-pointer group min-h-[320px]">
             <div className="w-14 h-14 rounded-full bg-white dark:bg-white/5 border border-cofound-grey dark:border-white/10 flex items-center justify-center text-cofound-textLight dark:text-cofound-textDark/50 group-hover:text-cofound-blue dark:group-hover:text-cofound-sky group-hover:border-cofound-blue transition-all mb-4 shadow-sm">
                <Search size={24}/>
             </div>
             <h3 className="font-bold text-cofound-text dark:text-white text-base">Discover More</h3>
             <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 mt-1 mb-4 px-4">Browse the full directory of verified founders.</p>
          </div>
       </div>
    </div>);
};
export default Squad;
