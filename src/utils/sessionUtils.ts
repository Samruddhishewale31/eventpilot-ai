import { Session, Attendee } from "../types";

/**
 * Filter sessions that are either currently live or match the user's intelligence interests.
 * @param sessions - List of all sessions
 * @param user - Current authenticated user
 * @returns Filtered list of recommended sessions
 */
export function getRecommendedSessions(sessions: Session[], user: Attendee | null): Session[] {
  if (!user) return sessions.filter(s => s.status === 'live').slice(0, 2);
  
  return sessions.filter(s => 
    s.status === 'live' || s.tags.some(tag => user.interests.includes(tag))
  ).slice(0, 2);
}

/**
 * Common formatting and extraction utilities for session durations and rooms
 */
export const sessionUtils = {
  getStartTime: (session: Session) => {
    return session.startTime.split('T')[1].substring(0, 5);
  },
  getRoomName: (session: Session) => {
    return session.roomId.replace('room-', 'Sector ');
  }
};
