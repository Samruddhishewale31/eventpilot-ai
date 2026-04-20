import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from '@/app/login/page';
import * as authService from '@/services/authService';

// Mock useRouter
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe('Login Page Rendering', () => {
  it('should render the login form correctly', () => {
    render(<LoginPage />);
    
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/alexander@stellar.systems/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/••••••••/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enter Platform/i })).toBeInTheDocument();
  });

  it('should allow typing in email and password fields', () => {
    const { fireEvent } = require('@testing-library/react');
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText(/alexander@stellar.systems/i) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(/••••••••/i) as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('should show loading state on form submission', async () => {
    const { fireEvent, waitFor } = require('@testing-library/react');
    const signInSpy = vi.spyOn(authService, 'signIn').mockImplementation(() => new Promise(() => {})); 
    
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText(/alexander@stellar.systems/i);
    const passwordInput = screen.getByPlaceholderText(/••••••••/i);
    const submitButton = screen.getByRole('button', { name: /Enter Platform/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(screen.getByText(/Authenticating/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
