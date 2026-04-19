import { mockSessions, mockSpeakers, mockRooms } from "../data/mock";
import { Session, Speaker, Room } from "../types";

export async function getSessions(): Promise<Session[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockSessions;
}

export async function getSessionById(id: string): Promise<Session | undefined> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockSessions.find(s => s.id === id);
}

export async function getSpeakers(): Promise<Speaker[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockSpeakers;
}

export async function getRooms(): Promise<Room[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockRooms;
}

export function checkConflicts(agenda: Session[], newSession: Session): Session[] {
  return agenda.filter(existing => {
    const startA = new Date(existing.startTime).getTime();
    const endA = new Date(existing.endTime).getTime();
    const startB = new Date(newSession.startTime).getTime();
    const endB = new Date(newSession.endTime).getTime();

    return (startA < endB && startB < endA);
  });
}

