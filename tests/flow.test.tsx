import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from '@/app/login/page';
import * as authService from '@/services/authService';

// Mock next/navigation
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Login Flow Integration', () => {
  it('should navigate to dashboard on successful guest entry', async () => {
    render(<LoginPage />);
    
    const guestButton = screen.getByText(/Continue as anonymous Guest/i);
    fireEvent.click(guestButton);
    
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/app/dashboard');
    });
  });

  it('should handle successful email login', async () => {
    const signInSpy = vi.spyOn(authService, 'signIn').mockResolvedValue({} as any);
    
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText(/alexander@stellar.systems/i);
    const passwordInput = screen.getByPlaceholderText(/••••••••/i);
    const submitButton = screen.getByRole('button', { name: /Enter Platform/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(signInSpy).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(mockPush).toHaveBeenCalledWith('/app/dashboard');
    });
  });
});
