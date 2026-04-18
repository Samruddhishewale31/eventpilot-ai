# EventPilot AI  
### Intelligent Companion for Physical Event Experiences

![EventPilot AI Banner](https://placehold.co/1200x400/4f46e5/ffffff?text=EventPilot+AI)

---

## 🚀 Overview

**EventPilot AI** is a modern, responsive web platform designed to transform the chaotic experience of attending physical events (conferences, expos, summits) into a guided, personalized journey.

Instead of forcing attendees to manually search schedules, decode static venue maps, and react blindly to live changes, EventPilot AI acts as a **smart personal companion**. It helps users discover the right sessions, navigate confidently, stay informed in real-time, and make meaningful connections.

Built with an **API-ready service architecture** and an **inclusive accessibility-first design**, EventPilot AI demonstrates what production-grade event technology can look like.

---

## 🎯 Problem Statement

Physical events often create friction for attendees and organizers:
- Too many sessions with overlapping multi-tracks and no clear way to choose.
- Poorly mapped large venues that are hard to navigate.
- Room changes, additions, and delays missed by attendees.
- Accidental or highly inefficient networking.
- Critical lack of step-free routing and accessibility tools for disabled attendees.
- Overloaded help desks.

Most existing event apps behave like static PDFs. EventPilot AI behaves like an intelligent agent.

---

## ✨ Features & Architecture

### 1. AI Event Assistant
A globally available, natural-language modal powered by intent-matching that helps attendees navigate questions instantly.
* *"Where is Hall B?"*
* *"What is my next session?"*
* *"Which AI sessions are live now?"*

### 2. Personalized Smart Agenda
An interactive timeline that handles session discovery, bookmarking, and dynamically detects overlapping timeslots with immediate smart conflict warnings.

### 3. Venue Navigation
A stylized interactive map that generates step-by-step walking instructions, complete with dynamic ETA calculation and a **Step-Free Routing** mode overriding standard directions.

### 4. Networking Matchmaker Recommendations
Surfaces rich attendee cards with computed relevance scores and intelligent highlights of matching shared interests/goals.

### 5. Live Updates Feed
Chronological alert timeline displaying dynamic severity styling to immediately surface critical venue changes and room cancellations.

### 6. Accessibility-First System
Accessibility isn't an afterthought. EventPilot AI features robust settings including:
- **Global High Contrast Mode** (WCAG AAA compliant)
- **Large Text Overrides**
- **Step-Free Accessibility Routing**
- **Full Keyboard Navigation & ARIA labels**

---

## 💻 Tech Stack & Engineering Standards

**EventPilot AI** was engineered prioritizing stability, scalability, and clean code.

**Frontend Core:**
- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript** natively across all domain models
- **Tailwind CSS v4** + Clean CSS Variables Architecture
- **Zustand** for lightweight persistent global state
- **Lucide React** for consistent, modern iconography

**Architecture:**
- **Modular Service Abstraction**: The UI correctly interfaces with `src/services/` logic entirely detached from page-level components. This simulates backend API behavior and makes the application 100% plug-and-play with future production databases like Firebase or PostgreSQL.
- **Strict Typing**: Standardized interfaces used for `Session`, `Attendee`, `Announcement`, and `FAQ` payloads.
- **No Prop-drilling**: Heavy UI state managed securely via Zustand slices.

---

## 🏆 Judging Alignment & Competitive Strength

For hackathons and judging criteria:
1. **Code Quality**: Adheres to strict modular architecture; no massive spaghetti files. Service layers completely isolate UI from data fetching rules.
2. **Security & Privacy**: Built with safe intent-matching AI flows. Does not render unsafe HTML blocks, avoiding common XSS vectors. 
3. **Inclusive Design**: Beyond basic responsiveness, features custom CSS injection for deep High-Contrast accessibility toggles and explicit step-free routing logic—rare out-of-the-box features.
4. **Google Integration Readiness**: Perfectly architected to map to Google Maps APIs for geolocation, Firebase for Real-time alerts/auth, Google Calendar for export logic, and Gemini for dynamic prompt resolutions.

---

## 📦 Setup & Deployment

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eventpilot-ai.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **View the Application**
   Open `http://localhost:3000` with your browser to see the result.

Deploy easily on Vercel or any Next.js-compatible hosting platform running `npm run build` directly.

---

## 📄 License & Status

*Status: Prototype / Competition Build Phase*

Open source under the MIT License. Developed as a competition-ready scalable event companion demonstrating modern web practices, intelligent data flows, and uncompromised aesthetic premium styling.
