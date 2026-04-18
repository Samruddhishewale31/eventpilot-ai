"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Map as MapIcon, 
  Navigation2, 
  Compass, 
  MapPin, 
  Footprints, 
  Info, 
  Star, 
  Layers, 
  Activity, 
  ChevronRight, 
  Share2,
  Zap,
  Clock,
  Accessibility,
  Building
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { mockRooms } from "@/data/mock";

export default function NavigationPage() {
  const [search, setSearch] = useState("");
  const [routing, setRouting] = useState(false);
  const [activeFloor, setActiveFloor] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const stepFree = useStore(state => state.settings.stepFreeRoutes);

  const filteredRooms = useMemo(() => {
    if (!search) return [];
    return mockRooms.filter(r => 
      r.name.toLowerCase().includes(search.toLowerCase()) || 
      r.building.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 4);
  }, [search]);

  const selectedRoom = useMemo(() => 
    mockRooms.find(r => r.id === selectedRoomId) || null
  , [selectedRoomId]);

  const handleRoute = (roomId: string) => {
    setSelectedRoomId(roomId);
    setRouting(true);
    setSearch("");
  };

  return (
    <div className="flex-1 w-full bg-background min-h-screen selections:bg-primary/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-8">
        
        {/* Navigation Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">Live Atlas v2.4</Badge>
            <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Venue Atlas</h1>
            <p className="text-muted-foreground text-lg font-medium max-w-2xl leading-relaxed">
              Real-time spatial intelligence with high-fidelity routing for <span className="text-foreground font-black">TechSummit 2026</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="rounded-2xl border-2 border-border h-12 px-6 font-black hover:bg-muted">
               <Share2 className="w-4 h-4 mr-2" /> Share Location
             </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          
          {/* Controls & Search Side (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            
            <Card className="rounded-[2.5rem] border-2 border-border bg-card shadow-sm overflow-hidden flex flex-col">
              <div className="p-2 border-b border-border/50">
                <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search rooms, stages, or booths..." 
                    className="w-full pl-16 pr-6 py-6 bg-transparent border-none text-sm font-bold focus:outline-none placeholder-muted-foreground"
                  />
                  {search && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-card border-2 border-border rounded-3xl shadow-2xl p-2 space-y-1">
                       {filteredRooms.length > 0 ? filteredRooms.map(room => (
                         <button 
                           key={room.id}
                           onClick={() => handleRoute(room.id)}
                           className="w-full text-left p-4 hover:bg-muted rounded-2xl flex items-center justify-between group"
                         >
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                               <Building className="w-5 h-5" />
                             </div>
                             <div>
                               <p className="font-bold text-sm text-foreground">{room.name}</p>
                               <p className="text-[10px] font-black text-muted-foreground uppercase">{room.building} • Floor {room.floor}</p>
                             </div>
                           </div>
                           <ChevronRight className="w-4 h-4 text-border" />
                         </button>
                       )) : (
                         <div className="p-4 text-center text-xs font-bold text-muted-foreground">No locations found.</div>
                       )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 p-8 space-y-8 overflow-y-auto">
                {routing && selectedRoom ? (
                  <div className="space-y-10 animate-in slide-in-from-left duration-500">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-primary text-white border-none font-black text-[9px] tracking-widest px-3 py-1 animate-pulse shadow-lg shadow-primary/20">LIVE ROUTE ACTIVE</Badge>
                      <div className="text-right">
                        <p className="text-4xl font-black text-foreground leading-none tracking-tighter">4 <span className="text-sm opacity-50 uppercase tracking-widest">min</span></p>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mt-1">Estimated ETA</p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-muted/30 rounded-[2rem] border-2 border-border shadow-sm">
                      <h3 className="text-2xl font-black font-headline text-foreground leading-tight">{selectedRoom.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <p className="text-sm font-bold text-muted-foreground">{selectedRoom.building} • Floor {selectedRoom.floor}</p>
                      </div>
                    </div>

                    <div className="relative border-l-2 border-dashed border-primary/30 ml-4 pl-10 space-y-12 my-10 py-2">
                      <div className="relative">
                        <div className="absolute -left-[51px] top-0 w-10 h-10 rounded-full bg-background border-4 border-foreground shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center">
                           <Footprints className="w-4 h-4 text-foreground" />
                        </div>
                        <p className="text-foreground/50 font-black text-xs uppercase tracking-widest mb-1">Origin</p>
                        <p className="text-foreground font-bold">Current Position <span className="text-muted-foreground text-sm font-medium ml-2">(Lobby)</span></p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[45px] top-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        </div>
                        <p className="text-muted-foreground font-bold leading-relaxed">Head North towards the <span className="text-foreground">Atrium Grand Hall</span></p>
                      </div>

                      <div className="relative p-5 bg-card border-2 border-border rounded-2xl shadow-sm">
                        <div className="absolute -left-[51px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                          {stepFree ? <Accessibility className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                        </div>
                        <p className={`font-black tracking-tight ${stepFree ? "text-secondary" : "text-foreground"}`}>
                          {stepFree ? "Take Elevator B to Sector 2" : "Proceed to Central Escalators"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Level change required • 45s wait</p>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[55px] -top-1 w-12 h-12 rounded-[1.25rem] bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 transform -rotate-12 group-hover:rotate-0 transition-transform">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-foreground/50 font-black text-xs uppercase tracking-widest mb-1">Destination</p>
                        <p className="text-xl font-black text-foreground">Arrival Target</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full rounded-2xl py-8 font-black bg-foreground text-background shadow-xl hover:bg-destructive hover:text-white transition-all active:scale-95 text-xs uppercase tracking-widest mt-8" 
                      onClick={() => { setRouting(false); setSelectedRoomId(null); }}
                    >
                      Terminate Navigation
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-2">
                       <h3 className="text-[10px] font-black text-primary uppercase tracking-widest">Recommended Rapid Access</h3>
                       <div className="grid grid-cols-1 gap-3">
                         {mockRooms.slice(0, 4).map((room) => (
                           <button 
                             key={room.id}
                             onClick={() => handleRoute(room.id)}
                             className="w-full flex items-center justify-between p-4 rounded-3xl bg-muted/30 border-2 border-transparent hover:border-primary/20 hover:bg-background transition-all text-left group shadow-sm"
                           >
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center shadow-sm border border-border group-hover:scale-110 transition-transform">
                                  {room.type === 'session_room' ? <Layers className="w-5 h-5 text-indigo-500" /> : 
                                   room.type === 'food' ? <Zap className="w-5 h-5 text-rose-500" /> : <Navigation2 className="w-5 h-5 text-primary" />}
                                </div>
                                <div>
                                  <span className="block text-sm font-black text-foreground leading-none">{room.name}</span>
                                  <span className="block text-[10px] font-black text-muted-foreground uppercase mt-1.5">{room.building} • Fl {room.floor}</span>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-border group-hover:text-primary transition-colors" />
                           </button>
                         ))}
                       </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {stepFree && (
              <div className="p-6 bg-secondary/5 rounded-3xl border-2 border-secondary/10 flex items-start gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Accessibility className="w-6 h-6" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-xs font-black text-secondary uppercase tracking-widest">Accessibility Enabled</p>
                    <p className="text-sm font-bold text-foreground/70 leading-relaxed">
                      All routing paths prioritized via <span className="text-secondary">step-free</span> nodes (Elevators, Ramps, Level Access).
                    </p>
                 </div>
              </div>
            )}
          </div>

          {/* Map & Visualization Side (8 Cols) */}
          <div className="lg:col-span-8 h-full bg-muted/20 rounded-[3rem] border-2 border-border relative overflow-hidden flex items-center justify-center min-h-[600px] shadow-inner">
             
             {/* Map Controls */}
             <div className="absolute top-8 right-8 z-30 flex flex-col gap-3">
                <Button size="icon" className="w-12 h-12 rounded-2xl bg-card shadow-xl border border-border text-foreground hover:bg-muted active:scale-95"><Compass className="w-6 h-6" /></Button>
                <Button size="icon" className="w-12 h-12 rounded-2xl bg-card shadow-xl border border-border text-foreground hover:bg-muted active:scale-95"><Layers className="w-6 h-6" /></Button>
             </div>

             {/* Floor Selector Tab */}
             <div className="absolute bottom-8 right-8 z-30 bg-card/90 backdrop-blur-md p-2 rounded-[1.5rem] border-2 border-border shadow-2xl flex flex-col gap-2">
                {[3, 2, 1].map(f => (
                  <button 
                    key={f}
                    onClick={() => setActiveFloor(f)}
                    className={`w-12 h-12 rounded-xl text-xs font-black flex items-center justify-center transition-all ${activeFloor === f ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'}`}
                  >
                    F{f}
                  </button>
                ))}
             </div>

             {/* 3D Stylized Map Visualization */}
             <div className="relative w-[90%] h-[90%] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
                
                <div className="w-full max-w-2xl aspect-[1.4/1] relative transform perspective-[1000px] rotate-X-[20deg] hover:rotate-X-[15deg] transition-all duration-700 ease-in-out">
                   
                   {/* Layered Floor Planes */}
                   <div className="absolute inset-0 bg-white dark:bg-card border-4 border-border rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex items-center justify-center overflow-hidden z-20">
                      
                      {/* Stylized Floor Zones */}
                      <div className="absolute top-0 right-0 w-1/3 h-full border-l-2 border-muted bg-muted/10" />
                      <div className="absolute bottom-0 left-0 w-full h-1/4 border-t-2 border-muted bg-muted/10" />
                      
                      {/* Room Blocks */}
                      <div className="absolute top-[10%] left-[10%] w-[25%] h-[20%] rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center">
                        <span className="text-[10px] font-black text-primary uppercase opacity-30">Main Stage</span>
                      </div>
                      <div className="absolute top-[40%] left-[10%] w-[35%] h-[25%] rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
                        <span className="text-[10px] font-black text-muted-foreground uppercase opacity-30">Atrium Central</span>
                      </div>
                      <div className="absolute top-[10%] right-[5%] w-[20%] h-[50%] rounded-2xl bg-secondary/5 border border-secondary/20 flex items-center justify-center">
                        <span className="text-[10px] font-black text-secondary uppercase opacity-30 vertical-text">Exhibition</span>
                      </div>

                      {/* Animated Path */}
                      {routing && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_12px_rgba(53,37,205,0.4)] z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
                          </linearGradient>
                          <path 
                            d="M 20 80 C 20 40, 50 40, 50 50 S 80 50, 80 20" 
                            fill="none" 
                            stroke="url(#pathGradient)" 
                            strokeWidth="1.5" 
                            strokeDasharray="4 4" 
                            className="animate-path" 
                          />
                        </svg>
                      )}

                      {/* Dynamic Pins */}
                      {routing && selectedRoom && (
                        <>
                          {/* Origin Pin */}
                          <div className="absolute bottom-[20%] left-[20%] translate-y-2 z-40">
                             <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse absolute -inset-0 opacity-40 scale-150" />
                             <div className="relative w-5 h-5 rounded-full bg-primary border-[4px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]" />
                             <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">Lobby Origin</div>
                          </div>

                          {/* Destination Pin */}
                          <div className="absolute top-[20%] right-[20%] -translate-y-12 z-40 flex flex-col items-center">
                              <div className="bg-primary text-white h-12 px-6 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-[0.1em] mb-4 whitespace-nowrap animate-bounce flex items-center justify-center border-2 border-white/20">
                                {selectedRoom.name}
                              </div>
                              <div className="relative">
                                <MapPin className="w-12 h-12 text-primary drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]" />
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-black/40 blur-[2px] rounded-full" />
                              </div>
                          </div>
                        </>
                      )}
                   </div>

                   {/* Beneath layers for 3D effect */}
                   <div className="absolute inset-0 bg-border/20 rounded-[3rem] translate-y-6 translate-x-6 -z-10 blur-xl opacity-50" />
                   <div className="absolute inset-0 bg-border/40 rounded-[3rem] translate-y-3 translate-x-3 -z-10" />
                   <div className="absolute inset-0 bg-border/60 rounded-[3rem] translate-y-1 translate-x-1 -z-10" />
                </div>

                {/* Status UI Overlay only when not routing */}
                {!routing && (
                   <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                      <div className="bg-card/80 backdrop-blur-md px-6 py-3 rounded-full border-2 border-border shadow-2xl flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-xs font-black text-foreground uppercase tracking-widest">Select target destination to begin live routing</span>
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-path {
          stroke-dasharray: 4;
          animation: flow 20s linear infinite;
        }
        @keyframes flow {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
