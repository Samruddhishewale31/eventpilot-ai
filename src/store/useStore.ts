import { create } from 'zustand';
import { Attendee, Announcement } from '../types';
import { mockCurrentUser } from '../data/mock';

export interface AppSettings {
  accessibilityMode: boolean;
  highContrast: boolean;
  largeText: boolean;
  stepFreeRoutes: boolean;
  notificationsEnabled: boolean;
}

interface AppState {
  user: Attendee | null;
  savedSessionIds: string[];
  updates: Announcement[];
  settings: AppSettings;
  
  toggleSessionSave: (sessionId: string) => void;
  setUser: (user: Attendee) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

const defaultSettings: AppSettings = {
  accessibilityMode: false,
  highContrast: false,
  largeText: false,
  stepFreeRoutes: false,
  notificationsEnabled: true,
};

export const useStore = create<AppState>((set) => ({
  user: mockCurrentUser,
  savedSessionIds: mockCurrentUser.savedSessionIds,
  updates: [],
  settings: defaultSettings,
  
  toggleSessionSave: (sessionId: string) => 
    set((state) => {
      const isSaved = state.savedSessionIds.includes(sessionId);
      return {
        savedSessionIds: isSaved 
          ? state.savedSessionIds.filter(id => id !== sessionId)
          : [...state.savedSessionIds, sessionId]
      };
    }),
    
  setUser: (user) => set({ user }),
  updateSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } }))
}));
