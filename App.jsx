import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, MessageCircle, Briefcase, Bell, Search, Plus, Home, Compass, Layout, Bookmark, Settings, Heart, UserPlus, Zap, Clock, ArrowLeft, Sparkles } from 'lucide-react';
import Pulse from './views/Pulse';
import Intel from './views/Intel';
import Squad from './views/Squad';
import Chat from './views/Chat';
import Jobs from './views/Jobs';
import SettingsView from './views/Settings';
import Profile from './views/Profile';
import Saved from './views/Saved';
import Projects from './views/Projects';
import LandingPage from './views/LandingPage';
import Flux from './views/Flux';
import { Avatar, Button } from './components/UI';

const RailItem = ({ icon: Icon, label, to, active, expanded, badge }) => (
  <Link to={to} className={`
      w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative
      ${active
        ? 'bg-blue-50 text-cofound-blue font-bold dark:bg-white/10 dark:text-cofound-sky shadow-sm'
        : 'text-cofound-textLight dark:text-cofound-textDark/60 hover:bg-cofound-grey/50 dark:hover:bg-white/5 hover:text-cofound-text dark:hover:text-white font-medium hover:translate-x-1'}
      ${expanded ? 'justify-start' : 'justify-center'}
    `} title={!expanded ? label : undefined}>
    <div className="relative">
      <Icon size={22} strokeWidth={active ? 2.5 : 2} className={`transition-transform duration-200 ${active ? 'scale-105' : 'group-hover:scale-110'}`}/>
      {badge && (<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-cofound-darkCard shadow-sm animate-pulse-slow"></span>)}
    </div>
    {expanded && (<span className="text-sm tracking-tight whitespace-nowrap animate-fade-in origin-left">
        {label}
      </span>)}
    {!expanded && active && (<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cofound-blue rounded-r-full"></div>)}
  </Link>
);

// --- NOTIFICATIONS MOCK DATA ---
const NOTIFICATIONS = [
    { id: 1, type: 'LIKE', actor: 'Arun Kumar', avatar: 'AK', content: 'liked your post about "SaaS Pricing Models"', time: '2m ago', read: false },
    { id: 2, type: 'FOLLOW', actor: 'Sarah Lee', avatar: 'SL', content: 'started following you', time: '1h ago', read: false },
    { id: 3, type: 'SYSTEM', actor: 'CoFound', avatar: 'C', content: 'Your profile strength is at 85%. Add a project to reach 100%.', time: '3h ago', read: true },
    { id: 4, type: 'MATCH', actor: 'System', avatar: 'AI', content: 'New co-founder match found: Technical CTO in SF', time: '1d ago', read: true },
];

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRailExpanded, setIsRailExpanded] = useState(false);
    const location = useLocation();

    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('cofound_theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light';
    });
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isMobileComposerOpen, setIsMobileComposerOpen] = useState(false);
    const notificationRef = useRef(null);
    const mobileSearchInputRef = useRef(null);
    const recentSearches = ['Vertical AI', 'SaaS Pricing Models', 'Marketing Growth', 'John Doe'];

    // Handle Theme Change and Persistence
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#0A0F1F'; // cofound-darkBg
        }
        else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#F8F9FB'; // cofound-bg
        }
        localStorage.setItem('cofound_theme', theme);
    }, [theme]);

    // Click Outside to Close Notifications
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
                e.preventDefault();
                document.getElementById('global-search')?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Auto-focus mobile search input when opened
    useEffect(() => {
        if (isMobileSearchOpen && mobileSearchInputRef.current) {
            setTimeout(() => {
                mobileSearchInputRef.current?.focus();
            }, 100);
        }
    }, [isMobileSearchOpen]);

    if (!isLoggedIn) {
        return <LandingPage onLogin={() => setIsLoggedIn(true)}/>;
    }

    const activeModule = location.pathname.toUpperCase().substring(1) || 'PULSE';

    return (<div className="min-h-screen bg-cofound-bg dark:bg-cofound-darkBg font-sans text-cofound-text dark:text-cofound-textDark flex flex-col transition-colors duration-300">
      
      {/* 1. HEADER (Adaptive: Sticky Desktop / Minimal Mobile) */}
      <header className="sticky top-0 z-40 h-16 bg-white/80 dark:bg-cofound-darkCard/80 backdrop-blur-xl border-b border-cofound-nav dark:border-white/5 px-4 lg:px-6 flex items-center justify-between transition-colors duration-300 relative">
        
        {/* MOBILE SEARCH OVERLAY */}
        {isMobileSearchOpen ? (<div className="absolute inset-0 bg-white dark:bg-cofound-darkCard z-50 flex items-center px-4 animate-fade-in">
            <button onClick={() => setIsMobileSearchOpen(false)} className="w-10 h-10 flex items-center justify-center -ml-2 mr-2 text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue transition-colors rounded-full active:bg-cofound-bg dark:active:bg-white/5">
              <ArrowLeft size={24}/>
            </button>
            <div className="flex-1 relative">
              <input ref={mobileSearchInputRef} type="text" placeholder="Search..." className="w-full bg-cofound-grey/30 dark:bg-black/20 text-cofound-text dark:text-white px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-cofound-blue/40 text-base"/>
            </div>
            {/* Mobile Recent Searches Dropdown (Integrated) */}
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-cofound-darkCard border-b border-cofound-grey dark:border-white/10 shadow-lg p-4 animate-slide-up">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-wider">Recent</span>
                  <button className="text-[10px] font-bold text-cofound-blue">Clear</button>
               </div>
               {recentSearches.map((term) => (<button key={term} className="w-full text-left py-3 flex items-center gap-3 border-b border-cofound-grey/30 dark:border-white/5 last:border-0">
                     <Clock size={16} className="text-cofound-textLight dark:text-cofound-textDark/40"/>
                     <span className="text-sm font-medium text-cofound-text dark:text-white">{term}</span>
                  </button>))}
            </div>
          </div>) : (<>
            {/* Left: Brand */}
            <div className="flex items-center gap-3 lg:w-64 shrink-0">
              <Link to="/" className="w-9 h-9 bg-gradient-to-br from-cofound-blue to-cofound-darkBlue rounded-xl flex items-center justify-center text-white shadow-md cursor-pointer active:scale-95 transition-transform">
                <span className="font-bold text-xl tracking-tighter">C</span>
              </Link>
              <span className="hidden md:block font-bold text-xl tracking-tight text-cofound-text dark:text-white">CoFound</span>
            </div>

            {/* Center: Search (Hidden on Mobile, Expanded on Desktop) */}
            <div className="flex-1 max-w-xl px-4 relative z-50 hidden md:block">
              <div className="relative group">
                <Search className="absolute left-3.5 top-2.5 text-cofound-textLight dark:text-cofound-textDark/50 group-focus-within:text-cofound-blue transition-colors" size={18}/>
                <input id="global-search" type="text" placeholder="Search people, jobs, companies..." onFocus={() => setIsSearchFocused(true)} onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} className="w-full pl-11 pr-12 py-2.5 bg-cofound-grey/30 dark:bg-black/20 border border-transparent focus:bg-white dark:focus:bg-cofound-darkCard focus:border-cofound-blue/40 focus:ring-4 focus:ring-cofound-blue/10 rounded-xl text-sm transition-all outline-none placeholder:text-cofound-textLight/60 dark:placeholder:text-cofound-textDark/30 dark:text-white font-medium"/>
                <div className="absolute right-3 top-2.5 px-1.5 py-0.5 rounded border border-cofound-grey dark:border-white/10 text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/40">/</div>
                
                {/* Recent Searches Dropdown */}
                {isSearchFocused && (<div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-cofound-darkCard border border-cofound-grey dark:border-white/10 rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden animate-slide-up origin-top">
                    <div className="flex items-center justify-between px-5 py-3 bg-cofound-bg/50 dark:bg-white/5 border-b border-cofound-grey dark:border-white/5">
                        <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/50 uppercase tracking-wider">Recent</span>
                        <button className="text-[10px] font-bold text-cofound-blue hover:text-cofound-darkBlue dark:hover:text-cofound-sky transition-colors">Clear</button>
                    </div>
                    <div className="py-2">
                        {recentSearches.map((term, i) => (<button key={term} className="w-full text-left px-5 py-3 hover:bg-cofound-bg dark:hover:bg-white/5 flex items-center gap-3 group transition-colors">
                              <Clock size={16} className="text-cofound-textLight dark:text-cofound-textDark/40 group-hover:text-cofound-blue transition-colors"/>
                              <span className="text-sm font-medium text-cofound-text dark:text-white flex-1">{term}</span>
                          </button>))}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Right: Utilities */}
            <div className="flex items-center gap-1 md:gap-5 lg:w-64 justify-end shrink-0">
              {/* Mobile Search Toggle */}
              <button onClick={() => setIsMobileSearchOpen(true)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-cofound-textLight dark:text-cofound-textDark/60 hover:bg-cofound-bg dark:hover:bg-white/10 transition-colors">
                <Search size={22}/>
              </button>

              <Button variant="accent" size="md" className="hidden md:flex rounded-xl shadow-glow">
                <Plus size={18}/> <span className="hidden lg:inline">Create</span>
              </Button>
              
              <div className="relative flex items-center" ref={notificationRef}>
                <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isNotificationsOpen ? 'bg-blue-50 text-cofound-blue dark:bg-white/10 dark:text-white' : 'text-cofound-textLight dark:text-cofound-textDark/60 hover:bg-cofound-bg dark:hover:bg-white/5 hover:text-cofound-blue dark:hover:text-white'}`}>
                  <Bell size={22} className={isNotificationsOpen ? 'fill-current' : ''}/>
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-cofound-darkCard rounded-full pointer-events-none"></span>
                </button>

                {/* NOTIFICATION CENTER */}
                {isNotificationsOpen && (<div className="fixed w-screen right-0 md:w-96 top-[64px] md:top-full md:mt-4 bg-white/95 dark:bg-cofound-darkCard/95 backdrop-blur-2xl border-b md:border border-cofound-grey dark:border-white/10 md:rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden animate-slide-up origin-top-right z-50 flex flex-col max-h-[calc(100vh-80px)] md:max-h-[60vh]">
                    <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-b border-cofound-grey dark:border-white/10 bg-white/50 dark:bg-black/20 shrink-0">
                        <h3 className="font-bold text-sm text-cofound-text dark:text-white">Notifications</h3>
                        <button className="text-xs text-cofound-blue font-bold hover:underline">Mark all read</button>
                    </div>
                    <div className="overflow-y-auto">
                        {NOTIFICATIONS.map(notif => (<div key={notif.id} className={`p-3 md:p-4 flex gap-3 md:gap-4 border-b border-cofound-grey/50 dark:border-white/5 hover:bg-cofound-bg/50 dark:hover:bg-white/5 transition-colors cursor-pointer active:bg-blue-50 dark:active:bg-white/10 ${!notif.read ? 'bg-blue-50/40 dark:bg-blue-500/5' : ''}`}>
                              <div className="relative flex-shrink-0">
                                {notif.avatar === 'AI' || notif.avatar === 'C' ? (<div className="w-10 h-10 rounded-full bg-cofound-blue text-white flex items-center justify-center font-bold shadow-sm">{notif.avatar}</div>) : (<Avatar initials={notif.avatar} size="md"/>)}
                                <div className="absolute -bottom-1 -right-1 p-0.5 bg-white dark:bg-cofound-darkCard rounded-full">
                                    {notif.type === 'LIKE' && <div className="p-1 bg-red-500 rounded-full text-white shadow-sm"><Heart size={10} fill="currentColor"/></div>}
                                    {notif.type === 'FOLLOW' && <div className="p-1 bg-cofound-blue rounded-full text-white shadow-sm"><UserPlus size={10}/></div>}
                                    {notif.type === 'MATCH' && <div className="p-1 bg-purple-500 rounded-full text-white shadow-sm"><Zap size={10} fill="currentColor"/></div>}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm text-cofound-text dark:text-white leading-snug">
                                    <span className="font-bold">{notif.actor}</span> {notif.content}
                                </div>
                                <div className="text-xs text-cofound-textLight dark:text-cofound-textDark/50 mt-1.5 font-medium">{notif.time}</div>
                              </div>
                              {!notif.read && (<div className="w-2 h-2 rounded-full bg-cofound-blue mt-2 flex-shrink-0 shadow-sm"></div>)}
                          </div>))}
                    </div>
                  </div>)}
              </div>
              
              {/* MOBILE CHAT BUTTON (Top Right) */}
              <Link to="/chat" className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors relative ${location.pathname === '/chat' ? 'text-cofound-blue dark:text-cofound-sky bg-blue-50 dark:bg-white/10' : 'text-cofound-textLight dark:text-cofound-textDark/60 hover:bg-cofound-bg dark:hover:bg-white/10'}`}>
                <MessageCircle size={22} className={location.pathname === '/chat' ? 'fill-current' : ''}/>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-cofound-darkCard shadow-sm pointer-events-none"></span>
              </Link>
              
              <div className="h-8 w-[1px] bg-cofound-grey dark:bg-white/10 mx-1 hidden md:block"></div>
              
              <Link to="/profile" className={`flex items-center gap-3 hover:bg-cofound-bg dark:hover:bg-white/5 p-1.5 pr-4 rounded-full transition-colors border ${location.pathname === '/profile' ? 'border-cofound-blue bg-blue-50/50 dark:bg-white/10' : 'border-transparent hover:border-cofound-grey dark:hover:border-white/10'} hidden md:flex`}>
                <Avatar initials="SA" size="sm"/>
                <div className="hidden lg:flex flex-col items-start leading-none gap-0.5">
                  <span className="text-xs font-bold text-cofound-text dark:text-white">Sanjay</span>
                  <span className="text-[10px] text-cofound-textLight dark:text-cofound-textDark/60 font-medium">Pro Plan</span>
                </div>
              </Link>
            </div>
          </>)}
      </header>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="flex-1 flex max-w-[1600px] mx-auto w-full relative">
        
        {/* A. LEFT RAIL (Desktop Only) */}
        <aside className={`
            hidden md:flex flex-col fixed top-16 bottom-0 left-0 z-30 bg-white dark:bg-cofound-darkCard border-r border-cofound-nav dark:border-white/5 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isRailExpanded ? 'w-[240px] shadow-2xl' : 'w-[80px]'}
          `} onMouseEnter={() => setIsRailExpanded(true)} onMouseLeave={() => setIsRailExpanded(false)}>
          <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto no-scrollbar">
            <RailItem icon={Home} label="Home Feed" expanded={isRailExpanded} to="/" active={location.pathname === '/'}/>
            <RailItem icon={Compass} label="Discovery" expanded={isRailExpanded} to="/intel" active={location.pathname === '/intel'}/>
            <RailItem icon={Users} label="My Network" expanded={isRailExpanded} to="/squad" active={location.pathname === '/squad'}/>
            <RailItem icon={Briefcase} label="Jobs" expanded={isRailExpanded} to="/jobs" active={location.pathname === '/jobs'}/>
            <RailItem icon={MessageCircle} label="Messages" expanded={isRailExpanded} to="/chat" active={location.pathname === '/chat'} badge={true}/>
            
            <div className="my-6 border-t border-cofound-grey dark:border-white/5 mx-2"></div>
            
            <RailItem icon={Bookmark} label="Saved" expanded={isRailExpanded} to="/saved" active={location.pathname === '/saved'}/>
            <RailItem icon={Layout} label="My Projects" expanded={isRailExpanded} to="/projects" active={location.pathname === '/projects'}/>
          </div>

          <div className="p-4 border-t border-cofound-nav dark:border-white/5">
             <RailItem icon={Settings} label="Settings" expanded={isRailExpanded} to="/settings" active={location.pathname === '/settings'}/>
          </div>
        </aside>

        {/* SPACER for Fixed Rail - Fixed at 80px on tablet/desktop to allow content to flow naturally while sidebar overlays on expand */}
        <div className="hidden md:block w-[80px] shrink-0"></div>

        {/* B. CENTER FEED (Responsive) */}
        <main className="flex-1 min-w-0 px-0 md:px-6 lg:px-10 py-0 md:py-8 pb-24 md:pb-8">
           <Routes>
              <Route path="/" element={<Pulse />} />
              <Route path="/intel" element={<Intel />} />
              <Route path="/squad" element={<Squad />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<SettingsView currentTheme={theme} onThemeChange={setTheme} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/flux" element={<Flux />} />
           </Routes>
        </main>

        {/* C. RIGHT CONTEXT PANEL (Desktop Only) */}
        {activeModule !== 'CHAT' && activeModule !== 'SETTINGS' && activeModule !== 'PROFILE' && activeModule !== 'PROJECTS' && activeModule !== 'SAVED' && activeModule !== 'FLUX' && (<aside className="hidden xl:block w-[340px] sticky top-24 h-[calc(100vh-96px)] overflow-y-auto no-scrollbar pr-6 py-6 space-y-6">
             {/* Verification Widget */}
             <div className="bg-gradient-to-br from-cofound-darkBlue to-cofound-darkBg rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cofound-lime opacity-10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="font-bold flex items-center gap-2 relative z-10 text-lg"><Zap size={20} className="text-cofound-lime fill-current"/> Get Verified</h3>
                <p className="text-sm text-blue-100 mt-2 mb-6 relative z-10 leading-relaxed opacity-90">
                  Boost your visibility by 3x and unlock investor deal flow.
                </p>
                <button className="w-full py-3 bg-white text-cofound-darkBlue font-bold text-sm rounded-xl hover:bg-cofound-lime hover:text-cofound-text transition-colors relative z-10 shadow-lg">
                  Verify Now
                </button>
             </div>

             {/* Trending Tags */}
             <div className="bg-white dark:bg-cofound-darkCard rounded-2xl border border-cofound-grey dark:border-white/5 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none">
                <h4 className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase tracking-wider mb-5">Trending Now</h4>
                <div className="space-y-4">
                   {['#VerticalAI', '#SaaSPricing', '#RemoteHiring', '#YCW25'].map(tag => (<div key={tag} className="flex justify-between items-center group cursor-pointer">
                        <span className="text-sm font-bold text-cofound-text dark:text-white group-hover:text-cofound-blue transition-colors">{tag}</span>
                        <span className="text-xs font-medium text-cofound-textLight dark:text-cofound-textDark/60 bg-cofound-bg dark:bg-white/5 px-2 py-1 rounded-md">2.4k posts</span>
                     </div>))}
                </div>
             </div>
          </aside>)}
      </div>

      {/* 4. MOBILE BOTTOM NAV (Glassmorphic) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-cofound-darkCard/95 backdrop-blur-xl border-t border-cofound-grey dark:border-white/5 px-2 py-2 flex justify-between items-end pb-safe z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.05)]">
        <Link to="/" className={`flex-1 min-w-0 flex flex-col items-center gap-1 p-2 transition-colors ${location.pathname === '/' ? 'text-cofound-blue dark:text-cofound-sky' : 'text-cofound-textLight dark:text-cofound-textDark/40'}`}>
           <Home size={24} strokeWidth={location.pathname === '/' ? 2.5 : 2}/>
           <span className="text-[10px] font-bold tracking-tight truncate w-full text-center">Home</span>
        </Link>
        
        <Link to="/flux" className={`flex-1 min-w-0 flex flex-col items-center gap-1 p-2 transition-colors ${location.pathname === '/flux' ? 'text-cofound-blue dark:text-cofound-sky' : 'text-cofound-textLight dark:text-cofound-textDark/40'}`}>
           <Sparkles size={24} strokeWidth={location.pathname === '/flux' ? 2.5 : 2}/>
           <span className="text-[10px] font-bold tracking-tight truncate w-full text-center">AI</span>
        </Link>

        {/* FLOATING CREATE BUTTON (Animated) */}
        <div className="relative -top-5 mx-1 flex-shrink-0">
           <button onClick={() => setIsMobileComposerOpen(!isMobileComposerOpen)} className={`w-14 h-14 rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center border-4 border-white dark:border-cofound-darkCard active:scale-95 transition-all duration-300 ${isMobileComposerOpen ? 'bg-cofound-text text-white rotate-45' : 'bg-cofound-blue text-white hover:scale-105'}`}>
              <Plus size={28} strokeWidth={2.5}/>
           </button>
        </div>
        
        <Link to="/profile" className={`flex-1 min-w-0 flex flex-col items-center gap-1 p-2 transition-colors ${location.pathname === '/profile' ? 'text-cofound-blue dark:text-cofound-sky' : 'text-cofound-textLight dark:text-cofound-textDark/40'}`}>
           <Avatar initials="SA" size="xs" className={location.pathname === '/profile' ? 'ring-2 ring-cofound-blue dark:ring-cofound-sky' : ''}/>
           <span className="text-[10px] font-bold tracking-tight truncate w-full text-center">You</span>
        </Link>

        <Link to="/settings" className={`flex-1 min-w-0 flex flex-col items-center gap-1 p-2 transition-colors ${location.pathname === '/settings' ? 'text-cofound-blue dark:text-cofound-sky' : 'text-cofound-textLight dark:text-cofound-textDark/40'}`}>
           <Settings size={24} strokeWidth={location.pathname === '/settings' ? 2.5 : 2}/>
           <span className="text-[10px] font-bold tracking-tight truncate w-full text-center">Settings</span>
        </Link>
      </div>

    </div>);
};
export default App;
