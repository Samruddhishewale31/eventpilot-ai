"use client";

import { useEffect, useState } from "react";
import { getSessions } from "@/services/sessionService";
import { getAnnouncements } from "@/services/announcementService";
import { getNetworkingRecommendations } from "@/services/networkingService";
import { Session, Announcement, NetworkMatch } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Sparkles, 
  Navigation2, 
  ArrowRight, 
  Search, 
  Bell, 
  Settings, 
  Compass as ExploreIcon, 
  Users as NetworkingIcon, 
  Megaphone as AnnounceIcon,
  Network as HubIcon,
  Calendar as CalendarIcon,
  Map as MapIcon,
  Info as InfoIcon,
  BookmarkPlus,
  MessageSquare,
  Zap,
  ChevronRight
} from "lucide-react";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { getRecommendedSessions, sessionUtils } from "@/utils/sessionUtils";
import { useMemo } from "react";

export default function DashboardPage() {
  const [allSessions, setAllSessions] = useState<Session[]>([]);
  const [allAnnouncements, setAllAnnouncements] = useState<Announcement[]>([]);
  const [allMatches, setAllMatches] = useState<NetworkMatch[]>([]);
  const [loading, setLoading] = useState(true);

  const user = useStore(state => state.user);

  useEffect(() => {
    // Fetch all required data in parallel for efficiency
    Promise.all([
      getSessions(),
      getAnnouncements(),
      getNetworkingRecommendations()
    ]).then(([sessionsData, updatesData, networkData]) => {
      setAllSessions(sessionsData);
      setAllAnnouncements(updatesData);
      setAllMatches(networkData);
      setLoading(false);
    });
  }, []);

  // Memoize recommendations to avoid recalculation on unrelated re-renders
  const recommendedSessions = useMemo(() => 
    getRecommendedSessions(allSessions, user)
  , [allSessions, user]);

  const updates = useMemo(() => 
    allAnnouncements.slice(0, 2)
  , [allAnnouncements]);

  const matches = useMemo(() => 
    allMatches.slice(0, 3)
  , [allMatches]);

  return (
    <div className="flex-1 w-full bg-background min-h-screen">
      <main className="pt-6 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Stitch-Inspired Elite Hero */}
        <header className="relative overflow-hidden px-10 py-16 md:px-16 md:py-24 rounded-[3.5rem] bg-[#0a0044] text-white flex flex-col lg:flex-row justify-between items-center gap-12 shadow-[0_40px_100px_-20px_rgba(10,0,68,0.3)]">
          {/* Abstract Premium Visuals */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[120%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] rounded-full bg-secondary/10 blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          </div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/10 text-blue-200 border-white/20 backdrop-blur-md text-[10px] font-black tracking-[0.2em] uppercase py-1.5 px-4 mb-2">Protocol Active: Day 01</Badge>
              <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                Focus, {user?.name.split(' ')[0] || 'Alexander'}. <br/>
                <span className="text-blue-300/80">Everything is ready.</span>
              </h1>
              <p className="text-xl text-blue-100/60 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Nexus has optimized your journey. {recommendedSessions.length} priority sessions and 3 elite networking matches are pinned to your intelligence dashboard.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Link href="/app/sessions">
                <Button className="bg-white text-primary h-16 px-10 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-2xl shadow-black/40 active:scale-95 group">
                  <ExploreIcon className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" /> Explore Catalog
                </Button>
              </Link>
              <Link href="/app/agenda">
                <Button variant="ghost" className="bg-white/5 border-2 border-white/10 backdrop-blur-md text-white h-16 px-10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all active:scale-95">
                  <CalendarIcon className="w-6 h-6 mr-2 opacity-50" /> Live Agenda
                </Button>
              </Link>
            </div>
          </div>

          {/* Signature Visual Element */}
          <div className="relative w-full lg:w-1/3 aspect-square max-w-[320px] hidden lg:block group">
            <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative w-full h-full rounded-[3.5rem] bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rotate-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
               <Zap className="w-24 h-24 text-white/40 drop-shadow-2xl group-hover:scale-110 group-hover:text-white transition-all duration-500" />
            </div>
            {/* Floaties */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 backdrop-blur-xl rounded-full border border-white/10 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-primary/20 backdrop-blur-xl rounded-2xl border border-white/10 animate-pulse" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Recommended Sessions */}
            <div>
              <div className="flex items-center justify-between mb-6 px-1">
                <h2 className="font-headline text-2xl font-black text-foreground">Recommended for You</h2>
                <Link href="/app/sessions" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedSessions.map((session) => (
                  <div key={session.id} className="premium-card group overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative overflow-hidden">
                      {/* Stylized background representing the track */}
                      <div className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105 ${
                        session.track === 'Artificial Intelligence' ? 'from-indigo-500 to-purple-600' :
                        session.track === 'Engineering' ? 'from-blue-500 to-cyan-500' :
                        'from-slate-500 to-slate-700'
                      }`} />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md text-foreground dark:text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {session.status === 'live' ? 'Live Now' : 'Recommended'}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[10px] font-black text-primary tracking-widest uppercase mb-2 block">{session.track} • {sessionUtils.getStartTime(session)}</span>
                      <h3 className="font-headline text-xl font-bold mb-3 leading-tight text-foreground group-hover:text-primary transition-colors">{session.title}</h3>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">{session.description}</p>
                      
                      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center overflow-hidden">
                              <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="attendee" className="w-full h-full object-cover" />
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-card bg-primary-foreground flex items-center justify-center text-[10px] font-bold text-primary">+12</div>
                        </div>
                        <button className="text-primary p-2 hover:bg-primary/10 rounded-full transition-colors">
                          <BookmarkPlus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcement Feed */}
            <div>
              <div className="flex items-center justify-between mb-6 px-1">
                <h2 className="font-headline text-2xl font-black text-foreground">Live Announcement Feed</h2>
              </div>
              <div className="space-y-4">
                {updates.map((up) => (
                  <div key={up.id} className="flex gap-6 p-6 bg-card border border-border rounded-3xl group hover:border-primary/30 transition-all shadow-sm">
                    <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {up.type === 'room_change' ? <MapIcon className="w-6 h-6" /> : <AnnounceIcon className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-foreground text-lg">{up.title}</h4>
                        <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Just now</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{up.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Agenda Widget */}
            <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
              <h2 className="font-headline text-xl font-black mb-6 flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-primary" /> Your Agenda
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border"></div>
                
                {recommendedSessions.concat(recommendedSessions).slice(0, 3).map((s, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-card shadow-lg ${i === 0 ? 'bg-secondary animate-pulse scale-125' : 'bg-border'}`}></div>
                    <span className="text-[10px] font-black text-muted-foreground tracking-widest uppercase mb-1 block">
                      {i === 0 ? 'Ongoing' : 'Coming Up'} • {sessionUtils.getStartTime(s)}
                    </span>
                    <h4 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{s.title}</h4>
                    <p className="text-xs font-medium text-muted-foreground">{sessionUtils.getRoomName(s)}</p>
                  </div>
                ))}
              </div>
              <Link href="/app/agenda">
                <Button variant="outline" className="w-full mt-10 py-6 rounded-2xl border-2 border-border text-sm font-black hover:bg-muted hover:text-primary transition-all">
                  Open Full Schedule
                </Button>
              </Link>
            </div>

            {/* Networking Widget */}
            <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
              <h2 className="font-headline text-xl font-black mb-6 flex items-center gap-3">
                <NetworkingIcon className="w-5 h-5 text-primary" /> Networking
              </h2>
              <div className="space-y-6">
                {matches.map((m) => (
                  <div key={m.id} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                      <img src={m.attendee.id.includes('me') ? 'https://ui-avatars.com/api/?name=Alexander+Dev&background=indigo&color=fff' : `https://ui-avatars.com/api/?name=${m.attendee.name}&background=random`} alt={m.attendee.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-foreground leading-none mb-1 group-hover:text-primary transition-colors">{m.attendee.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-tight">{m.attendee.role} @ {m.attendee.company}</p>
                    </div>
                    <button className="text-primary bg-primary/5 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-primary/5 rounded-[1.5rem] border border-primary/10">
                <p className="text-xs text-center text-primary font-bold leading-relaxed">
                  <Sparkles className="w-3 h-3 inline mr-1 mb-1" /> Based on your AI interests, we suggest meeting <span className="underline decoration-2">Sarah Chen</span> today.
                </p>
              </div>
            </div>

          </aside>
        </section>
      </main>
      
      {/* Footer is handled globally or as part of the app layout in some SaaS patterns */}
    </div>
  );
}
