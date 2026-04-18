import { mockAnnouncements } from "../data/mock";
import { Announcement } from "../types";

export async function getAnnouncements(): Promise<Announcement[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockAnnouncements;
}
