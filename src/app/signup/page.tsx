"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, User, KeyRound, CheckCircle2, ArrowRight, Mail, Briefcase } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background text-foreground font-sans selection:bg-primary/20 flex-row-reverse">
      
      {/* Right Panel: Hero Visuals (Stitch Inspired) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#4f46e5] overflow-hidden">
        {/* Stellar Nexus Abstract Pattern (CSS) */}
        <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full bg-indigo-400/20 blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-violet-500/30 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          {/* Faux-Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full p-20 justify-between items-end text-right">
          <Link href="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-opacity w-fit flex-row-reverse">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black font-headline tracking-tight">EventPilot AI</span>
          </Link>

          <div className="space-y-8 mt-10">
            <h1 className="text-6xl font-black font-headline tracking-tighter leading-[1.05] text-white">
              The Hub of <br/><span className="bg-gradient-to-l from-blue-200 to-indigo-100 bg-clip-text text-transparent">Event Intelligence.</span>
            </h1>
            <p className="text-xl text-blue-50/70 max-w-sm font-medium leading-relaxed ml-auto">
              Join the ecosystem of innovators and professionals using AI to decimate logistical friction. 
            </p>
            
            <ul className="space-y-5 pt-4 flex flex-col items-end">
              {[
                 { t: "Seamless Onboarding", d: "Configured in seconds, relevant for hours." },
                 { t: "VIP Accessibility", d: "High-contrast and step-free by default." },
                 { t: "Global Scale", d: "Trusted at the world's largest tech summits." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 flex-row-reverse">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-300/20 border border-indigo-200/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-100" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">{item.t}</h3>
                    <p className="text-indigo-50/50 text-sm mt-1">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6 mt-12 bg-white/10 border border-white/20 p-6 rounded-[2rem] backdrop-blur-md max-w-md shadow-2xl flex-row-reverse">
             <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 text-white shadow-inner">
               <Sparkles className="w-8 h-8 opacity-80" />
             </div>
             <p className="text-sm font-semibold text-blue-50/80 leading-snug">
               Experience the gold-standard in <strong className="text-white">attendee-first</strong> architectural design.
             </p>
          </div>
        </div>
      </div>

      {/* Left Panel: Form Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-background/50 backdrop-blur-3xl relative z-10 lg:rounded-r-[3.5rem] overflow-hidden lg:shadow-[40px_0_100px_-20px_rgba(0,0,0,0.1)]">
        
        {/* Abstract Background for Form Panel */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute bottom-[30%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[60px]" />
        </div>

        <Link href="/" className="absolute top-10 right-10 p-3 rounded-2xl hover:bg-muted transition-all text-muted-foreground group z-20">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
        </Link>
        
        <div className="w-full max-w-[480px] mx-auto space-y-10 relative z-10">
          <div className="space-y-4 text-left">
            <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black tracking-widest uppercase py-1 px-3 mb-2">Protocol Enrollment</Badge>
            <h2 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Create Profile</h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">Join 15,000+ elite professionals in the next-gen event ecosystem.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => window.location.href='/app/dashboard', 800); }}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2.5 text-left">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">First Name</label>
                  <div className="relative group">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                      placeholder="Alexander"
                    />
                  </div>
                </div>
                <div className="space-y-2.5 text-left">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="Dev"
                  />
                </div>
              </div>

              <div className="space-y-2.5 text-left">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">Work Email</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="alexander@stellar.systems"
                  />
                </div>
              </div>

              <div className="space-y-2.5 text-left">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">Job Title</label>
                <div className="relative group">
                  <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="Lead Architect"
                  />
                </div>
              </div>
              
              <div className="space-y-2.5 text-left">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/50 ml-1">Secure Password</label>
                <div className="relative group">
                  <KeyRound className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border-2 border-transparent focus:border-primary/20 focus:bg-background rounded-[1.5rem] text-sm font-bold transition-all outline-none shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 ml-1">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-border text-primary focus:ring-primary/20 cursor-pointer" id="terms" required />
              <label htmlFor="terms" className="text-xs font-bold text-muted-foreground leading-snug cursor-pointer text-left">
                I agree to the <a href="#" className="text-primary hover:underline font-black">Terms of Service</a> and <a href="#" className="text-primary hover:underline font-black">Privacy Protocol</a>.
              </label>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full rounded-[1.5rem] py-8 text-xl font-black bg-primary text-white shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 group mt-2"
            >
              {loading ? "Initializing..." : <>Register & Enter <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" /></>}
            </Button>
          </form>

          <p className="text-center text-base text-muted-foreground font-semibold">
            Already have a profile?{' '}
            <Link href="/login" className="text-primary hover:underline font-black">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
