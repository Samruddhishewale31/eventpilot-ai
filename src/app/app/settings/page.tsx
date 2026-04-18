"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/store/useStore";
import { Accessibility, Bell, Eye, Footprints, Moon, Sun, Type, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const settings = useStore(state => state.settings);
  const updateSettings = useStore(state => state.updateSettings);
  const user = useStore(state => state.user);

  // For demo, we just manipulate the DOM to show high contrast/large text
  // In a real app this would use CSS variables or a context provider
  useEffect(() => {
    if (settings.largeText) {
      document.documentElement.style.fontSize = "18px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }

    if (settings.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [settings.largeText, settings.highContrast]);

  return (
    <div className="flex-1 px-4 md:px-8 py-10 max-w-6xl mx-auto w-full space-y-12 animate-in fade-in duration-700">
      <header className="flex flex-col gap-4 pb-10 border-b border-border">
        <Badge className="w-fit bg-primary/10 text-primary border-none text-[10px] font-black tracking-widest uppercase py-1 px-3">Protocol Management</Badge>
        <h1 className="text-5xl font-black font-headline tracking-tighter text-foreground leading-none">Settings & Nexus Profile</h1>
        <p className="text-muted-foreground text-lg font-medium max-w-2xl leading-relaxed">
          Configure your digital footprint and accessibility parameters for the <span className="text-foreground font-black">Stellar Nexus</span> ecosystem.
        </p>
      </header>

      {/* Profile Summary */}
      <Card className="premium-card rounded-[3rem] overflow-hidden border-2 border-border/60 shadow-xl group cursor-default">
        <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Abstract background for profile */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[6rem] group-hover:bg-primary/10 transition-colors" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-primary to-indigo-900 text-white flex items-center justify-center text-5xl font-black font-headline shadow-2xl ai-glow">
                {user?.name.charAt(0)}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-foreground text-background w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-card shadow-xl">
                 <ShieldAlert className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black font-headline tracking-tight">{user?.name}</h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                 <p className="text-lg font-bold text-muted-foreground">{user?.role} @ <span className="text-foreground">{user?.company}</span></p>
                 <Badge variant="outline" className="border-primary/20 text-primary font-black tracking-widest uppercase text-[9px] py-1 px-3">Elite Tier</Badge>
              </div>
            </div>
          </div>
          <Button className="rounded-2xl h-16 px-10 font-black bg-foreground text-background shadow-xl hover:bg-foreground/90 transition-all active:scale-95 text-xs uppercase tracking-widest">Edit Profile Nexus</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Accessibility Settings */}
        <Card className="rounded-[3rem] border-2 border-border/50 shadow-sm bg-card/40 backdrop-blur-sm">
          <CardHeader className="p-10 pb-4">
            <CardTitle className="text-2xl font-black font-headline flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20">
                <Accessibility className="w-6 h-6" />
              </div>
              Accessibility
            </CardTitle>
            <p className="text-muted-foreground font-medium mt-2">Design the app around your spatial and visual requirements.</p>
          </CardHeader>
          <CardContent className="p-10 pt-6 space-y-10">
            
            <div className="flex items-center justify-between group">
              <div className="space-y-1">
                <div className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-foreground transition-colors group-hover:text-primary">
                  <Footprints className="w-4 h-4" /> Step-Free Routing
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed pr-8">Prioritize elevators, ramps, and VIP access paths in Venue Atlas.</p>
              </div>
              <Toggle 
                checked={settings.stepFreeRoutes} 
                onChange={(v) => updateSettings({ stepFreeRoutes: v })} 
              />
            </div>

            <div className="flex items-center justify-between group">
              <div className="space-y-1">
                <div className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-foreground transition-colors group-hover:text-primary">
                  <Type className="w-4 h-4" /> High-Resolution Text
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed pr-8">Increase global font scaling for high-contrast viewing.</p>
              </div>
              <Toggle 
                checked={settings.largeText} 
                onChange={(v) => updateSettings({ largeText: v })} 
              />
            </div>

            <div className="flex items-center justify-between group">
              <div className="space-y-1">
                <div className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-foreground transition-colors group-hover:text-primary">
                  <Eye className="w-4 h-4" /> Enhanced Contrast
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed pr-8">Maximized luminance ratios for improved readability in bright light.</p>
              </div>
              <Toggle 
                checked={settings.highContrast} 
                onChange={(v) => updateSettings({ highContrast: v })} 
              />
            </div>

          </CardContent>
        </Card>

        {/* Notifications & System */}
        <div className="space-y-10">
          <Card className="rounded-[3rem] border-2 border-border/50 shadow-sm bg-card/40 backdrop-blur-sm">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-2xl font-black font-headline flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 border border-amber-500/20">
                  <Bell className="w-6 h-6" />
                </div>
                Alert Protocols
              </CardTitle>
              <p className="text-muted-foreground font-medium mt-2">Manage your real-time intelligence feed.</p>
            </CardHeader>
            <CardContent className="p-10 pt-6 space-y-8">
              <div className="flex items-center justify-between group">
                <div className="space-y-1">
                  <div className="font-black text-xs uppercase tracking-widest text-foreground transition-colors group-hover:text-primary">Nexus Push Engine</div>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed pr-8">Receive instant pulses for agenda conflicts and room changes.</p>
                </div>
                <Toggle 
                  checked={settings.notificationsEnabled} 
                  onChange={(v) => updateSettings({ notificationsEnabled: v })} 
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[3rem] border-2 border-border/50 shadow-sm bg-card/40 backdrop-blur-sm">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-2xl font-black font-headline flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 border border-indigo-500/20">
                  <Sun className="w-6 h-6 hidden dark:block" />
                  <Moon className="w-6 h-6 block dark:hidden" />
                </div>
                Visual Theme
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0">
              <div className="flex p-2 bg-muted/40 rounded-[2rem] w-full border border-border/50">
                <button className="flex-1 h-12 rounded-[1.25rem] bg-white dark:bg-transparent shadow-lg dark:shadow-none text-[10px] font-black uppercase tracking-[0.2em] transition-all">Light</button>
                <button className="flex-1 h-12 rounded-[1.25rem] dark:bg-card dark:shadow-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all text-muted-foreground dark:text-foreground">Dark</button>
                <button className="flex-1 h-12 rounded-[1.25rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all text-muted-foreground">Stellar</button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-6 text-center font-black uppercase tracking-widest opacity-40">Synchronized with System Protocol</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Custom Toggle Component (Stitch Inspired)
function Toggle({ checked, onChange }: { checked: boolean, onChange: (val: boolean) => void }) {
  return (
    <button 
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-3xl border-4 border-transparent transition-all duration-300 shadow-inner overflow-hidden active:scale-95 ${checked ? 'bg-primary' : 'bg-muted border-border/20'}`}
    >
      <div className={`absolute inset-0 bg-white/10 opacity-0 transition-opacity ${checked ? 'opacity-100' : ''}`} />
      <span className={`pointer-events-none block h-7 w-7 rounded-2xl bg-white shadow-2xl ring-0 transition-all duration-500 ease-spring ${checked ? 'translate-x-10 scale-110 shadow-primary/40' : 'translate-x-1 scale-95 shadow-black/10'}`} />
    </button>
  );
}
