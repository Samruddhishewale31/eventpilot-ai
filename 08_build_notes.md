# 08 — Build Notes  
## EventPilot AI · AI Coding Agent Implementation Guide

---

# Document Purpose

This file is a direct implementation guide for an AI coding assistant tasked with building **EventPilot AI** as a polished, modern, responsive web product.

The output should feel like a real startup-grade product, not a hackathon prototype.

Prioritize:

- quality UI
- clean architecture
- believable functionality
- strong responsiveness
- accessibility
- polished interactions
- maintainable code

---

# 1. Project Objective

Build **EventPilot AI**, a responsive event companion website that helps users:

- discover sessions
- plan personalized schedules
- navigate venues
- receive live updates
- ask an AI assistant questions
- find networking opportunities
- access support quickly
- use accessibility-first features

The product should feel premium, elegant, modern, and competition-worthy.

---

# 2. Required Pages

Implement these pages or equivalent routed views.

## Public Marketing / Landing

- Hero section
- Product value proposition
- Feature showcase
- Product preview/dashboard screenshots
- CTA section
- Footer

## Application Pages

### Dashboard

Main user hub after entry.

### Sessions

Browse and discover sessions.

### Agenda

Personal saved schedule.

### Venue Navigation

Map + route guidance.

### Updates

Announcements and live alerts.

### Assistant

Conversational event helper.

### Networking

Recommended attendee matches.

### Help Center

Support + emergency access.

### Settings

Preferences + accessibility.

---

# 3. Component Expectations

Use reusable modular components.

## Core Shared Components

- Button
- Card
- Badge
- Input
- Select
- Modal
- Drawer
- Tabs
- Toggle
- Tooltip
- Toast
- Skeleton Loader

## Layout Components

- Navbar
- Footer
- Sidebar (desktop)
- Mobile bottom nav
- Page container
- Section wrapper

## Product Components

- Session card
- Speaker card
- Agenda timeline item
- Update alert card
- Route card
- Chat bubble
- Match card
- FAQ accordion
- Emergency banner

---

# 4. Functionality Expectations

All major UI should behave realistically even with mock data.

## Sessions

- filter by track
- filter by time
- save to agenda
- show recommendations
- session detail modal

## Agenda

- add/remove sessions
- detect overlaps
- show reminders
- export button (mock allowed)

## Navigation

- select destination
- route instructions
- ETA display
- accessibility route toggle

## Updates

- live feed list
- severity tags
- pinned relevant updates

## Assistant

- chat UI
- prebuilt useful responses
- prompt suggestions
- contextual responses from mock data

## Networking

- suggested matches
- shared interests
- meet windows

## Help

- FAQs
- support contact
- emergency shortcuts

## Settings

- dark mode optional
- accessibility mode
- text size options

---

# 5. Design Expectations

The UI must feel premium and highly polished.

## Desired Style

- elegant
- modern SaaS quality
- startup-grade
- clean spacing
- soft shadows
- rounded corners
- subtle gradients
- refined typography

## Must Include

- visual hierarchy
- whitespace
- consistent spacing
- polished cards
- hover states
- tasteful motion

## Inspiration Level

Should feel closer to:

- Stripe
- Linear
- Notion
- Apple product microsites

Not like a school project.

---

# 6. Accessibility Expectations

Accessibility is mandatory.

## Required

- semantic HTML
- keyboard navigation
- visible focus states
- color contrast compliance
- labeled inputs
- screen reader friendly buttons
- reduced motion support
- large tap targets

## Product-Specific

- accessibility mode toggle
- step-free route option
- larger text mode
- text alternatives for maps

---

# 7. Code Quality Expectations

Use production-style code.

## Requirements

- reusable components
- no giant files
- clear naming
- modular folders
- clean state logic
- no duplicated UI blocks
- comments only when useful
- no dead code

## Prefer

- TypeScript
- typed props
- composable patterns
- maintainable structure

---

# 8. Responsiveness Expectations

The site must look excellent on:

- mobile
- tablet
- desktop
- large desktop

## Mobile Rules

- stacked layouts
- sticky actions where useful
- touch-friendly controls
- readable typography

## Desktop Rules

- multi-column dashboards
- side navigation if appropriate
- expanded data cards

## Never Allow

- broken grids
- horizontal scrolling
- clipped text
- tiny buttons

---

# 9. What to Avoid

Do NOT build:

- generic template-looking UI
- cluttered dashboards
- random colors
- oversized animations
- fake unusable features
- poor spacing
- inconsistent fonts
- low contrast text
- excessive paragraphs
- obvious placeholder lorem ipsum

Do NOT overcomplicate backend logic for demo.

Do NOT sacrifice polish for complexity.

---

# 10. Mock Data Structure

Use realistic structured mock data files.

## Suggested Files

```txt
/data
  sessions.ts
  speakers.ts
  attendees.ts
  venue.ts
  updates.ts
  faqs.ts
  user.ts