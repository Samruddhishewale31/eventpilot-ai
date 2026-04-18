"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Bell, Search, User, LogOut, Settings as SettingsIcon, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const user = useStore(state => state.user);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", href: "/app/dashboard" },
    { name: "Sessions", href: "/app/sessions" },
    { name: "My Agenda", href: "/app/agenda" },
    { name: "Venue Map", href: "/app/navigation" },
    { name: "Networking", href: "/app/networking" },
    { name: "Help", href: "/app/help" },
  ];

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  if (isAuthPage) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 font-sans ${
      scrolled 
        ? "py-3 px-4 md:px-8 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-b border-border/50" 
        : "py-6 px-4 md:px-12 bg-transparent"
    }`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="hidden sm:block">
            <span className="font-headline text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">EventPilot <span className="text-primary font-black">AI</span></span>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50 leading-none mt-1">Stellar Nexus</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 bg-muted/30 rounded-[1.5rem] border border-border/50 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <span className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  isActive 
                    ? "bg-background text-primary shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Action Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
             <button className="p-3 rounded-2xl text-muted-foreground hover:bg-muted hover:text-primary transition-all">
               <Search className="w-5 h-5" />
             </button>
             <button className="p-3 rounded-2xl text-muted-foreground hover:bg-muted hover:text-primary transition-all relative">
               <Bell className="w-5 h-5" />
               <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background" />
             </button>
          </div>
          
          <div className="h-8 w-px bg-border/60 mx-1 hidden sm:block"></div>

          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden xl:block">
               <p className="text-sm font-black text-foreground leading-none">{user?.name || 'Alexander Dev'}</p>
               <p className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-tight">Full-Access Pass</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-muted border-2 border-border overflow-hidden cursor-pointer hover:border-primary transition-all shadow-sm">
               <img src={`https://ui-avatars.com/api/?name=${user?.name.replace(' ', '+') || 'Alexander+Dev'}&background=indigo&color=fff`} alt="user" className="w-full h-full object-cover" />
            </div>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-3 rounded-2xl bg-muted text-foreground hover:bg-primary hover:text-white transition-all ml-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Interaction Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-24 z-[100] bg-card border-2 border-border rounded-[2.5rem] shadow-2xl p-6 overflow-hidden animate-in zoom-in-95 duration-200">
           <div className="grid grid-cols-1 gap-2">
             {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                   <div className={`p-4 rounded-2xl flex items-center justify-between transition-all ${pathname === link.href ? "bg-primary text-white shadow-xl shadow-primary/20" : "hover:bg-muted"}`}>
                      <span className="font-black text-sm uppercase tracking-widest">{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${pathname === link.href ? "opacity-100" : "opacity-30"}`} />
                   </div>
                </Link>
             ))}
           </div>
           
           <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-2 gap-4">
              <Button variant="outline" className="rounded-2xl py-6 font-black text-xs uppercase tracking-widest border-2">
                <SettingsIcon className="w-4 h-4 mr-2" /> Settings
              </Button>
               <Button className="rounded-2xl py-6 font-black text-xs uppercase tracking-widest bg-destructive hover:bg-red-700 text-white border-0 shadow-xl shadow-red-900/10">
                <LogOut className="w-4 h-4 mr-2" /> Log out
              </Button>
           </div>
        </div>
      )}
    </nav>
  );
}
