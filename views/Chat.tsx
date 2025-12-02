
import React, { useState, useEffect, useRef } from 'react';
import { Plus, Search, Phone, Video, MoreHorizontal, Info, Mic, Send, Paperclip } from 'lucide-react';
import { Card, Avatar, Button } from '../components/UI';
import { CHAT_THREADS, MOCK_MESSAGES } from '../data';
import { ChatThread, Message } from '../types';

const Chat: React.FC = () => {
  const [selectedThread, setSelectedThread] = useState<ChatThread>(CHAT_THREADS[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages when thread changes
  useEffect(() => {
    const threadMessages = MOCK_MESSAGES[selectedThread.id] || [];
    setMessages(threadMessages);
  }, [selectedThread]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [...prev, { 
      id: prev.length + 100, 
      sender: "me", 
      text: inputText, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    setInputText("");
  };

  return (
    <Card className="h-[calc(100vh-120px)] flex flex-row !p-0 overflow-hidden shadow-lg border-cofound-nav dark:border-white/10">
      
      {/* 1. Threads List (Left) */}
      <div className="w-80 border-r border-cofound-nav dark:border-white/10 flex flex-col bg-white dark:bg-cofound-darkCard hidden md:flex">
        <div className="p-4 border-b border-cofound-nav dark:border-white/10 flex justify-between items-center bg-cofound-bg/30 dark:bg-white/5">
          <h2 className="font-bold text-lg text-cofound-text dark:text-white">Messages</h2>
          <button className="p-1.5 hover:bg-cofound-grey dark:hover:bg-white/10 rounded-full transition-colors text-cofound-textLight dark:text-cofound-textDark/60"><MoreHorizontal size={18}/></button>
        </div>
        <div className="p-3">
           <div className="relative">
              <Search className="absolute left-3 top-2.5 text-cofound-textLight dark:text-cofound-textDark/50" size={14} />
              <input type="text" placeholder="Search chats..." className="w-full bg-cofound-bg dark:bg-white/5 pl-9 pr-3 py-2 rounded-lg text-sm outline-none focus:ring-1 focus:ring-cofound-blue dark:text-white transition-all" />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
           {CHAT_THREADS.map(thread => (
             <div 
                key={thread.id} 
                onClick={() => setSelectedThread(thread)}
                className={`p-4 cursor-pointer transition-colors border-l-2 ${selectedThread.id === thread.id ? 'bg-blue-50/40 dark:bg-blue-500/10 border-cofound-blue' : 'border-transparent hover:bg-cofound-bg dark:hover:bg-white/5'}`}
             >
                <div className="flex gap-3">
                   <div className="relative">
                      <Avatar initials={thread.avatar} size="md" />
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white dark:border-cofound-darkCard rounded-full ${thread.status === 'online' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                         <h4 className={`text-sm font-bold truncate ${selectedThread.id === thread.id ? 'text-cofound-text dark:text-white' : 'text-cofound-text/80 dark:text-white/70'}`}>{thread.user}</h4>
                         <span className="text-[10px] text-cofound-textLight dark:text-cofound-textDark/50 font-mono">{thread.time}</span>
                      </div>
                      <p className={`text-xs truncate ${thread.unread > 0 ? 'font-bold text-cofound-text dark:text-white' : 'text-cofound-textLight dark:text-cofound-textDark/60'}`}>
                        {thread.lastMsg}
                      </p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* 2. Chat Area (Right) */}
      <div className="flex-1 flex flex-col bg-cofound-bg/10 dark:bg-black/20 relative">
        
        {/* Header */}
        <div className="h-16 border-b border-cofound-nav dark:border-white/10 flex items-center justify-between px-6 bg-white dark:bg-cofound-darkCard shrink-0">
           <div className="flex items-center gap-3">
              <Avatar initials={selectedThread.avatar} size="sm" />
              <div>
                 <h3 className="font-bold text-sm text-cofound-text dark:text-white">{selectedThread.user}</h3>
                 <p className="text-xs text-cofound-textLight dark:text-cofound-textDark/60 flex items-center gap-1">
                    {selectedThread.role}
                 </p>
              </div>
           </div>
           <div className="flex items-center gap-1 text-cofound-textLight dark:text-cofound-textDark/60">
              <button className="p-2 hover:bg-cofound-bg dark:hover:bg-white/5 rounded-full hover:text-cofound-blue transition-colors"><Phone size={18} /></button>
              <button className="p-2 hover:bg-cofound-bg dark:hover:bg-white/5 rounded-full hover:text-cofound-blue transition-colors"><Video size={18} /></button>
              <div className="w-[1px] h-6 bg-cofound-grey dark:bg-white/10 mx-1"></div>
              <button className="p-2 hover:bg-cofound-bg dark:hover:bg-white/5 rounded-full hover:text-cofound-blue transition-colors"><Info size={18} /></button>
           </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
           {messages.map(msg => (
             <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[70%] ${msg.sender === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
                   <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm relative group ${
                      msg.sender === 'me' 
                        ? 'bg-cofound-blue text-white rounded-br-none' 
                        : 'bg-white dark:bg-cofound-darkCard border border-cofound-nav dark:border-white/10 text-cofound-text dark:text-cofound-textDark rounded-bl-none'
                   }`}>
                      {msg.text}
                   </div>
                   <span className="text-[10px] text-cofound-textLight dark:text-cofound-textDark/40 mt-1 px-1 opacity-70">{msg.time}</span>
                </div>
             </div>
           ))}
           <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white dark:bg-cofound-darkCard border-t border-cofound-nav dark:border-white/10 shrink-0">
           <div className="flex items-end gap-2">
              <button className="p-2.5 text-cofound-textLight dark:text-cofound-textDark/60 hover:text-cofound-blue hover:bg-blue-50 dark:hover:bg-white/5 rounded-full transition-colors mb-0.5"><Plus size={20} /></button>
              <div className="flex-1 bg-cofound-bg dark:bg-white/5 rounded-2xl p-2 flex items-center gap-2 border border-transparent focus-within:border-cofound-blue/30 focus-within:bg-white dark:focus-within:bg-black/20 transition-all">
                 <input 
                   type="text"
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), sendMessage())}
                   placeholder="Type a message..." 
                   className="flex-1 bg-transparent border-none outline-none text-sm text-cofound-text dark:text-white placeholder:text-cofound-textLight/70 dark:placeholder:text-white/30 px-2"
                 />
                 <button className="p-1.5 text-cofound-textLight dark:text-cofound-textDark/50 hover:text-cofound-blue transition-colors"><Paperclip size={18} /></button>
                 <button className="p-1.5 text-cofound-textLight dark:text-cofound-textDark/50 hover:text-cofound-blue transition-colors"><Mic size={18} /></button>
              </div>
              <Button 
                onClick={sendMessage}
                size="md"
                variant={inputText.trim() ? "primary" : "secondary"}
                className={`!p-2.5 rounded-full mb-0.5 transition-all`}
                disabled={!inputText.trim()}
              >
                <Send size={18} className={inputText.trim() ? "ml-0.5" : ""} />
              </Button>
           </div>
        </div>
      </div>
    </Card>
  );
};

export default Chat;
