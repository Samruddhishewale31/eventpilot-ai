"use client";

import { useEffect, useState } from "react";
import { getNetworkingRecommendations } from "@/services/networkingService";
import { NetworkMatch, Attendee } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Mail, 
  Check, 
  Target, 
  Clock, 
  Star, 
  Sparkles, 
  ChevronRight, 
  MessageCircle,
  Zap,
  UserPlus
} from "lucide-react";
import { useStore } from "@/store/useStore";

export default function NetworkingPage() {
  const [matches, setMatches] = useState<NetworkMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [sentRequests, setSentRequests] = useState<string[]>([]);

  const user = useStore(state => state.user);

  useEffect(() => {
    getNetworkingRecommendations().then(data => {
      setMatches(data);
      setLoading(false);
    });
  }, []);

  const handleConnect = (id: string) => {
    setSentRequests(prev => [...prev, id]);
  };

  return (
    <div className="flex-1 w-full bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
        
        {/* Premium Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border">
          <div className="space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">Nexus Link v1.0</Badge>
            <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Smart Networking</h1>
            <p className="text-muted-foreground text-lg font-medium max-w-2xl leading-relaxed">
              Our <span className="text-primary font-bold">Stellar Nexus</span> AI analyzed 15,000+ profiles to find your top {matches.length} strategic connections.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3 mr-4">
              {[1, 2, 3, 4, 5].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-4 border-background bg-muted overflow-hidden">
                   <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="user" className="w-full h-full object-cover" />
                 </div>
              ))}
            </div>
            <p className="text-sm font-black text-foreground">500+ Active now</p>
          </div>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 animate-pulse bg-muted rounded-[3rem]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {matches.map(({ id, attendee, matchScore, sharedInterests, reason }) => {
              const isSent = sentRequests.includes(id);

              return (
                <div key={id} className="premium-card group flex flex-col h-full bg-card overflow-hidden">
                  
                  {/* Card Header area */}
                  <div className="p-10 pb-6 relative">
                    {/* Background visual accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary/10 transition-colors" />
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="relative group/avatar">
                        <div className="w-24 h-24 rounded-[2rem] bg-muted border-[3px] border-white dark:border-border overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                          <img 
                            src={`https://ui-avatars.com/api/?name=${attendee.name.replace(' ', '+')}&background=random&color=fff&size=256`} 
                            alt={attendee.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-card ai-glow" title="Online now" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="bg-primary/10 text-primary border-none font-black text-[10px] tracking-widest px-3 py-1.5 rounded-full shadow-sm animate-pulse-subtle">
                          {matchScore}% NESS MATCH
                        </div>
                        <div className="flex items-center gap-1 text-[9px] font-black text-muted-foreground uppercase tracking-widest leading-none mr-1">
                          <Clock className="w-3 h-3" /> Active Now
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 relative z-10">
                      <h3 className="text-3xl font-black font-headline text-foreground leading-none tracking-tight group-hover:text-primary transition-colors">{attendee.name}</h3>
                      <p className="text-sm font-bold text-muted-foreground mt-2">{attendee.role} @ <span className="text-foreground">{attendee.company}</span></p>
                    </div>
                  </div>

                  {/* Match Intelligence */}
                  <div className="px-10 py-6 space-y-8 flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                        <Zap className="w-3.5 h-3.5" /> High-Sync Interests
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {sharedInterests.map(int => (
                          <div key={int} className="border-2 border-border text-foreground/80 font-black text-[9px] uppercase tracking-widest py-2 px-4 rounded-xl bg-background/50 hover:border-primary/30 transition-all cursor-default">
                            {int}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] rounded-[2rem] border-2 border-primary/5 relative overflow-hidden group/intel shadow-inner">
                       <Sparkles className="absolute -right-3 -top-3 w-16 h-16 text-primary opacity-[0.05] rotate-12 group-hover/intel:scale-125 transition-transform" />
                       <div className="text-[9px] font-black text-primary/40 uppercase tracking-widest mb-3">AI Reasoning</div>
                       <p className="text-sm font-semibold text-foreground/70 leading-relaxed pr-2">
                         "{reason}"
                       </p>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.15em] pt-2">
                      <Clock className="w-4 h-4 text-primary opacity-50" /> Suggested Slot: 14:00 - 14:30
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="p-8 pt-0 mt-auto">
                    <div className="flex gap-4">
                      <Button 
                        className={`flex-1 rounded-[1.5rem] h-16 text-xs font-black uppercase tracking-[0.15em] transition-all active:scale-95 shadow-2xl ${
                          isSent 
                            ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20' 
                            : 'bg-primary hover:bg-indigo-700 text-white shadow-primary/30 hover:-translate-y-1'
                        }`}
                        onClick={() => handleConnect(id)}
                        disabled={isSent}
                      >
                        {isSent ? <><Check className="w-4 h-4 mr-2" /> Request Sent</> : <><UserPlus className="w-5 h-5 mr-3" /> Connect Nexus</>}
                      </Button>
                      <Button variant="outline" className="rounded-[1.5rem] p-0 h-16 w-16 border-2 border-border hover:bg-muted hover:text-primary transition-all group/msg shadow-lg">
                        <MessageCircle className="w-6 h-6 group-hover/msg:rotate-12 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Global Stats Visual */}
        <section className="mt-12 p-8 md:p-12 rounded-[3rem] bg-card border-2 border-border flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10" />
           <div className="text-center md:text-left space-y-4 relative z-10">
              <h2 className="text-3xl font-black font-headline tracking-tighter">Expand your nexus beyond AI.</h2>
              <p className="text-muted-foreground text-lg max-w-sm font-medium">
                Adjust your profile settings to discover attendees in specialized tracks like <span className="text-foreground font-black">Sustainability</span> and <span className="text-foreground font-black">Ethics</span>.
              </p>
              <Button variant="outline" className="rounded-2xl border-2 border-primary text-primary font-black px-8 py-6 hover:bg-primary/5 transition-all">
                Update Networking Profile
              </Button>
           </div>
           <div className="flex flex-wrap justify-center gap-6 relative z-10">
             {[
               { l: "Total Connections", v: "15.4K" },
               { l: "Daily Matches", v: "128" },
               { l: "Conversations", v: "2.5K" }
             ].map(stat => (
               <div key={stat.l} className="p-6 bg-background rounded-3xl border border-border shadow-sm min-w-[140px] text-center">
                 <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.l}</div>
                 <div className="text-2xl font-black text-primary">{stat.v}</div>
               </div>
             ))}
           </div>
        </section>

      </div>
    </div>
  );
}
