# 07 — Technical Architecture  
## EventPilot AI · Implementation Architecture for a Modern Responsive Web Product

---

## Document Purpose

This document defines a practical technical architecture for **EventPilot AI** as a modern responsive web application. It is written to support implementation inside **Antigravity** with a clean frontend-first approach, mock-data compatibility, and future backend/API readiness.

The architecture is designed for:

- fast prototyping
- polished demo readiness
- scalable product thinking
- AI-assisted user interactions
- mobile-first event usage
- future production expansion

---

# 1. Product Architecture Overview

EventPilot AI should be built as a **responsive web application** with a frontend-centric architecture and a structured mock-data layer that can later be replaced by real APIs.

## Recommended Build Style

- Modern React-based frontend
- Component-driven UI architecture
- Mock JSON or TypeScript data models for demo phase
- API-ready service layer abstraction
- AI assistant connected through a dedicated handler/service
- Mobile-first responsive layout
- Lightweight, fast-loading deployment

## High-Level Layers

1. **Presentation Layer**  
   UI screens, sections, cards, layout, navigation, forms

2. **Application Layer**  
   State management, business logic, filtering, recommendation logic

3. **Data Layer**  
   Mock event data, sessions, speakers, venue map, announcements, attendees

4. **Integration Layer**  
   AI assistant service, optional external APIs, Google services integration

5. **Deployment Layer**  
   Static or hybrid deployment with environment-based configuration

---

# 2. Frontend Architecture

## Recommended Stack

For Antigravity, a practical frontend stack would be:

- **React**
- **Next.js** or modern Vite React setup
- **TypeScript**
- **Tailwind CSS**
- **Component-based routing**
- **Framer Motion** for premium motion
- **Lucide icons** for clean iconography

## Frontend Principles

- responsive by default
- reusable components
- clean separation of data and UI
- minimal prop drilling
- easy replacement of mock data with API calls
- page sections that can render independently

## Suggested App Areas

- Landing / marketing page
- Attendee dashboard
- Sessions page
- My agenda page
- Venue navigation page
- Live updates page
- AI assistant panel
- Help center
- Settings / accessibility

---

# 3. Component Structure

A clean component structure is critical for maintainability and speed.

## Suggested Folder Structure

```txt
/src
  /app
  /components
    /layout
    /dashboard
    /sessions
    /agenda
    /assistant
    /navigation
    /updates
    /networking
    /help
    /accessibility
    /shared
  /data
  /types
  /services
  /utils
  /hooks
  /store

  Component Categories
Layout Components
Navbar
Sidebar
Bottom mobile nav
Footer
Section wrapper
Page container
Shared UI Components
Button
Card
Badge
Modal
Drawer
Tabs
Input
Select
Toggle
Toast
Skeleton loader
Dashboard Components
Welcome banner
Today agenda preview
Recommended sessions list
Live updates widget
Quick actions grid
Networking highlights
Sessions Components
Session card
Session filters
Session detail drawer
Recommendation reason badge
Track tag
Capacity status badge
Agenda Components
Timeline agenda
Conflict alert card
Alternative suggestion card
Reminder settings module
Export button
Assistant Components
Floating assistant button
Chat drawer / modal
Prompt chips
AI message bubble
Action link cards
Escalation prompt
Navigation Components
Venue map panel
Route summary card
Wayfinding steps
Floor selector
Accessibility route toggle
Updates Components
Updates feed
Update alert banner
Update detail card
Notification preferences panel
Help Components
Help category cards
FAQ accordion
Emergency panel
Support contact card
Exit routing card
4. Mock Data Structure

For Antigravity demo implementation, mock data should be realistic, structured, and modular.

Recommended Mock Data Files
/data
  sessions.ts
  speakers.ts
  attendees.ts
  venue.ts
  announcements.ts
  userProfile.ts
  recommendations.ts
  faqs.ts
Example Session Data Model
type Session = {
  id: string;
  title: string;
  description: string;
  speakerId: string;
  track: string;
  format: "Talk" | "Workshop" | "Panel" | "Keynote";
  level: "Beginner" | "Intermediate" | "Advanced";
  startTime: string;
  endTime: string;
  roomId: string;
  capacity?: number;
  saved?: boolean;
  status: "scheduled" | "live" | "delayed" | "cancelled" | "completed";
  tags: string[];
};
Example Speaker Data Model
type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topics: string[];
  image: string;
};
Example Attendee Data Model
type Attendee = {
  id: string;
  name: string;
  role: string;
  company?: string;
  interests: string[];
  goals: string[];
  networkingVisible: boolean;
  savedSessionIds: string[];
};
Example Announcement Data Model
type Announcement = {
  id: string;
  type: "room_change" | "delay" | "cancellation" | "general" | "networking";
  title: string;
  message: string;
  createdAt: string;
  sessionId?: string;
  roomId?: string;
  priority: "low" | "medium" | "high" | "critical";
};
Mock Data Guidelines
keep file names intuitive
use separate files for each domain
use realistic times, names, rooms, and tags
avoid giant monolithic JSON files
make data easy to swap with real API responses later
5. Backend / API Readiness

Even if the demo uses mock data, the codebase should be structured as if backend APIs will be added later.

API-Ready Approach

Create a service layer between UI and data.

Example Service Files
/services
  sessionService.ts
  agendaService.ts
  assistantService.ts
  navigationService.ts
  updatesService.ts
  networkingService.ts
Why This Matters
UI components stay clean
mock data can later be replaced with fetch calls
business logic remains reusable
easier to plug into real backend after demo
Example Pattern
export async function getSessions() {
  return mockSessions;
}

Later this can become:

export async function getSessions() {
  const res = await fetch("/api/sessions");
  return res.json();
}
Recommended Future API Domains
/api/sessions
/api/speakers
/api/agenda
/api/announcements
/api/assistant
/api/networking
/api/venue
/api/user/preferences
6. AI Assistant Integration Flow

The AI assistant should feel useful, contextual, and event-specific.

Assistant Responsibilities
answer event-related questions
retrieve schedule/session/speaker information
help with directions
explain live updates
escalate to help center when needed
Practical Flow
User opens assistant
User types question
Frontend sends query to assistant handler
Handler checks intent:
session query
speaker query
venue query
schedule query
help/emergency query
Relevant structured data is retrieved
AI generates a contextual response
UI renders response and optional deep links
Recommended Demo Implementation

For Antigravity, use a hybrid approach:

predefined intent routing for predictable event questions
optional LLM response formatting for natural language polish
fallback safe response for unsupported queries
Example Assistant Pipeline
User question
→ intent parser
→ domain lookup in mock data
→ structured result
→ AI response formatter
→ response card with actions
Example Supported Questions
What are the best AI sessions today?
Where is Hall B?
What is my next session?
Which sessions are live right now?
Where is first aid?
I cannot find the exit
Good Demo Strategy

Do not make the assistant “know everything.”
Make it high quality within event scope.

7. Schedule Recommendation Logic

The schedule and recommendation engine is a key differentiator.

Inputs for Recommendation
attendee interests
attendee role
event goals
session tags
session format
time availability
saved sessions
session popularity
live event timing
Baseline Scoring Model

Each session can be scored using weighted criteria.

Example Factors
topic match
role relevance
goal relevance
schedule fit
conflict avoidance
diversity across tracks
session status
Example Pseudo Logic
recommendationScore =
  interestMatch * high weight
+ roleRelevance * medium weight
+ goalRelevance * medium weight
+ scheduleFit * medium weight
- timeConflictPenalty
- alreadyStartedPenalty
Agenda Recommendation Logic

When building a suggested agenda:

rank sessions by relevance
avoid overlapping sessions
add travel buffer between rooms
preserve keynote/high-priority sessions
offer alternatives if conflicts arise
Practical Demo Output

Each recommended session should include:

title
time
room
speaker
short recommendation reason

Example:

Recommended because it matches your interest in ML systems and fits your open 2:00 PM slot.

8. Venue Data Model

Venue navigation should be driven by structured data, even if the map is simplified for demo purposes.

Recommended Venue Entities
buildings
floors
rooms
pathways
points of interest
accessibility markers
Example Room Model
type Room = {
  id: string;
  name: string;
  building: string;
  floor: number;
  type: "session_room" | "hall" | "help_desk" | "restroom" | "food" | "quiet_zone" | "first_aid";
  accessible: boolean;
  coordinates?: { x: number; y: number };
};
Example Route Segment Model
type RouteSegment = {
  fromRoomId: string;
  toRoomId: string;
  estimatedMinutes: number;
  accessible: boolean;
  instructions: string[];
};
Venue Demo Strategy

Inside Antigravity, venue navigation can be implemented as:

visual floor layout image or SVG
highlighted destination
route summary card
step-by-step text instructions
accessibility-aware route switching

This is sufficient for a strong competition demo even without true live indoor GPS.

9. State Management Approach

The product has multiple interactive areas that need shared state.

Recommended State Strategy

Use a lightweight, scalable approach:

local component state for simple UI controls
context or Zustand for shared app state
derived state for filtered views
persistent storage for preferences and saved agenda
Good Shared State Areas
user profile
saved sessions
accessibility settings
assistant conversation state
live updates state
selected venue destination
notification preferences
Suggested Store Shape
type AppState = {
  userProfile: UserProfile;
  savedSessionIds: string[];
  accessibilityMode: boolean;
  selectedRoute: string | null;
  updates: Announcement[];
  assistantMessages: AssistantMessage[];
};
Persistence

Use:

localStorage for demo persistence
session storage for temporary UI state if needed

This makes the demo feel more real when refreshed.

10. Deployment Readiness

The project should be easy to deploy and share publicly.

Recommended Deployment Targets
Vercel
Netlify
Firebase Hosting
GitHub Pages for static-only version
Deployment Requirements
environment variables supported
production build stable
mobile-friendly on first load
clean routing configuration
lightweight assets
SEO-ready landing page metadata
Demo Deployment Checklist
public repo
responsive site verified
no broken links
fallback mock data always available
no hard dependency on unavailable APIs
environment-safe AI keys
fast initial page load
11. Google Services Integration Opportunities

Since the project is event-focused and Antigravity-friendly, Google services can strengthen the implementation or future roadmap.

Practical Opportunities
Google Maps Platform

Use for:

venue location context
nearby transport or hotels
external area navigation outside the venue
Google Calendar Integration

Use for:

exporting attendee agenda
adding sessions directly to user calendar
syncing reminders
Firebase

Use for:

authentication if needed later
real-time announcements
Firestore event data
hosting
analytics
Gemini / Google AI APIs

Use for:

assistant response generation
recommendation reasoning text
summarization of updates
conversational event help
Google Analytics

Use for:

user flow tracking
feature usage metrics
engagement analysis
Best Demo Positioning

Even if all integrations are not fully built, the architecture should clearly show where they would plug in.

12. Security Considerations

Even demo products should show strong security thinking.

Core Security Principles
never expose secret API keys in client code
sanitize assistant input and user-generated content
validate all request payloads
restrict assistant domain to event-related responses where possible
avoid collecting unnecessary personal data
Frontend Safety Measures
environment variables for external keys
safe rendering of dynamic content
no dangerous HTML injection
fallback for malformed data
Future Production Security Considerations
role-based access for organiser tools
authenticated attendee sessions
secure API routes
rate limiting assistant queries
audit logging for critical admin actions
13. Performance Considerations

Event users are often on mobile data, in crowded venues, and under time pressure.

Performance Priorities
fast first paint
low bundle size
minimal blocking scripts
efficient image handling
reusable lightweight components
Practical Tactics
lazy-load heavy sections
optimize images
avoid unnecessary rerenders
memoize derived lists where helpful
use SVG/icons efficiently
keep map rendering lightweight
UX Performance Goals
assistant opens instantly
agenda interactions feel immediate
updates feed renders quickly
navigation screen loads fast on mobile
14. Accessibility Considerations

Accessibility is not an add-on for EventPilot AI. It is a core product requirement.

Technical Accessibility Requirements
semantic HTML
keyboard navigation support
visible focus styles
screen reader labels
proper heading hierarchy
color contrast compliance
reduced motion support
large tap targets
Product-Specific Accessibility Needs
step-free route logic
high-contrast mode
adjustable text sizing
clear emergency pathways
map alternatives in text form
alerts that include accessibility context
Demo Standard

Even in Antigravity, ensure:

buttons are keyboard accessible
forms have labels
chat assistant is navigable
maps have text-based direction alternatives
color alone is never the only signal
15. Recommended Practical Build Sequence

For implementation inside Antigravity, the product should be built in layers.

Phase 1 — Core Shell
landing page
navbar
dashboard layout
responsive design system
mock data setup
Phase 2 — Core User Value
sessions listing
agenda planner
live updates feed
assistant UI
venue navigation section
Phase 3 — Product Polish
accessibility settings
help center
networking cards
animations
empty states
export features
Phase 4 — Integration Readiness
service abstraction cleanup
API-ready structure
deployment prep
metadata and SEO
analytics hooks
16. Final Implementation Principle

Build the product as if it will become real after the demo.

That means:

clean components
realistic data
believable logic
polished UI
API-ready architecture
fast and accessible interactions