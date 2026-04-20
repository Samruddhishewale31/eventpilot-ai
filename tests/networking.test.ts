import { describe, it, expect } from 'vitest';
import { getNetworkingRecommendations } from '@/services/networkingService';

describe('Networking Match Scoring', () => {
  it('should calculate match scores correctly based on shared interests', async () => {
    const recommendations = await getNetworkingRecommendations();
    
    expect(recommendations.length).toBeGreaterThan(0);
    recommendations.forEach(match => {
      // Logic from networkingService: 80 + (shared.length * 5)
      const expectedScore = 80 + (match.sharedInterests.length * 5);
      expect(match.matchScore).toBe(expectedScore);
    });
  });

  it('should sort recommendations by score descending', async () => {
    const recommendations = await getNetworkingRecommendations();
    
    for (let i = 0; i < recommendations.length - 1; i++) {
      expect(recommendations[i].matchScore).toBeGreaterThanOrEqual(recommendations[i+1].matchScore);
    }
  });

  it('should have a base score of 80 even with zero shared interests', async () => {
    const recommendations = await getNetworkingRecommendations();
    
    // Find a match with zero shared interests if it exists, or verify the logic
    recommendations.forEach(match => {
      if (match.sharedInterests.length === 0) {
        expect(match.matchScore).toBe(80);
        expect(match.reason).toBe("Profiles highly match your industry role.");
      }
    });
  });
});
