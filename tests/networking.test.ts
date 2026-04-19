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
});
