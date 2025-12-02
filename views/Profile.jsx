import React from 'react';
import { MapPin, Link as LinkIcon, Calendar, Twitter, Linkedin, Github, Award, Zap, Users, ArrowUpRight, Briefcase, Code2, Globe, Copy, ShieldCheck } from 'lucide-react';
import { Card, Avatar, Button, Chip } from '../components/UI';
const Profile = () => {
    return (<div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      
      {/* 1. HERO SECTION: The "Founder ID" */}
      <div className="relative mb-8">
        <div className="h-52 bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-t-3xl border-b border-white/10 relative overflow-hidden">
           {/* Abstract Pattern */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
           <div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-cofound-blue/10 to-transparent"></div>
        </div>

        <div className="bg-white dark:bg-cofound-darkCard rounded-b-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-none border-x border-b border-cofound-grey dark:border-white/5 mx-0 md:mx-4 -mt-12 p-6 md:p-10 flex flex-col md:flex-row gap-8 relative z-10">
           
           {/* Avatar Block */}
           <div className="flex-shrink-0 -mt-24 md:-mt-28 mb-4 md:mb-0 relative group">
              <div className="w-36 h-36 md:w-44 md:h-44 bg-white dark:bg-cofound-darkCard p-2 rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out">
                 <Avatar initials="SA" size="xl" className="w-full h-full rounded-2xl" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300"/>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-cofound-darkCard p-1.5 rounded-full shadow-lg">
                 <div className="bg-cofound-lime text-cofound-darkBg p-1.5 rounded-full border border-cofound-grey dark:border-cofound-darkCard" title="Verified Founder">
                    <ShieldCheck size={20} strokeWidth={2.5}/>
                 </div>
              </div>
           </div>

           {/* Identity Block */}
           <div className="flex-1 min-w-0 pt-2">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                 <div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-cofound-text dark:text-white tracking-tight flex flex-wrap items-center gap-3">
                       Sanjay Aaron 
                       <span className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 bg-cofound-bg dark:bg-white/10 px-3 py-1.5 rounded-lg border border-cofound-grey dark:border-white/5 uppercase tracking-wider">He/Him</span>
                    </h1>
                    <p className="text-xl text-cofound-textLight dark:text-cofound-textDark/80 font-medium mt-2 leading-relaxed">Building the OS for Founders @ CoFound</p>
                    <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-cofound-textLight dark:text-cofound-textDark/60 font-medium">
                       <span className="flex items-center gap-2"><MapPin size={18} className="text-cofound-text dark:text-white"/> Bangalore, India</span>
                       <a href="#" className="flex items-center gap-2 hover:text-cofound-blue transition-colors"><LinkIcon size={18} className="text-cofound-text dark:text-white"/> cofound.com</a>
                       <span className="flex items-center gap-2 text-cofound-blue dark:text-cofound-sky font-bold bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded cursor-pointer"><Calendar size={16}/> Book a call</span>
                    </div>
                 </div>

                 <div className="flex gap-3 w-full md:w-auto">
                    <Button variant="outline" size="md" className="hidden md:flex"><Copy size={18}/> Copy ID</Button>
                    <Button variant="accent" size="md" className="shadow-lg shadow-blue-900/20 flex-1 md:flex-none">Follow</Button>
                 </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-px bg-cofound-grey/50 dark:bg-white/10 rounded-2xl overflow-hidden border border-cofound-grey dark:border-white/5">
                 <div className="bg-white dark:bg-cofound-darkCard p-4 hover:bg-blue-50/30 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-1">Followers</div>
                    <div className="text-xl font-bold text-cofound-text dark:text-white">12.4k</div>
                 </div>
                 <div className="bg-white dark:bg-cofound-darkCard p-4 hover:bg-blue-50/30 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-1">Vouches</div>
                    <div className="text-xl font-bold text-cofound-text dark:text-white">843</div>
                 </div>
                 <div className="bg-white dark:bg-cofound-darkCard p-4 hover:bg-blue-50/30 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-1">Impact</div>
                    <div className="text-xl font-bold text-cofound-blue dark:text-cofound-sky">₹15Cr+</div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-0">
         
         {/* LEFT COLUMN */}
         <div className="lg:col-span-4 space-y-6">
            
            {/* About Card */}
            <Card hoverable className="relative overflow-hidden group">
               <h3 className="text-xs font-extrabold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-5">About</h3>
               <p className="text-cofound-text dark:text-cofound-textDark leading-relaxed text-[15px] font-normal">
                  Serial builder obsessed with DX and Fintech. Previously scaled <span className="font-bold text-cofound-darkBlue dark:text-white border-b-2 border-cofound-blue/20">PayFlow</span> to acquisition. Currently solving the loneliness of the founder journey.
               </p>
               <div className="mt-8 pt-6 border-t border-cofound-grey/50 dark:border-white/5">
                  <h4 className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/50 mb-3 uppercase tracking-wide">On the web</h4>
                  <div className="flex gap-2">
                     <button className="p-2.5 bg-cofound-bg dark:bg-white/5 hover:bg-[#1DA1F2] hover:text-white rounded-xl transition-colors text-cofound-textLight dark:text-cofound-textDark/70"><Twitter size={20}/></button>
                     <button className="p-2.5 bg-cofound-bg dark:bg-white/5 hover:bg-[#0A66C2] hover:text-white rounded-xl transition-colors text-cofound-textLight dark:text-cofound-textDark/70"><Linkedin size={20}/></button>
                     <button className="p-2.5 bg-cofound-bg dark:bg-white/5 hover:bg-[#333] hover:text-white rounded-xl transition-colors text-cofound-textLight dark:text-cofound-textDark/70"><Github size={20}/></button>
                     <button className="p-2.5 bg-cofound-bg dark:bg-white/5 hover:bg-cofound-blue hover:text-white rounded-xl transition-colors text-cofound-textLight dark:text-cofound-textDark/70"><Globe size={20}/></button>
                  </div>
               </div>
            </Card>

            {/* Badges / DNA */}
            <Card hoverable>
               <h3 className="text-xs font-extrabold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-widest mb-5">Founder DNA</h3>
               <div className="flex flex-wrap gap-2.5">
                  <Chip label="Serial Founder" color="bg-purple-50 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300" className="border border-purple-100 dark:border-transparent"/>
                  <Chip label="Ex-YCombinator" color="bg-orange-50 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300" className="border border-orange-100 dark:border-transparent"/>
                  <Chip label="Technical" color="bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" className="border border-blue-100 dark:border-transparent"/>
                  <Chip label="Angel Investor" color="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" className="border border-emerald-100 dark:border-transparent"/>
               </div>

               <h4 className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/50 mt-8 mb-4 uppercase tracking-wide">Top Skills</h4>
               <div className="space-y-4">
                  {[{ l: 'Product Strategy', v: '95%' }, { l: 'React / Next.js', v: '90%' }, { l: 'Fundraising', v: '85%' }].map(skill => (<div key={skill.l}>
                        <div className="flex justify-between text-xs font-bold mb-2 text-cofound-text dark:text-cofound-textDark tracking-tight">
                           <span>{skill.l}</span>
                           <span>{skill.v}</span>
                        </div>
                        <div className="h-2 w-full bg-cofound-bg dark:bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-cofound-blue dark:bg-cofound-sky rounded-full" style={{ width: skill.v }}></div>
                        </div>
                     </div>))}
               </div>
            </Card>

            {/* Vouch / Endorsements */}
            <Card className="bg-gradient-to-br from-cofound-darkBg to-cofound-darkBlue text-white border-none shadow-xl">
               <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <Award className="text-cofound-lime" size={20}/>
                  </div>
                  <h3 className="font-bold text-lg">Social Capital</h3>
               </div>
               <div className="flex -space-x-3 mb-5 pl-2">
                  {[1, 2, 3, 4].map(i => (<div key={i} className="w-10 h-10 rounded-full border-2 border-cofound-darkBlue bg-white shadow-sm"></div>))}
                  <div className="w-10 h-10 rounded-full border-2 border-cofound-darkBlue bg-cofound-lime text-cofound-darkBg flex items-center justify-center font-bold text-xs shadow-sm">+42</div>
               </div>
               <p className="text-sm text-blue-100 leading-relaxed mb-6 opacity-90">
                  Endorsed by 12 investors and 30+ founders for <span className="font-bold text-white border-b border-white/30 pb-0.5">Product Velocity</span>.
               </p>
               <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-transparent backdrop-blur-sm">Vouch for Sanjay</Button>
            </Card>
         </div>

         {/* RIGHT COLUMN: The Work (Wide) */}
         <div className="lg:col-span-8 space-y-8">
            
            {/* Ventures Section */}
            <div>
               <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-cofound-text dark:text-white flex items-center gap-2">
                     <Briefcase size={22} className="text-cofound-blue dark:text-cofound-sky"/> Ventures
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Active Venture */}
                  <div className="group bg-white dark:bg-cofound-darkCard rounded-2xl border border-cofound-blue/30 dark:border-cofound-blue/40 shadow-[0_4px_20px_rgba(42,111,247,0.08)] dark:shadow-none p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                     <div className="absolute top-0 right-0 px-3 py-1 bg-cofound-blue text-white text-[10px] font-bold rounded-bl-xl tracking-wider">ACTIVE</div>
                     <div className="flex items-start gap-5 mb-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-cofound-blue to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">C</div>
                        <div>
                           <h3 className="font-bold text-xl text-cofound-text dark:text-white group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors">CoFound</h3>
                           <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 font-medium">Founder & CEO</p>
                        </div>
                     </div>
                     <p className="text-[15px] text-cofound-text dark:text-cofound-textDark leading-relaxed mb-6">
                        Building the LinkedIn alternative for the next generation of builders.
                     </p>
                     <div className="flex gap-2">
                        <Chip label="Seed Stage" size="sm"/>
                        <Chip label="Hiring" size="sm" color="bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" className="border border-emerald-100 dark:border-transparent"/>
                     </div>
                  </div>

                  {/* Past Venture */}
                  <div className="group bg-white dark:bg-cofound-darkCard rounded-2xl border border-cofound-grey dark:border-white/10 p-6 relative overflow-hidden transition-all hover:border-cofound-blue/30 hover:shadow-md cursor-pointer">
                     <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 text-[10px] font-bold rounded-bl-xl tracking-wider">ACQUIRED</div>
                     <div className="flex items-start gap-5 mb-5">
                        <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">P</div>
                        <div>
                           <h3 className="font-bold text-xl text-cofound-text dark:text-white">PayFlow</h3>
                           <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 font-medium">Co-Founder & CTO</p>
                        </div>
                     </div>
                     <p className="text-[15px] text-cofound-text dark:text-cofound-textDark leading-relaxed mb-6">
                        Automated payroll for remote teams. Scaled to ₹16Cr ARR in 18 months.
                     </p>
                     <div className="flex gap-2">
                        <Chip label="Fintech" size="sm"/>
                        <Chip label="2020-2023" size="sm" color="bg-cofound-bg text-cofound-textLight dark:bg-white/10 dark:text-cofound-textDark/50"/>
                     </div>
                  </div>
               </div>
            </div>

            {/* Activity / Feed Highlight */}
            <div>
               <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold text-cofound-text dark:text-white flex items-center gap-2">
                     <Zap size={22} className="text-amber-500 fill-amber-500"/> Recent Highlights
                  </h2>
               </div>
               
               <div className="space-y-4">
                  {[1, 2].map((i) => (<Card key={i} hoverable className="flex gap-5 !p-5">
                        <div className="w-14 text-center flex-shrink-0 pt-1">
                           <div className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase tracking-widest">OCT</div>
                           <div className="text-2xl font-bold text-cofound-text dark:text-white">1{i}</div>
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center gap-2.5 mb-2">
                              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 dark:bg-purple-500/20 dark:text-purple-300 px-2 py-0.5 rounded border border-purple-100 dark:border-transparent">LAUNCH</span>
                              <span className="text-xs text-cofound-textLight dark:text-cofound-textDark/50 font-medium">• Product Hunt</span>
                           </div>
                           <h3 className="font-bold text-lg text-cofound-text dark:text-white mb-2 leading-tight">Launched CoFound 2.0 - The OS for Founders</h3>
                           <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/70 line-clamp-2 leading-relaxed">
                              We just went live! It's been a crazy 3 months of building in stealth. Check it out and let me know what you think about the new profile features.
                           </p>
                           <div className="flex items-center gap-5 mt-4">
                              <span className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 flex items-center gap-1.5"><ArrowUpRight size={14} strokeWidth={2.5}/> 452 Upvotes</span>
                              <span className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 flex items-center gap-1.5"><Users size={14} strokeWidth={2.5}/> 89 Comments</span>
                           </div>
                        </div>
                     </Card>))}
               </div>
            </div>
            
            {/* Tech Stack / Tools */}
            <div>
               <h2 className="text-xl font-bold text-cofound-text dark:text-white mb-5 flex items-center gap-2">
                  <Code2 size={22} className="text-cofound-textLight dark:text-cofound-textDark/60"/> Toolbox
               </h2>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Figma', 'React', 'TypeScript', 'Node.js', 'Postgres', 'AWS', 'Stripe', 'OpenAI'].map(tool => (<div key={tool} className="flex items-center gap-3 p-3.5 rounded-xl border border-cofound-grey dark:border-white/10 bg-white dark:bg-cofound-darkCard shadow-sm hover:shadow-md hover:border-cofound-blue/30 transition-all cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-cofound-bg dark:bg-white/5 flex items-center justify-center text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/50">
                           {tool[0]}
                        </div>
                        <span className="text-sm font-bold text-cofound-text dark:text-white">{tool}</span>
                     </div>))}
               </div>
            </div>

         </div>
      </div>
    </div>);
};
export default Profile;
