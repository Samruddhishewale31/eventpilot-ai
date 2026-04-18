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
