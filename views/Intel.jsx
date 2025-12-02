import React from 'react';
import { Card, Chip } from '../components/UI';
import { TrendingUp, BarChart3, Globe, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const chartData = [
    { name: 'Mon', sentiment: 45 },
    { name: 'Tue', sentiment: 52 },
    { name: 'Wed', sentiment: 48 },
    { name: 'Thu', sentiment: 61 },
    { name: 'Fri', sentiment: 55 },
    { name: 'Sat', sentiment: 67 },
    { name: 'Sun', sentiment: 70 },
];
const Intel = () => {
    return (<div className="max-w-5xl mx-auto space-y-6 animate-fade-in pb-10">
       
       <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-cofound-text dark:text-white">Discovery / Intel</h2>
          <span className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 bg-white dark:bg-white/5 border border-cofound-grey dark:border-white/10 px-3 py-1 rounded-full">Updated 5m ago</span>
       </div>

       {/* Stats Row */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Market Sentiment", value: "Bullish", change: "+12%", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/10", iconBg: "bg-emerald-100 dark:bg-emerald-500/20" },
            { label: "Active Deals", value: "1,240", change: "+5 this week", color: "text-cofound-blue dark:text-cofound-sky", bg: "bg-blue-50 dark:bg-blue-500/10", iconBg: "bg-blue-100 dark:bg-blue-500/20" },
            { label: "Trending Sector", value: "Vertical AI", change: "Hot", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-500/10", iconBg: "bg-violet-100 dark:bg-violet-500/20" }
        ].map((stat, i) => (<Card key={i} className="flex flex-col justify-between group cursor-pointer hover:border-cofound-blue/30 p-6">
               <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-cofound-textLight dark:text-cofound-textDark/60 uppercase tracking-wide">{stat.label}</span>
                  <div className={`p-2 rounded-full ${stat.iconBg} ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                     <ArrowUpRight size={16}/>
                  </div>
               </div>
               <div>
                  <div className={`text-3xl font-mono font-bold ${stat.color} tracking-tight`}>{stat.value}</div>
                  <div className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 mt-2 flex items-center gap-1 font-medium"><TrendingUp size={14}/> {stat.change}</div>
               </div>
            </Card>))}
       </div>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-6">
             <Card className="h-[450px] p-6">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="font-bold text-xl text-cofound-text dark:text-white">Sentiment Analysis</h3>
                   <div className="flex gap-2">
                      <Chip label="1W" color="bg-cofound-text dark:bg-white text-white dark:text-cofound-darkBg" size="sm"/>
                      <Chip label="1M" size="sm"/>
                      <Chip label="3M" size="sm"/>
                   </div>
                </div>
                <div className="w-full h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2A6FF7" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#2A6FF7" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6ECF5" opacity={0.3}/>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }} dy={10}/>
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94A3B8' }}/>
                      <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.1)' }} itemStyle={{ color: '#0D1A2D', fontSize: '14px', fontWeight: 'bold' }} cursor={{ stroke: '#2A6FF7', strokeWidth: 2 }}/>
                      <Area type="monotone" dataKey="sentiment" stroke="#2A6FF7" strokeWidth={3} fillOpacity={1} fill="url(#colorSentiment)"/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </Card>

             <div className="grid grid-cols-2 gap-4">
                <Card className="flex items-center gap-5 hover:border-cofound-blue/30 cursor-pointer group transition-all p-6">
                   <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-cofound-blue dark:text-cofound-sky group-hover:scale-110 transition-transform"><BarChart3 size={28}/></div>
                   <div>
                     <h4 className="font-bold text-base text-cofound-text dark:text-white">SaaS Benchmarks</h4>
                     <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 mt-1">Q3 2024 Report</p>
                   </div>
                </Card>
                <Card className="flex items-center gap-5 hover:border-cofound-blue/30 cursor-pointer group transition-all p-6">
                   <div className="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"><Globe size={28}/></div>
                   <div>
                     <h4 className="font-bold text-base text-cofound-text dark:text-white">Hiring Map</h4>
                     <p className="text-sm text-cofound-textLight dark:text-cofound-textDark/60 mt-1">Global Salary Data</p>
                   </div>
                </Card>
             </div>
          </div>
          
          {/* Side Feed */}
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-cofound-text dark:text-white">Live Wire</h3>
                <button className="text-xs font-bold text-cofound-blue dark:text-cofound-sky uppercase">Filter</button>
             </div>
             
             <Card className="h-full min-h-[400px] !p-0">
                <div className="divide-y divide-cofound-grey dark:divide-white/10">
                  {[1, 2, 3, 4, 5].map((item) => (<div key={item} className="p-5 hover:bg-cofound-bg/50 dark:hover:bg-white/5 transition-colors group cursor-pointer">
                       <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          <span className="text-xs font-mono text-cofound-textLight dark:text-cofound-textDark/50">10:4{item} AM</span>
                       </div>
                       <h4 className="font-medium text-base text-cofound-text dark:text-white group-hover:text-cofound-blue dark:group-hover:text-cofound-sky transition-colors leading-snug">
                         Stripe announces support for crypto payouts in India, expanding freelancer access.
                       </h4>
                       <div className="flex gap-2 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] font-bold text-cofound-textLight dark:text-cofound-textDark/60 bg-cofound-bg dark:bg-white/10 px-2 py-0.5 rounded">#Fintech</span>
                       </div>
                    </div>))}
                </div>
                <div className="p-4 border-t border-cofound-nav dark:border-white/10 text-center">
                   <button className="text-sm font-bold text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-text dark:hover:text-white">View All Updates</button>
                </div>
             </Card>
          </div>
       </div>
    </div>);
};
export default Intel;
