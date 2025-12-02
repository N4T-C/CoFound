
import React from 'react';
import { CheckCircle2, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import { Button } from '../components/UI';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white font-sans selection:bg-cofound-lime selection:text-cofound-darkBg overflow-hidden">
      
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-gradient-to-br from-cofound-blue to-blue-700 rounded-xl flex items-center justify-center font-bold text-white text-2xl shadow-lg shadow-blue-500/20">C</div>
           <span className="font-bold text-2xl tracking-tight">CoFound</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
           <a href="#" className="hover:text-white transition-colors">Product</a>
           <a href="#" className="hover:text-white transition-colors">Network</a>
           <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
           <button onClick={onLogin} className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Log In</button>
           <Button variant="primary" onClick={onLogin} className="bg-cofound-blue hover:bg-cofound-blue/90 border border-white/10 shadow-glow">
             Get Started
           </Button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-28 pb-20 relative">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cofound-blue/20 rounded-full blur-[140px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cofound-lime text-sm font-semibold backdrop-blur-md shadow-lg">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cofound-lime opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-cofound-lime"></span>
                 </span>
                 The Operating System for Founders
              </div>

              <h1 className="text-5xl md:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] text-white">
                Scale your startup <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cofound-blue via-blue-400 to-indigo-300">without the chaos.</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                Connect with verified founders, access real-time market intel, and hire your dream squad. All in one social dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                 <Button variant="accent" size="lg" onClick={onLogin} className="font-extrabold shadow-xl shadow-blue-500/20 text-lg px-8">
                   Join the Network <ArrowRight size={20} className="ml-1" />
                 </Button>
                 <Button variant="secondary" size="lg" onClick={onLogin} className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-sm text-lg px-8">
                   View Demo
                 </Button>
              </div>

              <div className="flex items-center gap-8 pt-6 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-2.5"><CheckCircle2 size={18} className="text-cofound-lime fill-current/10"/> Verified Community</span>
                <span className="flex items-center gap-2.5"><CheckCircle2 size={18} className="text-cofound-lime fill-current/10"/> Zero Fees</span>
              </div>
            </div>

            {/* Right: Abstract UI Mockup */}
            <div className="relative hidden md:block animate-fade-in" style={{animationDelay: '200ms'}}>
               <div className="relative z-10 bg-[#111827] border border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/50 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
                  
                  {/* Mock Header */}
                  <div className="flex items-center justify-between mb-10 opacity-50">
                     <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-6">
                     <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cofound-blue to-purple-600 shadow-lg"></div>
                        <div className="space-y-3 flex-1 pt-1">
                           <div className="h-4 w-1/3 bg-slate-700/80 rounded-full"></div>
                           <div className="h-3 w-full bg-slate-800 rounded-full"></div>
                           <div className="h-3 w-3/4 bg-slate-800 rounded-full"></div>
                        </div>
                     </div>
                     <div className="h-56 rounded-2xl bg-slate-800/30 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-800/40 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cofound-blue/10 to-transparent"></div>
                        <TrendingUp size={80} className="text-cofound-blue opacity-40 group-hover:scale-110 transition-transform duration-500" />
                     </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -left-12 bottom-24 bg-[#1e293b] p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                      <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl"><Users size={24} /></div>
                      <div>
                         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">New Match</div>
                         <div className="font-bold text-white">CTO Candidate</div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
