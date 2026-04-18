"use client";

import { Session, Speaker, Room } from "@/types";
import { X, Clock, MapPin, User, BookmarkPlus, BookmarkCheck, Calendar, ChevronRight, Share2, Sparkles, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import Link from "next/link";

interface SessionDetailDrawerProps {
  session: Session | null;
  speaker: Speaker | null;
  room: Room | null;
  onClose: () => void;
}

export function SessionDetailDrawer({ session, speaker, room, onClose }: SessionDetailDrawerProps) {
  const isSaved = useStore(state => session ? state.savedSessionIds.includes(session.id) : false);
  const toggleSessionSave = useStore(state => state.toggleSessionSave);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (session) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [session]);

  if (!session) return null;

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      {/* Drawer */}
      <div className={`absolute top-0 right-0 w-full sm:w-[500px] h-full bg-background shadow-2xl transition-transform duration-500 transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        {/* Header Visual */}
        <div className={`h-48 shrink-0 relative overflow-hidden bg-gradient-to-br ${
          session.track === 'Artificial Intelligence' ? 'from-indigo-600 to-violet-700' :
          session.track === 'Engineering' ? 'from-blue-600 to-cyan-700' : 'from-slate-700 to-slate-900'
        }`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-6 left-6 text-white hover:bg-white/20 rounded-full" 
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="absolute top-6 right-6 flex gap-2">
             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
               <Share2 className="w-5 h-5" />
             </Button>
          </div>

          <div className="absolute bottom-6 left-8">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md mb-2">
              {session.track}
            </Badge>
            <h2 className="text-2xl font-black font-headline text-white leading-tight">
              {session.title}
            </h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Time</span>
              </div>
              <p className="text-sm font-bold text-foreground">
                {new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Location</span>
              </div>
              <p className="text-sm font-bold text-foreground">
                {room?.name || session.roomId}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Session Intel</h3>
            <p className="text-base text-foreground/80 leading-relaxed font-medium">
              {session.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {session.tags.map(tag => (
                <Badge key={tag} variant="outline" className="rounded-lg py-1 px-3 border-border text-foreground/60">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Speaker Card */}
          {speaker && (
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">About the Expert</h3>
              <div className="p-6 bg-card border border-border rounded-[2rem] shadow-sm group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black font-headline text-foreground">{speaker.name}</h4>
                    <p className="text-sm font-bold text-primary">{speaker.role} @ {speaker.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          )}

          {/* Room / Venue Integration */}
          {room && (
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Venue Logistics</h3>
              <div className="flex items-center justify-between p-6 bg-muted/20 border border-border rounded-[2rem]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary shadow-sm border border-border">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{room.building}</h4>
                    <p className="text-xs font-semibold text-muted-foreground">Floor {room.floor} • Wing {room.name.includes('West') ? 'West' : 'East'}</p>
                  </div>
                </div>
                <Link href="/app/navigation">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 text-primary">
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-8 border-t bg-card shrink-0 flex gap-4">
          <Button 
            className={`flex-1 rounded-2xl py-8 text-lg font-black shadow-xl transition-all active:scale-95 ${
              isSaved 
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20' 
                : 'bg-primary hover:bg-indigo-700 text-white shadow-primary/20'
            }`}
            onClick={() => toggleSessionSave(session.id)}
          >
            {isSaved ? <><BookmarkCheck className="w-5 h-5 mr-2" /> Bookmarked</> : <><BookmarkPlus className="w-5 h-5 mr-2" /> Add to Agenda</>}
          </Button>
          <Button variant="outline" className="rounded-2xl py-8 px-6 border-2 border-border font-black">
            <Sparkles className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
