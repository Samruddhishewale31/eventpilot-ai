import { mockAttendees, mockCurrentUser } from "../data/mock";
import { NetworkMatch } from "../types";

export async function getNetworkingRecommendations(): Promise<NetworkMatch[]> {
  await new Promise(resolve => setTimeout(resolve, 350));
  
  return mockAttendees.map((attendee, i) => {
    const shared = attendee.interests.filter(int => mockCurrentUser.interests.includes(int));
    return {
      id: `match-${i}`,
      attendee,
      matchScore: 80 + (shared.length * 5),
      sharedInterests: shared,
      reason: shared.length > 0 
        ? `You both listed ${shared[0]} as a key interest.` 
        : "Profiles highly match your industry role."
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
