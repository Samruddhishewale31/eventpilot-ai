import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Sparkles, Navigation, ShieldAlert, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden flex justify-center text-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950">
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            The Future of Conferences is Here
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Stop wandering.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Start experiencing.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EventPilot AI is your smart companion for physical events. Discover sessions, navigate crowded venues, and connect with the right people—all powered by real-time intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/app/dashboard">
              <Button size="lg" className="rounded-full px-8 text-lg w-full sm:w-auto">
                Enter Dashboard Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg w-full sm:w-auto bg-white/50 backdrop-blur">
              Meet the AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need in your pocket</h2>
            <p className="text-lg text-muted-foreground">Say goodbye to paper schedules and lost connections.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-primary" />}
              title="AI Assistant"
              description="Ask questions in natural language. Where's Hall B? What's the next AI session? Get instant, accurate answers."
            />
            <FeatureCard 
              icon={<CalendarDays className="w-8 h-8 text-blue-500" />}
              title="Smart Agenda Planner"
              description="Build conflict-free schedules. We'll automatically suggest alternatives if your saved events overlap."
            />
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-emerald-500" />}
              title="Venue Navigation"
              description="Interactive maps with turn-by-turn routing and step-free accessibility mode."
            />
            <FeatureCard 
              icon={<Navigation className="w-8 h-8 text-indigo-500" />}
              title="Live Updates"
              description="Push notifications for room changes and delays. Real-time adaptations over static lists."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-purple-500" />}
              title="Networking Recommendations"
              description="AI matchmaking detects shared interests and suggests the best times and places to connect."
            />
            <FeatureCard 
              icon={<ShieldAlert className="w-8 h-8 text-red-500" />}
              title="Help & Safety Center"
              description="Immediate access to event support, first aid routing, and emergency protocol."
            />
          </div>
        </div>
      </section>

      {/* Polish Output CTA */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to see it in action?</h2>
          <p className="text-xl text-muted-foreground">
            Experience the competition-winning prototype with full mock data and service abstraction layers.
          </p>
          <Link href="/app/dashboard" className="inline-block">
            <Button size="lg" className="rounded-full px-12 text-lg shadow-xl shadow-primary/20">
              Launch Product Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-md bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-8 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
