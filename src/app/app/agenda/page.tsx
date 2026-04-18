"use client";

import { useEffect, useState } from "react";
import { getSessions } from "@/services/sessionService";
import { Session } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  MapPin, 
  AlertTriangle, 
  Download, 
  Trash2, 
  Bell, 
  Calendar as CalendarIcon, 
  ArrowRight,
  Share2,
  BookmarkX,
  Plus,
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { detectConflicts } from "@/utils/agendaUtils";
import { downloadAllIcsFile, downloadIcsFile } from "@/utils/calendarUtils";
import Link from "next/link";

export default function AgendaPage() {
  const [allSessions, setAllSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  
  const savedSessionIds = useStore(state => state.savedSessionIds);
  const toggleSessionSave = useStore(state => state.toggleSessionSave);

  useEffect(() => {
    getSessions().then(data => {
      setAllSessions(data);
      setLoading(false);
    });
  }, []);

  const savedSessions = allSessions
    .filter(s => savedSessionIds.includes(s.id))
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

  const conflictingIds = detectConflicts(savedSessions);

  return (
    <div className="flex-1 w-full bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-12">
        
        {/* Premium Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">May 15-16, 2026</Badge>
            <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Your Agenda</h1>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Managing {savedSessions.length} sessions across {conflictingIds.length > 0 ? 'conflicting' : 'clear'} tracks.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="rounded-2xl border-2 border-border h-14 px-6 font-black hover:bg-muted"
            >
              <Bell className="w-5 h-5 mr-3" /> Notifications
            </Button>
            <Button 
              className="rounded-2xl shadow-xl shadow-primary/20 h-14 px-8 font-black bg-primary text-white hover:bg-indigo-700 active:scale-95 transition-all"
              onClick={() => downloadAllIcsFile(savedSessions)}
              disabled={savedSessions.length === 0}
            >
              <Download className="w-5 h-5 mr-3" /> Export to Calendar
            </Button>
          </div>
        </header>

        {loading ? (
          <div className="space-y-8 pl-10">
            {[1,2,3].map(i => (
              <div key={i} className="h-44 animate-pulse bg-muted rounded-[2rem]" />
            ))}
          </div>
        ) : savedSessions.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center space-y-8 bg-card border-2 border-dashed border-border rounded-[3rem]">
            <div className="w-24 h-24 rounded-3xl bg-muted flex items-center justify-center text-muted-foreground">
              <CalendarIcon className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-3xl font-black">Your agenda is a blank canvas.</h3>
              <p className="text-muted-foreground text-lg font-medium max-w-sm mx-auto">Discover the sessions that will define your experience and bookmark them here.</p>
            </div>
            <Link href="/app/sessions">
              <Button className="rounded-2xl py-8 px-10 shadow-2xl shadow-primary/20 font-black text-lg bg-primary text-white hover:bg-indigo-700 active:scale-95 transition-all">
                Explore intelligence <Plus className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="relative border-l-[3px] border-muted ml-6 md:ml-10 pb-20 space-y-24">
            {/* Active Timeline Overlay (Pure Visual) */}
            <div className="absolute left-[-3px] top-0 w-[3px] h-[30%] bg-gradient-to-b from-primary to-transparent" />

            {savedSessions.map((session, index) => {
              const isConflict = conflictingIds.includes(session.id);
              const startTime = new Date(session.startTime);
              const hour = startTime.getHours() % 12 || 12;
              const minutes = startTime.getMinutes().toString().padStart(2, '0');
              const period = startTime.getHours() >= 12 ? 'PM' : 'AM';

              return (
                <div key={session.id} className="relative pl-12 md:pl-24 group">
                  
                  {/* Premium Timeline Node */}
                  <div className={`absolute -left-[18px] top-8 w-8 h-8 rounded-full border-[5px] border-background shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-10 transition-all duration-500 group-hover:scale-125 flex items-center justify-center
                    ${isConflict ? 'bg-destructive ai-glow' : 'bg-primary'}`}>
                    {isConflict && <AlertTriangle className="w-3 h-3 text-white" />}
                  </div>
                  
                  {/* Floating Time Flag for Mobile */}
                  <div className="md:hidden mb-4 inline-flex items-center gap-2 bg-muted/50 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    <Clock className="w-3 h-3" /> {hour}:{minutes} {period}
                  </div>

                  {/* Session Card (Stitch Style) */}
                  <div className={`premium-card group/card overflow-visible
                    ${isConflict ? 'border-destructive/40 bg-destructive/[0.02] hover:border-destructive' : 'hover:border-primary/40'}`}>
                    
                    {isConflict && (
                      <div className="bg-gradient-to-r from-destructive/20 to-transparent px-8 py-4 flex items-center justify-between gap-3 text-destructive border-b border-destructive/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 animate-pulse" /> 
                          <span className="text-sm font-black uppercase tracking-tight">Intelligence Alert: Temporal Conflict Detected</span>
                        </div>
                        <Badge variant="outline" className="border-destructive/30 text-destructive text-[9px] font-black uppercase">Switch Track</Badge>
                      </div>
                    )}
                    
                    <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-14">
                      
                      {/* Premium Time Column */}
                      <div className="hidden md:flex w-32 shrink-0 border-r border-border/50 pr-10 flex-col justify-center items-start text-left">
                        <div className="space-y-1">
                          <div className="font-headline font-black text-5xl text-foreground tracking-tighter">{hour}<span className="text-xl opacity-30">:{minutes}</span></div>
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-1">{period}</div>
                        </div>
                        <div className="mt-8 flex flex-col gap-3">
                           <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground/60 uppercase">
                             <Clock className="w-3 h-3" /> 60m
                           </div>
                           <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500/80 uppercase">
                             <CheckCircle2 className="w-3 h-3" /> Confirmed
                           </div>
                        </div>
                      </div>

                      {/* Major Content Area */}
                      <div className="flex-1 space-y-8">
                        <div className="flex justify-between items-start gap-8">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{session.track}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-border" />
                              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">{session.roomId.replace('room-', 'Wing ')}</span>
                            </div>
                            <h3 className="font-headline text-3xl md:text-4xl font-black leading-tight text-foreground group-hover/card:text-primary transition-colors tracking-tight">{session.title}</h3>
                          </div>
                          
                          <div className="flex gap-3 shrink-0">
                            {[
                              { icon: <Download className="w-5 h-5" />, label: "Add to Calendar", onClick: () => downloadIcsFile(session) },
                              { icon: <Share2 className="w-5 h-5" />, label: "Share Session" },
                              { icon: <BookmarkX className="w-5 h-5" />, label: "Remove", onClick: () => toggleSessionSave(session.id), danger: true }
                            ].map((action, i) => (
                              <button 
                                key={i}
                                onClick={action.onClick}
                                className={`p-4 rounded-2xl border border-transparent transition-all flex items-center justify-center
                                  ${action.danger ? 'text-muted-foreground hover:text-destructive hover:bg-destructive/5 hover:border-destructive/20' : 'text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/20 hover:shadow-lg'}`}
                                title={action.label}
                              >
                                {action.icon}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl font-medium">
                          {session.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/50">
                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3 font-black text-sm text-foreground/80">
                              <MapPin className="w-5 h-5 text-primary" />
                              {session.roomId.replace('room-', 'Sector ')}
                            </div>
                            
                            <div className="flex items-center gap-3">
                               <div className="flex -space-x-3">
                                 {[1,2,3].map(i => (
                                   <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-muted overflow-hidden">
                                     <img src={`https://ui-avatars.com/api/?name=Attendee+${i}&background=random`} className="w-full h-full object-cover" />
                                   </div>
                                 ))}
                               </div>
                               <span className="text-xs font-black text-muted-foreground/60 tracking-tight uppercase">Attendee Pool</span>
                            </div>
                          </div>

                          <Button variant="ghost" className="rounded-2xl h-12 px-6 font-black text-xs uppercase tracking-widest text-primary hover:bg-primary/5 hover:text-indigo-700">
                             Navigate to Room <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>

                    </div>

                    {/* Conflict Resolution Footer */}
                    {isConflict && (
                      <div className="bg-muted/30 p-8 border-t border-border/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black/50 border border-border flex items-center justify-center shadow-sm">
                              <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-foreground leading-none">AI Resolution Hint</h4>
                              <p className="text-xs text-muted-foreground mt-1">This session is recorded. We suggest attending "The Future of AI" instead.</p>
                            </div>
                          </div>
                          <Link href="/app/sessions">
                            <Button className="rounded-xl h-12 px-6 bg-foreground text-background font-black text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all">
                              See Alternatives
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
