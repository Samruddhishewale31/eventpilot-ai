import { describe, it, expect } from 'vitest';
import { checkConflicts } from '@/services/sessionService';
import { Session } from '@/types';

describe('Agenda Conflict Detection', () => {
  const mockAgenda: Session[] = [
    {
      id: '1',
      title: 'Existing Session',
      startTime: '2026-04-19T10:00:00Z',
      endTime: '2026-04-19T11:00:00Z',
      roomId: 'room-1',
      speakerId: 'sp-1',
      description: 'Test',
      tags: [],
      level: 'intermediate',
      status: 'upcoming',
      type: 'session'
    }
  ];

  it('should detect an overlapping session', () => {
    const newSession: Session = {
      id: '2',
      title: 'New Overlapping Session',
      startTime: '2026-04-19T10:30:00Z',
      endTime: '2026-04-19T11:30:00Z',
      roomId: 'room-2',
      speakerId: 'sp-2',
      description: 'Test',
      tags: [],
      level: 'beginner',
      status: 'upcoming',
      type: 'keynote'
    };
    
    const conflicts = checkConflicts(mockAgenda, newSession);
    expect(conflicts.length).toBe(1);
    expect(conflicts[0].id).toBe('1');
  });

  it('should not detect conflict if session starts exactly when another ends', () => {
    const newSession: Session = {
      id: '3',
      title: 'Back-to-Back Session',
      startTime: '2026-04-19T11:00:00Z',
      endTime: '2026-04-19T12:00:00Z',
      roomId: 'room-1',
      speakerId: 'sp-1',
      description: 'Test',
      tags: [],
      level: 'intermediate',
      status: 'upcoming',
      type: 'session'
    };

    const conflicts = checkConflicts(mockAgenda, newSession);
    expect(conflicts.length).toBe(0);
  });

  it('should detect conflict for sessions completely contained within another', () => {
    const newSession: Session = {
      id: '4',
      title: 'Nested Session',
      startTime: '2026-04-19T10:15:00Z',
      endTime: '2026-04-19T10:45:00Z',
      roomId: 'room-1',
      speakerId: 'sp-1',
      description: 'Test',
      tags: [],
      level: 'intermediate',
      status: 'upcoming',
      type: 'session'
    };

    const conflicts = checkConflicts(mockAgenda, newSession);
    expect(conflicts.length).toBe(1);
    expect(conflicts[0].id).toBe('1');
  });

  it('should detect conflict for sessions starting at the same time', () => {
    const newSession: Session = {
      id: '5',
      title: 'Parallel Session',
      startTime: '2026-04-19T10:00:00Z',
      endTime: '2026-04-19T10:30:00Z',
      roomId: 'room-1',
      speakerId: 'sp-1',
      description: 'Test',
      tags: [],
      level: 'intermediate',
      status: 'upcoming',
      type: 'session'
    };

    const conflicts = checkConflicts(mockAgenda, newSession);
    expect(conflicts.length).toBe(1);
  });
});
