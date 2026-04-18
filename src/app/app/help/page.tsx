"use client";

import { useEffect, useState } from "react";
import { getFAQs } from "@/services/helpService";
import { FAQ } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  ShieldAlert, 
  HeartPulse, 
  DoorOpen, 
  HelpCircle, 
  MessageCircle, 
  Search, 
  LifeBuoy,
  Wifi,
  Ticket,
  Map as MapIcon,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    getFAQs().then(setFaqs);
  }, []);

  const categories = ["All", "event", "venue", "emergency"];

  const filteredFaqs = faqs.filter(f => 
    (activeCategory === "All" || f.category === activeCategory) &&
    (f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex-1 w-full bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
        
        {/* Help Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">Support Nexus</Badge>
            <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">How can we help?</h1>
            <p className="text-muted-foreground text-lg font-medium max-w-2xl leading-relaxed">
              Access real-time assistance, event intelligence, and safety protocols for <span className="text-foreground font-black">TechSummit 2026</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="rounded-2xl border-2 border-border h-14 px-8 font-black hover:bg-muted group">
               <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Live Support
             </Button>
          </div>
        </header>

        {/* Emergency "War Room" Module */}
        <div className="p-10 md:p-16 rounded-[4rem] bg-[#991b1b] border-2 border-white/10 text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(153,27,27,0.4)] group">
           {/* Abstract Emergency Visuals */}
           <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-white/10 blur-[120px] rounded-full group-hover:bg-white/15 transition-colors" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-6 text-center lg:text-left">
                 <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    <div className="p-5 bg-white/15 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl animate-pulse-subtle">
                      <ShieldAlert className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <Badge className="bg-white/20 text-white border-none font-black text-[9px] tracking-[0.2em] uppercase py-1 px-3 mb-3">Live Response Active</Badge>
                      <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter leading-none">Emergency Protocols</h2>
                    </div>
                 </div>
                 <p className="max-w-xl text-xl opacity-80 font-medium leading-relaxed">
                   If you are in immediate danger or witnessing a medical emergency, use the triggers below. Dispatch is automated and near-instant.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-auto shrink-0 pt-4 lg:pt-0">
                 <Button className="bg-white text-[#991b1b] rounded-[1.5rem] h-20 px-10 font-black text-lg hover:bg-slate-50 transition-all shadow-2xl active:scale-95 border-0 group/btn">
                    <HeartPulse className="w-7 h-7 mr-3 group-hover/btn:scale-110 transition-transform" /> First Aid Dispatch
                 </Button>
                 <Link href="/app/navigation" className="w-full">
                    <Button variant="outline" className="w-full h-20 bg-transparent text-white border-white/20 hover:bg-white/10 rounded-[1.5rem] px-10 font-black text-lg backdrop-blur-md transition-all active:scale-95 group/btn">
                       <DoorOpen className="w-7 h-7 mr-3 group-hover/btn:translate-x-1 transition-transform" /> Rapid Evac Map
                    </Button>
                 </Link>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Support Side Panels */}
          <div className="lg:col-span-4 space-y-12">
             
             {/* Quick Support Cards */}
             <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 ml-1">Priority Nexus</h3>
                <Card className="premium-card rounded-[3rem] border-2 border-border shadow-sm group cursor-pointer hover:border-primary/30 transition-all bg-card/60 backdrop-blur-sm">
                   <CardContent className="p-10 space-y-8">
                      <div className="w-20 h-20 rounded-[2rem] bg-primary/5 flex items-center justify-center text-primary shadow-inner border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         <MessageCircle className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black font-headline tracking-tight leading-none">Concierge Live</h4>
                        <p className="text-base font-medium text-muted-foreground leading-relaxed">Direct encrypted line to our event operations team for elite support.</p>
                      </div>
                      <Button className="w-full rounded-2xl h-16 font-black bg-primary text-white shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">Launch Nexus Chat</Button>
                   </CardContent>
                </Card>

                <Card className="premium-card rounded-[3rem] border-2 border-border shadow-sm group cursor-pointer hover:border-secondary/30 transition-all bg-card/60 backdrop-blur-sm">
                   <CardContent className="p-10 space-y-8">
                      <div className="w-20 h-20 rounded-[2rem] bg-secondary/5 flex items-center justify-center text-secondary shadow-inner border border-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                         <LifeBuoy className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-black font-headline tracking-tight leading-none">Platform Ops</h4>
                        <p className="text-base font-medium text-muted-foreground leading-relaxed">Technical assistance for app diagnostics and credential issues.</p>
                      </div>
                      <Button className="w-full rounded-2xl h-16 font-black bg-secondary text-white shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all">Submit Protocol</Button>
                   </CardContent>
                </Card>
             </div>

             {/* Venue Essentials */}
             <div className="p-10 bg-muted/20 border-2 border-dashed border-border/50 rounded-[3rem] space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Logistics Baseline</h3>
                <ul className="space-y-6">
                   {[
                     { i: Wifi, l: "Network ID", v: "TechSummit_2026", c: "text-primary" },
                     { i: Ticket, l: "Badge Pickup", v: "Lobby Wings A/B", c: "text-secondary" },
                     { i: Clock, l: "Event Cycle", v: "08:00 - 20:00", c: "text-foreground" }
                   ].map((item, i) => (
                     <li key={i} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                           <item.i className={`w-5 h-5 ${item.c}`} />
                           <span className="text-sm font-black text-foreground/70 tracking-tight uppercase">{item.l}</span>
                        </div>
                        <span className="text-sm font-black text-foreground">{item.v}</span>
                     </li>
                   ))}
                </ul>
                <div className="pt-4 text-center">
                    <p className="text-[10px] font-black text-muted-foreground uppercase opacity-40">Session Data accurate as of 12:00 PM</p>
                </div>
             </div>

          </div>

          {/* FAQ Main Area */}
          <div className="lg:col-span-8 space-y-12">
             <div className="space-y-8">
                <div className="relative group">
                   <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                   <input 
                     type="text" 
                     placeholder="Search intelligence, logistics, or venue FAQs..." 
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className="w-full pl-20 pr-10 py-7 bg-card border-2 border-border/60 rounded-[2.5rem] text-base font-bold shadow-lg shadow-black/5 outline-none focus:bg-background focus:border-primary/30 transition-all font-sans"
                   />
                </div>

                <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`shrink-0 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                        activeCategory === cat 
                          ? 'bg-foreground text-background shadow-2xl scale-105' 
                          : 'bg-card text-muted-foreground border-2 border-border/40 hover:border-primary/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
             </div>

             <div className="grid grid-cols-1 gap-6">
                {filteredFaqs.length > 0 ? filteredFaqs.map(faq => (
                  <Card key={faq.id} className="premium-card group overflow-hidden bg-card/40 hover:bg-card transition-all">
                    <CardContent className="p-10">
                       <div className="flex justify-between items-start mb-6">
                          <Badge className="bg-primary/10 text-primary border-none font-black text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                             {faq.category}
                          </Badge>
                          <ChevronDown className="w-6 h-6 text-border group-hover:text-primary transition-colors duration-500" />
                       </div>
                       <h3 className="text-2xl font-black font-headline text-foreground leading-tight mb-5 tracking-tight">{faq.question}</h3>
                       <p className="text-muted-foreground text-lg leading-relaxed font-medium pr-8">{faq.answer}</p>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="py-24 text-center space-y-6 bg-muted/10 rounded-[4rem] border-2 border-dashed border-border">
                     <HelpCircle className="w-16 h-16 text-muted-foreground/30 mx-auto" />
                     <div className="space-y-2">
                        <p className="text-2xl font-black text-muted-foreground">Nexus query yielded zero results.</p>
                        <p className="text-sm font-medium text-muted-foreground/60">Try broader terms or contact support directly.</p>
                     </div>
                     <Button variant="outline" className="rounded-2xl border-2 border-primary text-primary font-black uppercase tracking-widest px-8 py-5 h-14" onClick={() => { setSearch(''); setActiveCategory('All'); }}>
                       Reset Atlas Search
                     </Button>
                  </div>
                )}
             </div>

             <div className="pt-16 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-border mt-16 px-4">
                <div className="space-y-3 text-center md:text-left">
                   <p className="text-2xl font-black font-headline tracking-tight">Direct Intelligence Required?</p>
                   <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">Our AI concierge is operating in "High Sensitivity" mode. Launch chat for complex queries.</p>
                </div>
                <div className="relative group">
                   <div className="absolute inset-0 bg-primary rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                   <div className="relative w-24 h-24 rounded-[2.5rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform cursor-pointer">
                      <Sparkles className="w-10 h-10 text-white" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
