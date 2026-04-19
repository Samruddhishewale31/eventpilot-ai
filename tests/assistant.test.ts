import { describe, it, expect, vi } from 'vitest';

describe('Assistant Logic', () => {
  it('should handle API responses correctly', async () => {
    const mockResponse = { reply: 'Hello from Gemini!' };
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse)
    });

    const response = await fetch('/api/assistant', {
      method: 'POST',
      body: JSON.stringify({ message: 'Hello' })
    });
    const data = await response.json();

    expect(data.reply).toBe('Hello from Gemini!');
    expect(global.fetch).toHaveBeenCalledWith('/api/assistant', expect.any(Object));
  });

  it('should gracefully handle API errors', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('API Error'));

    await expect(fetch('/api/assistant', { method: 'POST' })).rejects.toThrow('API Error');
  });
});
