"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { getSessions } from "@/services/sessionService";
import { Session, Speaker, Room } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Clock, 
  BookmarkPlus, 
  BookmarkCheck,
  SlidersHorizontal,
  ChevronRight,
  FilterX
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { mockSpeakers, mockRooms } from "@/data/mock";
import { SessionDetailDrawer } from "@/components/sessions/SessionDetailDrawer";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterTrack, setFilterTrack] = useState<string>("All");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  const savedSessionIds = useStore(state => state.savedSessionIds);
  const toggleSessionSave = useStore(state => state.toggleSessionSave);

  useEffect(() => {
    getSessions().then(data => {
      setSessions(data);
      setLoading(false);
    });
  }, []);

  const tracks = ["All", "Artificial Intelligence", "Engineering", "Design", "Product", "Networking", "Sustainability", "Founders"];

  const filteredSessions = useMemo(() => {
    return sessions.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || 
                            s.track.toLowerCase().includes(search.toLowerCase()) ||
                            s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTrack = filterTrack === "All" || s.track === filterTrack;
      return matchesSearch && matchesTrack;
    });
  }, [sessions, search, filterTrack]);

  const selectedSession = useMemo(() => 
    sessions.find(s => s.id === selectedSessionId) || null
  , [sessions, selectedSessionId]);

  const selectedSpeaker = useMemo(() => 
    selectedSession ? mockSpeakers.find(sp => sp.id === selectedSession.speakerId) || null : null
  , [selectedSession]);

  const selectedRoom = useMemo(() => 
    selectedSession ? mockRooms.find(rm => rm.id === selectedSession.roomId) || null : null
  , [selectedSession]);

  return (
    <div className="flex-1 w-full bg-background min-h-screen selections:bg-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10">
        
        {/* Premium Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-border">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">Catalog 2026</Badge>
            <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Intelligence Catalog</h1>
            <p className="text-muted-foreground text-lg font-medium max-w-2xl leading-relaxed">
              Curate your unique experience from 30+ elite sessions, keynotes, and immersive workshops.
            </p>
          </div>
        </header>

        {/* Search & Filter Ecosystem */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search intelligence topics, speakers, or tags..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-card border-2 border-transparent focus:border-primary/20 rounded-3xl text-sm font-bold shadow-sm outline-none focus:bg-background transition-all"
              />
            </div>
            <Button variant="outline" className="h-[64px] px-8 rounded-3xl border-2 border-border text-sm font-black hover:bg-muted hidden lg:flex">
              <SlidersHorizontal className="w-5 h-5 mr-3" /> Advanced Filtering
            </Button>
          </div>
          
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
            {tracks.map(track => (
              <button
                key={track}
                onClick={() => setFilterTrack(track)}
                className={`shrink-0 px-6 py-3 rounded-2xl text-xs font-black tracking-wider uppercase transition-all ${
                  filterTrack === track 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                    : 'bg-card text-muted-foreground border-2 border-border/50 hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-80 animate-pulse bg-muted rounded-3xl" />
            ))}
          </div>
        ) : filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSessions.map(session => {
              const isSaved = savedSessionIds.includes(session.id);
              const trackSpeaker = mockSpeakers.find(s => s.id === session.speakerId);

              return (
                <div 
                  key={session.id} 
                  className="premium-card flex flex-col cursor-pointer group"
                  onClick={() => setSelectedSessionId(session.id)}
                >
                  {/* Session Visual Content */}
                  <div className={`h-32 shrink-0 relative overflow-hidden bg-gradient-to-br border-b border-border/10 ${
                    session.track === 'Artificial Intelligence' ? 'from-indigo-600/10 to-indigo-600/30' :
                    session.track === 'Engineering' ? 'from-blue-600/10 to-blue-600/30' :
                    session.track === 'Sustainability' ? 'from-emerald-600/10 to-emerald-600/30' : 'from-slate-600/10 to-slate-600/30'
                  }`}>
                    <div className="absolute top-4 right-4 z-10">
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          const isCurrentlySaved = savedSessionIds.includes(session.id);
                          toggleSessionSave(session.id); 
                          if (!isCurrentlySaved && analytics) {
                            logEvent(analytics, "session_saved", { sessionId: session.id, title: session.title });
                          }
                        }}
                        className={`p-3 rounded-2xl shadow-xl transition-all active:scale-90 border-2 ${
                          isSaved 
                            ? 'bg-primary border-primary text-white' 
                            : 'bg-white/90 dark:bg-black/90 border-transparent text-foreground/40 hover:text-primary'
                        }`}
                      >
                        {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-6">
                       <Badge className="bg-background/80 dark:bg-black/80 backdrop-blur-md text-foreground dark:text-white border-none font-black text-[9px] uppercase tracking-widest px-2.5">
                         {session.format}
                       </Badge>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">{session.track}</span>
                      <span className="w-1 h-1 rounded-full bg-border"></span>
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{session.level}</span>
                    </div>

                    <h3 className="text-xl font-black font-headline text-foreground leading-tight group-hover:text-primary transition-colors mb-4 line-clamp-2">
                      {session.title}
                    </h3>
                    
                    <div className="mt-auto space-y-4 pt-6 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <div className="flex items-center text-foreground/70">
                          <Clock className="w-4 h-4 mr-2 text-primary/50" />
                          {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="flex items-center text-foreground/70">
                          <MapPin className="w-4 h-4 mr-2 text-primary/50" />
                          {session.roomId.replace('room-', '')}
                        </div>
                      </div>

                      {trackSpeaker && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-xl border border-border overflow-hidden">
                               <img src={trackSpeaker.image} alt={trackSpeaker.name} className="w-full h-full object-cover" />
                             </div>
                             <span className="text-xs font-black text-foreground/80">{trackSpeaker.name}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-20 h-20 rounded-3xl bg-muted flex items-center justify-center text-muted-foreground">
              <FilterX className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black font-headline">No intelligence found</h3>
              <p className="text-muted-foreground max-w-xs">We couldn't find any sessions matching your current filters.</p>
            </div>
            <Button variant="outline" className="rounded-2xl font-bold" onClick={() => { setSearch(''); setFilterTrack('All'); }}>
              Clear all filters
            </Button>
          </div>
        )}

      </div>

      <SessionDetailDrawer 
        session={selectedSession} 
        speaker={selectedSpeaker}
        room={selectedRoom}
        onClose={() => setSelectedSessionId(null)} 
      />
    </div>
  );
}
