# EventPilot AI  
### Intelligent Companion for Physical Event Experiences

---

## Overview

**EventPilot AI** is a modern web-based platform designed to improve the experience of attending physical events such as conferences, expos, summits, college fests, and large professional gatherings.

Instead of forcing attendees to manually search schedules, decode venue maps, and react to live changes, EventPilot AI acts as a smart personal companion that helps users plan their day, navigate confidently, stay informed, and make meaningful connections.

The platform combines practical UX design, structured event data, and AI-driven assistance to make live events smoother, smarter, and more accessible.

---

## Problem Statement

Physical events often create unnecessary friction for attendees and organizers.

Common problems include:

- Too many sessions and no clear way to choose
- Schedule clashes across multiple tracks
- Difficulty navigating large venues
- Room changes and delays missed by attendees
- Random, inefficient networking
- Limited accessibility support
- Overloaded help desks and support teams

Most existing event apps behave like static PDFs rather than intelligent tools.

---

## Our Solution

EventPilot AI transforms event attendance into a guided, personalized experience.

It helps users:

- discover relevant sessions
- build smart schedules
- navigate venues
- receive real-time updates
- ask event questions instantly
- find relevant people to meet
- access emergency/help resources quickly
- use accessibility-first settings

---

## Key Features

### AI Event Assistant

Ask natural questions such as:

- What is my next session?
- Where is Hall B?
- Which AI sessions are live now?
- Where can I find lunch?

### Personalized Agenda Planner

Create a custom schedule with:

- session saving
- overlap detection
- smart alternatives
- reminders
- export options

### Venue Navigation

Navigate complex venues with:

- room directions
- route steps
- ETA estimates
- accessibility-friendly routing

### Live Updates

Receive relevant alerts for:

- room changes
- delays
- cancellations
- announcements

### Networking Recommendations

Discover attendees worth meeting based on:

- interests
- roles
- goals
- session overlap

### Accessibility Mode

Built-in inclusive tools:

- larger text
- high contrast mode
- reduced motion
- step-free routing
- quiet zone visibility

### Help & Emergency Center

Quick access to:

- support FAQs
- first aid
- exits
- venue help
- emergency actions

---

## How the Solution Works

### Step 1 — User Setup

Attendees open the website and answer a few quick onboarding questions:

- role
- interests
- goals
- accessibility needs

### Step 2 — Personalization Engine

The system recommends sessions and creates an initial agenda based on user preferences.

### Step 3 — Live Event Usage

During the event, users can:

- check schedules
- ask the AI assistant
- get updates
- navigate rooms
- manage their day

### Step 4 — Ongoing Adaptation

Recommendations and updates adjust dynamically as the event changes.

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui

### Backend / Logic

- Next.js API Routes / Server Actions
- Service Layer Architecture
- Structured Mock Data (API-ready)

### UI / Design

- Responsive design system
- Mobile-first architecture
- Accessibility-first patterns

### Deployment

- Vercel / Netlify / Firebase Hosting

---

## Google Services Integration

EventPilot AI is designed for natural integration with the Google ecosystem.

### Google Calendar

- export personal agenda
- add reminders

### Google Maps Platform

- venue location context
- nearby travel assistance

### Firebase

- real-time announcements
- authentication
- hosting
- analytics

### Gemini / Google AI

- conversational assistant
- recommendation reasoning
- smart summaries

### Google Analytics

- user flow insights
- feature adoption metrics

---

## Folder Structure

```txt
eventpilot-ai/
│── docs/
│── design/
│── public/
│── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── hooks/
│   ├── types/
│   └── utils/
│── package.json
│── README.md