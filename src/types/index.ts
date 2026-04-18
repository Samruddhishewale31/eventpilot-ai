export type Session = {
  id: string;
  title: string;
  description: string;
  speakerId: string;
  track: string;
  format: "Talk" | "Workshop" | "Panel" | "Keynote" | "Tech Session" | "Networking";
  level: "Beginner" | "Intermediate" | "Advanced";
  startTime: string; // ISO string
  endTime: string; // ISO string
  roomId: string;
  capacity?: number;
  saved?: boolean;
  status: "scheduled" | "live" | "delayed" | "cancelled" | "completed";
  tags: string[];
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topics: string[];
  image: string;
};

export type Attendee = {
  id: string;
  name: string;
  role: string;
  company?: string;
  interests: string[];
  goals: string[];
  networkingVisible: boolean;
  savedSessionIds: string[];
};

export type Announcement = {
  id: string;
  type: "room_change" | "delay" | "cancellation" | "general" | "networking";
  title: string;
  message: string;
  createdAt: string;
  sessionId?: string;
  roomId?: string;
  priority: "low" | "medium" | "high" | "critical";
};

export type Room = {
  id: string;
  name: string;
  building: string;
  floor: number;
  type: "session_room" | "hall" | "help_desk" | "restroom" | "food" | "quiet_zone" | "first_aid" | "networking";
  accessible: boolean;
  coordinates?: { x: number; y: number };
};

export type FAQ = {
  id: string;
  category: "event" | "venue" | "emergency";
  question: string;
  answer: string;
};

export type NetworkMatch = {
  id: string;
  attendee: Attendee;
  matchScore: number;
  sharedInterests: string[];
  reason: string;
};
