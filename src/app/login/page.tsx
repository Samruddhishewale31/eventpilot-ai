"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, User, KeyRound, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background text-foreground font-sans selection:bg-primary/20">
      
      {/* Left Panel: Hero Visuals (Stitch Inspired) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0044] overflow-hidden">
        {/* Stellar Nexus Abstract Pattern (CSS) */}
        <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          {/* Faux-Grid/Nexus lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full p-20 justify-between">
          <Link href="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-opacity w-fit">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black font-headline tracking-tight">EventPilot AI</span>
          </Link>

          <div className="space-y-8 mt-10">
            <h1 className="text-6xl font-black font-headline tracking-tighter leading-[1.05] text-white">
              The Intelligence Layer for <span className="bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">Physical Events.</span>
            </h1>
            <p className="text-xl text-blue-100/70 max-w-md font-medium leading-relaxed">
              Navigate, plan, and connect with the precision of a personal AI concierge. 
            </p>
            
            <ul className="space-y-5 pt-4">
              {[
                 { t: "Predictive Agenda", d: "Avoid conflicts with intelligent scheduling." },
                 { t: "Venue Atlas", d: "High-fidelity indoor navigation." },
                 { t: "Nexus Networking", d: "Meet the people who actually matter." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-left">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">{item.t}</h3>
                    <p className="text-blue-100/50 text-sm mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 mt-12 bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md max-w-md shadow-2xl">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0044] bg-slate-800 overflow-hidden">
                   <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="user" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p className="text-sm font-semibold text-blue-100/80 leading-snug">
               Trusted by <span className="text-white font-black underline decoration-primary/50 underline-offset-4">50+ Global Summits</span> for elite experiences.
             </p>
          </div>
        </div>
      </div>

      {/* Right Panel: Form Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-background/50 backdrop-blur-3xl relative z-10 lg:rounded-l-[3.5rem] overflow-hidden lg:shadow-[-40px_0_100px_-20px_rgba(0,0,0,0.1)]">
        {/* Backdrop patterns */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[60px]" />
        </div>

        <Link href="/" className="absolute top-10 left-10 p-3 rounded-2xl hover:bg-muted transition-all text-muted-foreground group z-20">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>
        
        <div className="w-full max-w-[440px] mx-auto space-y-12 relative z-10">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black tracking-widest uppercase py-1 px-3 mb-2">Secure Access</Badge>
            <h2 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Sign In</h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">Access your personalized event intelligence dashboard and nexus networking.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => window.location.href='/app/dashboard', 800); }}>
            <div className="space-y-5">
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">Work Email</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="alexander@stellar.systems"
                  />
                </div>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50">Secret Key</label>
                  <a href="#" className="text-xs font-black text-primary hover:underline uppercase tracking-tight">Forgot?</a>
                </div>
                <div className="relative group">
                  <KeyRound className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    required
                    className="w-full pl-14 pr-6 py-5 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full rounded-[1.5rem] py-8 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              {loading ? "Authenticating..." : <>Enter Platform <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" /></>}
            </Button>
          </form>

          <div className="relative pt-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.15em] text-muted-foreground">
              <span className="bg-background px-6 leading-none">Social Continuity</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "Google", i: <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg> },
              { n: "Github", i: <svg className="w-5 h-5 mr-3 text-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg> }
            ].map(social => (
              <button key={social.n} className="flex items-center justify-center w-full py-5 border-2 border-border/50 rounded-2xl hover:bg-muted font-black text-xs uppercase tracking-[0.1em] transition-all active:scale-95 shadow-sm">
                {social.i} {social.n}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 text-center pt-4">
            <p className="text-base text-muted-foreground font-semibold">
              New to the platform?{' '}
              <Link href="/signup" className="text-primary hover:underline font-black">
                Create Account
              </Link>
            </p>
            
            <div className="pt-10 border-t border-border/50">
              <Link href="/app/dashboard" className="inline-flex items-center gap-3 text-sm font-black text-primary hover:text-indigo-700 tracking-[0.15em] uppercase transition-all group">
                Continue as anonymous Guest <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
