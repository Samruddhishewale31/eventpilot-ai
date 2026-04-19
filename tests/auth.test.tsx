import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from '@/app/login/page';

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

  it('should render social login buttons', () => {
    render(<LoginPage />);
    
    expect(screen.getByText(/Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Github/i)).toBeInTheDocument();
  });
});
