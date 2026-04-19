"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Sparkles, Send, ArrowRight, User, Bot, Globe, ShieldAlert, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Stellar Nexus active. I am your AI event concierge. How can I optimize your summits experience?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setConversation(prev => [...prev, { role: 'user', text: userMessage }]);
    setMessage("");
    setIsLoading(true);

    if (analytics) logEvent(analytics, "assistant_query", { query: userMessage });

    try {
      const chatHistory = conversation.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model' as const,
        parts: [{ text: msg.text }]
      }));

      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: chatHistory.slice(-6) }),
      });

      const data = await response.json();
      
      setConversation(prev => [...prev, { 
        role: 'ai', 
        text: data.reply || "I'm having trouble connecting to the Nexus core. Please try again later." 
      }]);
    } catch (error) {
      console.error("Assistant Error:", error);
      setConversation(prev => [...prev, { 
        role: 'ai', 
        text: "Neural link interrupted. Please check your network connection." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const prompts = [
    "Next AI session?",
    "Where is Main Stage?",
    "Wi-Fi details",
    "Emergency exits"
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] pointer-events-none flex flex-col items-end">
      {isOpen && (
        <div className="pointer-events-auto mb-4 animate-in slide-in-from-bottom-5 duration-300">
          <Card className="w-[calc(100vw-2rem)] sm:w-[440px] h-[70vh] sm:h-[600px] flex flex-col shadow-[0_30px_90px_-20px_rgba(0,0,0,0.4)] overflow-hidden rounded-[2.5rem] border-2 border-border/40 bg-background/95 backdrop-blur-3xl lg:shadow-elite">
            {/* Premium Glassmorphic Header */}
            <div className="px-8 py-6 border-b bg-gradient-to-br from-primary to-indigo-900 text-white flex justify-between items-center shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl ai-glow">
                  <Sparkles className="w-6 h-6 text-white shadow-white" />
                </div>
                <div>
                  <h3 className="font-black font-headline text-lg leading-none tracking-tight">Stellar Nexus</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60">Nexus v4.0 Active</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 transition-all text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Conversation Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
               {conversation.map((msg, i) => (
                <div key={i} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center border-2 transition-transform hover:scale-110 shadow-sm ${
                    msg.role === 'user' ? 'bg-background border-border text-foreground' : 'bg-primary text-white border-transparent'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 text-sm font-semibold leading-relaxed shadow-sm border transition-all ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white border-indigo-400/20 rounded-tr-[0.5rem] shadow-primary/10' 
                      : 'bg-card text-foreground border-border/50 rounded-tl-[0.5rem] shadow-black/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary text-white border-transparent shrink-0 flex items-center justify-center border-2 animate-pulse">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-card text-foreground border-border/50 rounded-[1.5rem] rounded-tl-[0.5rem] px-5 py-4 text-sm font-semibold shadow-black/5 border flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Analyzing Nexus nodes...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input & Quick Actions Area */}
            <div className="p-8 pt-4 bg-card/50 border-t border-border/40 shrink-0 space-y-6">
              <div className="flex gap-2 w-full overflow-x-auto pb-1 scrollbar-none">
                {prompts.map((p, i) => (
                  <button 
                    key={i}
                    onClick={() => setMessage(p)}
                    className="shrink-0 px-4 py-2 rounded-xl border border-border/60 bg-background text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all shadow-sm active:scale-95"
                  >
                    {p}
                  </button>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="relative flex items-center group">
                <div className="absolute left-5 pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Query the Nexus..."
                  className="w-full pl-12 pr-16 h-16 bg-muted/40 border-2 border-transparent focus:border-primary/30 focus:bg-background rounded-2xl text-sm font-bold transition-all outline-none shadow-inner"
                />
                 <button 
                  type="submit"
                  disabled={!message.trim() || isLoading}
                  className="absolute right-2.5 w-11 h-11 rounded-xl bg-primary text-white shadow-2xl shadow-primary/30 disabled:opacity-30 disabled:shadow-none hover:bg-indigo-700 transition-all active:scale-90 flex items-center justify-center p-0"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </Card>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white shadow-[0_20px_50px_rgba(79,70,229,0.4)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group ai-glow ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <X className="w-8 h-8 md:w-9 md:h-9" />
        ) : (
          <>
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
            <Sparkles className="w-8 h-8 md:w-9 md:h-9 group-hover:rotate-12 transition-transform relative z-10" />
          </>
        )}
      </button>
    </div>
  );
}
