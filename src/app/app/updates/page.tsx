import { getAnnouncements } from "@/services/announcementService";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Info, AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";

export default async function UpdatesPage() {
  const announcements = await getAnnouncements();

  const getPriorityConfig = (priority: string) => {
    switch(priority) {
      case 'critical':
        return { color: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900', icon: <ShieldAlert className="w-5 h-5 text-red-500" />, badge: 'destructive' };
      case 'high':
        return { color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900', icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, badge: 'secondary' };
      default:
        return { color: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800', icon: <Info className="w-5 h-5 text-blue-500" />, badge: 'outline' };
    }
  };

  return (
    <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Live Updates</h1>
        <p className="text-muted-foreground text-lg">Real-time alerts, room changes, and announcements</p>
      </header>

      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent dark:before:via-slate-800">
        
        {announcements.map((ann, i) => {
          const config = getPriorityConfig(ann.priority);
          
          return (
            <div key={ann.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0 shadow-sm z-10 transition-transform group-hover:scale-110">
                {config.icon}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pb-6 p-4">
                <Card className={`overflow-hidden transition-all hover:shadow-md ${config.color}`}>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <Badge variant={config.badge as any} className="capitalize">{ann.type.replace('_', ' ')}</Badge>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(ann.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1">{ann.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{ann.message}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
        
        {/* End of timeline marker */}
        <div className="relative flex items-center justify-center md:justify-center">
            <div className="w-10 h-10 flex items-center justify-center bg-transparent z-10 absolute left-0 md:left-1/2 -translate-x-1/2">
                <CheckCircle2 className="w-6 h-6 text-slate-300 dark:text-slate-700" />
            </div>
        </div>

      </div>
    </div>
  );
}
