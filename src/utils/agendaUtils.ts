import { Session } from "../types";

export function detectConflicts(sessions: Session[]): string[] {
  const conflicts = new Set<string>();
  
  // Sort by start time first
  const sorted = [...sessions].sort((a, b) => 
    new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  for (let i = 0; i < sorted.length - 1; i++) {
    const currentEnd = new Date(sorted[i].endTime).getTime();
    const nextStart = new Date(sorted[i + 1].startTime).getTime();

    if (currentEnd > nextStart) {
      conflicts.add(sorted[i].id);
      conflicts.add(sorted[i + 1].id);
    }
  }

  return Array.from(conflicts);
}
