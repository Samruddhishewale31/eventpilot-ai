# EventPilot AI  
### The Intelligent Intelligence Layer for Physical Event Experiences

![EventPilot AI Banner](public/eventpilot_ai_banner.png)

---

## 🚀 Overview

**EventPilot AI** is a state-of-the-art AI-powered event companion designed to solve the friction of navigating, planning, and networking at large-scale physical summits and conferences. 

Instead of static maps and rigid schedules, EventPilot AI provides a **dynamic, natural-language interface** and **context-aware intelligence** that adapts to live venue changes, personalizes attendee journeys, and facilitates high-value networking matches.

---

## 🎯 Project Identity

- **Vertical**: Artificial Intelligence & Event Technology
- **Level**: Production-Ready MVP
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, Zustand, Firebase, Gemini 1.5 Pro, Google Maps API.

---

## 🧠 Approach & Logic

### Problem Statement
Large-scale events are chaotic. Attendees struggle with:
- **Navigation**: Finding rooms in massive, multi-floor venues.
- **Scheduling**: Managing overlapping sessions across 10+ parallel tracks.
- **Networking**: Identifying relevant people in a crowd of thousands.
- **Accessibility**: Lack of clear, step-free routing for disabled attendees.

### The "Nexus" Solution
EventPilot AI introduces the **Stellar Nexus**, a centralized AI engine that treats every event data point (session, room, attendee) as a node in a connected graph.
- **Natural Language First**: Users query the "Nexus" via a Gemini-powered assistant to get instant, contextual answers.
- **Defensive Scheduling**: The system doesn't just list sessions; it calculates time-conflicts and suggests alternatives.
- **Spatial Intelligence**: Real-time Google Maps integration with indoor-aware descriptive routing.

---

## 🛠️ How it Works

### 1. AI Assistant (Gemini Pro)
The assistant uses a **server-side Gemini 1.5 API route**. We inject the event's full context (sessions, FAQs, venue layout) into the system prompt, allowing the AI to answer specific event questions without needing a fine-tuned model.

### 2. Live Venue Atlas (Google Maps)
Integrates the **Google Maps JavaScript API** to provide familiar, high-performance navigation. It includes custom markers for keynote halls, breakout rooms, and help desks, overlaying the event's spatial data on a real map.

### 3. Smart Agenda (Zustand)
A lightweight state management layer tracks user bookmarks. When a user tries to save a session, the logic checks for overlaps with existing sessions and triggers a "Conflict Detection" warning.

### 4. Networking Matchmaker
Uses a scoring algorithm to compare user interest tags with other attendees, surfacing the top 3 high-relevance matches to maximize networking ROI.

---

## 📊 Mapping to Judging Criteria

| Criteria | Implementation Highlights |
| :--- | :--- |
| **Code Quality** | Modular service-based architecture, strict TypeScript typing, and clean component separation (`src/services`, `src/components/ui`). |
| **Security** | Environment variable protection for all API keys, server-side AI execution, Zod payload validation, and defensive error handling. |
| **Efficiency** | Optimized with lazy-loading for heavy assets (Google Maps), lightweight state (Zustand), and responsive image handling. |
| **Testing** | Comprehensive `tests/` folder with 10 Vitest-powered unit and integration tests covering core logic and auth flows. |
| **Accessibility** | Semantic HTML, full keyboard navigation, ARIA labels, "High Contrast" mode, and unique "Step-Free Routing" for physical accessibility. |
| **Google Services** | Deep integration with **Firebase Auth**, **Firebase Analytics**, **Gemini 1.5 Pro (Vertex AI ready)**, and **Google Maps API**. |

---

## 🔒 Security Practices

- **Secret Guarding**: No API keys are exposed to the client. The Gemini API is called via a secure `/api/assistant` server-side route.
- **Input Validation**: All API requests are validated using **Zod** schemas to prevent malformed data or injection attacks.
- **Defensive Fallbacks**: If Google Services are unavailable (e.g., missing API keys), the app gracefully enters "Autonomous Mode," allowing local features to work without crashing.

---

## ♿ Accessibility Signal

- **Global High Contrast Mode**: Built-in CSS system to ensure WCAG AAA compliance.
- **Adaptive UI**: Large tap targets for mobile use and descriptive `aria-labels` for screen readers.
- **Spatial Inclusion**: The navigation engine highlights step-free paths (elevators/ramps) for mobility-impaired attendees.

---

## 🧪 Testing Approach

EventPilot AI includes a robust testing suite powered by **Vitest**.

**Coverage Includes:**
- **Unit**: Agenda conflict detection logic.
- **Unit**: Networking relevance scoring.
- **Unit**: Assistant fallback handling.
- **Component**: Auth page rendering.
- **Integration**: Complete guest-to-dashboard workflow.

**How to run tests:**
```bash
npm test
```

---

## ⚙️ Setup & Deployment

1. **Clone & Install**
   ```bash
   git clone https://github.com/your-username/eventpilot-ai.git
   npm install
   ```
2. **Environment Variables**
   Create a `.env.local` file with:
   - `NEXT_PUBLIC_FIREBASE_*` (Auth/Analytics)
   - `GEMINI_API_KEY` (AI Engine)
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (Venue Map)
3. **Run**
   ```bash
   npm run dev  # Development
   npm run build # Production check
   ```

---

## 🔗 Live Demo & Submission

- **Live Demo**: [https://eventpilot-ai.vercel.app](https://eventpilot-ai.vercel.app) *(Placeholder)*
- **GitHub Repository**: [https://github.com/your-username/eventpilot-ai](https://github.com/your-username/eventpilot-ai)

---

## 🚀 Future Improvements

- **Real-time Proximity Alerts**: Integration with Google Proximity Beacon API.
- **Multi-lingual Support**: Leveraging Gemini's native translation capabilities for global events.
- **Calendar Direct Sync**: Deep integration with Google Calendar API for external schedule management.

---

*Status: Final Submission Pass Complete. Built for Impact.*
