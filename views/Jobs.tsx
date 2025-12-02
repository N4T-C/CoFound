
import React from 'react';
import { Card, Chip, Button } from '../components/UI';
import { JOBS } from '../data';
import { MapPin, IndianRupee, Briefcase, Zap, Bookmark, Share2 } from 'lucide-react';

const Jobs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0B1121] to-[#1e3a8a] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl group border border-white/5">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cofound-lime opacity-10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:opacity-15 transition-opacity duration-700"></div>
        <div className="relative z-10">
          <Chip label="BETA ACCESS" color="bg-white/10 text-cofound-lime border border-white/10 backdrop-blur-sm" size="sm" />
          <h2 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight leading-tight">Find your next <br/>mission-critical role.</h2>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-8">
            Curated high-growth opportunities based on your skills graph. We verify equity data for 100% transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button variant="accent" size="lg" className="text-white font-bold shadow-lg shadow-blue-900/40 border border-white/10">Explore Roles</Button>
             <Button size="lg" className="bg-white/5 text-white hover:bg-white/10 border-white/10 backdrop-blur-sm">Post a Job</Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 px-1">
         <h3 className="font-bold text-xl text-cofound-text dark:text-white">Recommended for you</h3>
         <button className="text-sm font-bold text-cofound-blue dark:text-cofound-sky hover:underline">View all</button>
      </div>

      <div className="space-y-5">
        {JOBS.map((job, idx) => (
          <Card key={job.id} hoverable className="group relative transition-all duration-300" style={{animationDelay: `${idx * 100}ms`}}>
            
            <div className="absolute right-6 top-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="p-2.5 hover:bg-cofound-bg dark:hover:bg-white/10 rounded-full text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue transition-colors"><Share2 size={20}/></button>
               <button className="p-2.5 hover:bg-cofound-bg dark:hover:bg-white/10 rounded-full text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue transition-colors"><Bookmark size={20}/></button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex gap-5">
                 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-cofound-text dark:text-white font-bold text-3xl border border-cofound-grey dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform group-hover:border-cofound-blue/30">
                    {job.company[0]}
                 </div>
                 <div>
                    <h3 className="font-bold text-xl text-cofound-text dark:text-white group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors">{job.role}</h3>
                    <div className="flex items-center gap-3 text-cofound-textLight dark:text-cofound-textDark/60 text-sm font-medium mt-1.5">
                       <span className="text-cofound-text dark:text-white">{job.company}</span>
                       <span className="w-1 h-1 rounded-full bg-cofound-textLight/40 dark:bg-white/30"></span>
                       <span>{job.posted}</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 mt-8 mb-8 pl-0 md:pl-[84px]">
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-2">Compensation</span>
                 <div className="flex items-center gap-1.5 font-mono text-base font-bold text-cofound-text dark:text-white">
                    <IndianRupee size={16} className="text-emerald-600 dark:text-emerald-400"/> {job.salary}
                 </div>
              </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-2">Equity</span>
                 <div className="flex items-center gap-1.5 font-mono text-base font-bold text-cofound-text dark:text-white">
                    <Zap size={16} className="text-amber-500 fill-amber-500"/> {job.equity}
                 </div>
              </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-2">Location</span>
                 <div className="flex items-center gap-1.5 text-base font-medium text-cofound-text dark:text-white">
                    <MapPin size={16} className="text-cofound-blue dark:text-cofound-sky"/> {job.location}
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-cofound-grey/60 dark:border-white/5 pt-5 mt-5 pl-0 md:pl-[84px]">
              <div className="flex flex-wrap items-center gap-2">
                 {job.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-cofound-bg dark:bg-white/5 border border-transparent hover:border-cofound-grey dark:hover:border-white/10 text-cofound-textLight dark:text-cofound-textDark/70 rounded-lg text-xs font-bold transition-colors">
                     {tag}
                   </span>
                 ))}
              </div>
              <Button variant="ghost" size="md" className="text-cofound-blue dark:text-cofound-sky font-bold hover:bg-blue-50 dark:hover:bg-white/5 -mr-2">Apply Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
