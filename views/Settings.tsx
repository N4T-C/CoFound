
import React, { useState } from 'react';
import { 
  Bell, Moon, Shield, CreditCard, User, ChevronRight, 
  Smartphone, Mail, Lock, Eye, Check, AlertTriangle, LogOut, Globe 
} from 'lucide-react';
import { Card, Avatar, Button, Chip } from '../components/UI';

interface SettingsViewProps {
  currentTheme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${checked ? 'bg-cofound-blue' : 'bg-cofound-grey dark:bg-white/10'}`}
  >
    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
  </button>
);

const SectionHeader: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 text-cofound-blue dark:text-cofound-sky rounded-xl">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-cofound-text dark:text-white">{title}</h3>
      <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/70">{description}</p>
    </div>
  </div>
);

const SettingsView: React.FC<SettingsViewProps> = ({ currentTheme, onThemeChange }) => {
  const [emailDigest, setEmailDigest] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-20">
      
      <div>
        <h2 className="text-3xl font-extrabold text-cofound-text dark:text-white tracking-tight">Settings</h2>
        <p className="text-cofound-textLight dark:text-cofound-textDark/70 mt-1">Manage your account preferences and workspace configuration.</p>
      </div>

      {/* 1. PROFILE SECTION */}
      <Card className="overflow-hidden">
        <SectionHeader icon={User} title="Public Profile" description="Manage how others see you on CoFound." />
        
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-cofound-bg/50 dark:bg-white/5 rounded-xl border border-cofound-grey dark:border-white/10">
          <Avatar initials="SA" size="xl" />
          <div className="flex-1 text-center md:text-left space-y-1">
            <h4 className="font-bold text-cofound-text dark:text-white text-lg">Sanjay Aaron</h4>
            <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/70">sanjay@cofound.com • <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Founder</span></p>
          </div>
          <Button variant="outline" size="sm">Edit Details</Button>
        </div>

        <div className="mt-6 space-y-4">
           <div className="flex items-center justify-between py-2 border-b border-cofound-grey dark:border-white/5">
              <div className="flex items-center gap-3">
                 <Globe size={18} className="text-cofound-textLight dark:text-cofound-textDark/50"/>
                 <span className="font-medium text-cofound-text dark:text-white">Profile Visibility</span>
              </div>
              <select className="bg-transparent text-sm font-bold text-cofound-text dark:text-white border-none outline-none cursor-pointer focus:ring-0">
                 <option className="bg-white dark:bg-cofound-darkCard text-cofound-text dark:text-white">Everyone</option>
                 <option className="bg-white dark:bg-cofound-darkCard text-cofound-text dark:text-white">Network Only</option>
                 <option className="bg-white dark:bg-cofound-darkCard text-cofound-text dark:text-white">Private</option>
              </select>
           </div>
           <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                 <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-medium text-cofound-text dark:text-white">Online Status</span>
                 </div>
              </div>
              <Toggle checked={true} onChange={() => {}} />
           </div>
        </div>
      </Card>

      {/* 2. APPEARANCE SECTION */}
      <Card>
        <SectionHeader icon={Moon} title="Appearance" description="Customize your interface theme." />
        
        <div className="grid grid-cols-2 gap-4">
           <div 
             onClick={() => onThemeChange('light')}
             className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all ${currentTheme === 'light' ? 'border-cofound-blue bg-blue-50/30 dark:bg-blue-500/5' : 'border-cofound-grey dark:border-white/10 hover:border-cofound-blue/50'}`}
           >
              <div className="w-full h-24 bg-[#F8F9FB] rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                 <div className="w-16 h-12 bg-white rounded shadow-sm"></div>
              </div>
              <div className="flex items-center gap-2">
                 <span className={`text-sm font-bold ${currentTheme === 'light' ? 'text-cofound-blue' : 'text-cofound-textLight dark:text-cofound-textDark/60'}`}>Light Mode</span>
                 {currentTheme === 'light' && <Check size={14} className="text-cofound-blue"/>}
              </div>
           </div>

           <div 
             onClick={() => onThemeChange('dark')}
             className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all ${currentTheme === 'dark' ? 'border-cofound-blue bg-blue-50/30 dark:bg-blue-500/5' : 'border-cofound-grey dark:border-white/10 hover:border-cofound-blue/50'}`}
           >
              <div className="w-full h-24 bg-[#0A0F1F] rounded-lg border border-white/10 shadow-sm flex items-center justify-center">
                 <div className="w-16 h-12 bg-[#111827] rounded shadow-sm border border-white/5"></div>
              </div>
              <div className="flex items-center gap-2">
                 <span className={`text-sm font-bold ${currentTheme === 'dark' ? 'text-cofound-blue dark:text-white' : 'text-cofound-textLight dark:text-cofound-textDark/60'}`}>Dark Mode</span>
                 {currentTheme === 'dark' && <Check size={14} className="text-cofound-blue dark:text-white"/>}
              </div>
           </div>
        </div>
      </Card>

      {/* 3. NOTIFICATIONS */}
      <Card>
         <SectionHeader icon={Bell} title="Notifications" description="Choose what we get in touch about." />
         
         <div className="space-y-6">
            <div className="flex items-center justify-between">
               <div>
                  <h4 className="font-bold text-cofound-text dark:text-white text-sm">Email Digest</h4>
                  <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 mt-0.5">Receive a weekly summary of your stats.</p>
               </div>
               <Toggle checked={emailDigest} onChange={() => setEmailDigest(!emailDigest)} />
            </div>
            
            <div className="flex items-center justify-between">
               <div>
                  <h4 className="font-bold text-cofound-text dark:text-white text-sm">Marketing Updates</h4>
                  <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 mt-0.5">Product announcements and tips.</p>
               </div>
               <Toggle checked={marketingEmails} onChange={() => setMarketingEmails(!marketingEmails)} />
            </div>

            <div className="flex items-center justify-between">
               <div>
                  <h4 className="font-bold text-cofound-text dark:text-white text-sm">New Connections</h4>
                  <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 mt-0.5">When someone follows you or sends a request.</p>
               </div>
               <Toggle checked={true} onChange={() => {}} />
            </div>
         </div>
      </Card>

      {/* 4. SECURITY */}
      <Card>
         <SectionHeader icon={Shield} title="Security" description="Protect your account and data." />
         
         <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-cofound-grey dark:border-white/10 bg-cofound-bg/30 dark:bg-white/5">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
                     <Lock size={18} />
                  </div>
                  <div>
                     <h4 className="font-bold text-cofound-text dark:text-white text-sm">Two-Factor Authentication</h4>
                     <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/60">Enabled via Authenticator App</p>
                  </div>
               </div>
               <Toggle checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
            </div>

            <div className="flex justify-between items-center py-2">
               <span className="text-sm font-medium text-cofound-text dark:text-white">Password</span>
               <Button variant="ghost" size="sm" className="text-cofound-blue dark:text-cofound-sky">Update Password</Button>
            </div>
         </div>
      </Card>

      {/* 5. BILLING */}
      <Card>
         <SectionHeader icon={CreditCard} title="Billing & Plans" description="Manage your subscription and payment methods." />
         
         <div className="bg-gradient-to-r from-cofound-darkBg to-cofound-darkBlue text-white rounded-xl p-6 relative overflow-hidden mb-6">
             <div className="relative z-10 flex justify-between items-start">
                <div>
                   <h4 className="font-bold text-lg">Pro Plan</h4>
                   <p className="text-blue-200 text-sm">₹999/month • Billed Annually</p>
                </div>
                <Chip label="ACTIVE" color="bg-cofound-lime text-cofound-darkBg border-none" size="sm" />
             </div>
             <div className="relative z-10 mt-6 flex gap-3">
                <Button size="sm" className="bg-white text-cofound-darkBg hover:bg-white/90 border-none">Manage Subscription</Button>
                <Button size="sm" className="bg-white/10 text-white hover:bg-white/20 border-transparent">View Invoices</Button>
             </div>
         </div>

         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-6 bg-slate-200 dark:bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">VISA</div>
               <span className="text-sm font-medium text-cofound-text dark:text-white">Visa ending in 4242</span>
            </div>
            <Button variant="ghost" size="sm" className="text-cofound-textLight dark:text-cofound-textDark/60">Edit</Button>
         </div>
      </Card>

      {/* DANGER ZONE */}
      <div className="pt-6 border-t border-cofound-grey dark:border-white/10">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
               <AlertTriangle size={18} />
               <span className="font-bold text-sm">Danger Zone</span>
            </div>
            <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10">Delete Account</Button>
         </div>
      </div>

    </div>
  );
};

export default SettingsView;
