
import React from 'react';
import { Card } from '../components/UI';
import { Sparkles } from 'lucide-react';

const Flux: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-center animate-fade-in">
      <Card className="flex flex-col items-center justify-center p-12 min-h-[60vh] border-dashed border-2 border-cofound-blue/20 dark:border-white/10 bg-white/50 dark:bg-white/5">
        <div className="w-20 h-20 bg-gradient-to-br from-cofound-blue to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
           <Sparkles size={40} className="text-white animate-pulse" />
        </div>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cofound-blue to-purple-600 mb-4">
           FLUX Intelligence
        </h2>
        <p className="text-cofound-textLight dark:text-cofound-textDark/60 text-lg max-w-md leading-relaxed">
           Our next-generation AI reasoning engine is warming up. Stay tuned for instant market analysis and automated deal flow.
        </p>
        <div className="mt-8 px-4 py-2 bg-blue-50 dark:bg-white/10 text-cofound-blue dark:text-white rounded-full text-sm font-bold tracking-wide border border-blue-100 dark:border-white/10">
           COMING SOON
        </div>
      </Card>
    </div>
  );
};

export default Flux;
