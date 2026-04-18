# 04 — Feature Specifications  
## EventPilot AI · Physical Event Experience Companion

---

## Document Purpose

This document defines the core product features of **EventPilot AI** in a structured product-spec format. Each feature is designed to improve the attendee experience at physical events through intelligent guidance, real-time support, and personalized decision-making.

---

# Feature 01 — AI Assistant

## Purpose

Provide attendees with an instant conversational interface to access any event-related information without navigating menus.

## User Value

- Fast answers in seconds  
- Reduces confusion and search time  
- Makes large events feel easier to navigate  
- Provides a modern AI-first experience  

## Main UI Components

- Floating assistant button  
- Chat panel / modal  
- Suggested prompt chips  
- Search bar with natural language input  
- Rich response cards (sessions, maps, links)

## Core Interactions

- Ask questions like:
  - Where is Hall B?
  - Which sessions are live now?
  - Who is speaking on AI today?
- Receive contextual responses  
- Tap deep links to maps, sessions, schedule, or help

## Logic Behind the Feature

- NLP interprets user intent  
- Connects to event database (sessions, venue, speakers, support)  
- Prioritises personal schedule data when relevant  
- Maintains session context for follow-up questions

## Future Enhancements

- Voice assistant mode  
- Multilingual support  
- Speaker Q&A assistant  
- Offline cached responses  

---

# Feature 02 — Personalized Agenda Planner

## Purpose

Help attendees build a conflict-free and optimized personal schedule.

## User Value

- Saves time planning  
- Reduces missed sessions  
- Prevents scheduling clashes  
- Creates confidence throughout the day

## Main UI Components

- Timeline agenda view  
- Add-to-schedule buttons  
- Conflict warning modal  
- AI recommendation cards  
- Calendar export button

## Core Interactions

- Add sessions to schedule  
- Receive clash warnings  
- View daily timeline  
- Enable reminders  
- Export schedule to calendar

## Logic Behind the Feature

- Detects overlapping sessions  
- Calculates travel time between rooms  
- Prioritises user interests and goals  
- Suggests alternatives automatically

## Future Enhancements

- Group agendas for teams  
- Smart breaks / meal planning  
- Learning-path based agendas  
- Auto-reschedule during delays

---

# Feature 03 — Venue Navigation

## Purpose

Guide attendees through large venues quickly and accurately.

## User Value

- Reduces stress  
- Saves time between sessions  
- Eliminates need to ask staff  
- Improves first-time attendee confidence

## Main UI Components

- Interactive venue map  
- Search destination bar  
- Route preview card  
- Turn-by-turn instruction list  
- Accessibility routing toggle

## Core Interactions

- Tap “Get Directions”  
- View ETA and route  
- Switch floors/buildings  
- Follow landmark instructions

## Logic Behind the Feature

- Uses venue floor-plan data  
- Calculates shortest or accessible route  
- Updates route if room changes occur  
- Estimates walking time dynamically

## Future Enhancements

- Indoor live location tracking  
- AR navigation mode  
- Crowd-aware route optimization  
- Beacon-based positioning

---

# Feature 04 — Live Updates & Announcements

## Purpose

Ensure attendees know important event changes immediately.

## User Value

- Avoids wrong-room confusion  
- Prevents missed sessions  
- Keeps users informed in real time  
- Reduces chaos during live operations

## Main UI Components

- Updates feed  
- Push notifications  
- Alert banners  
- Update detail cards  
- Notification settings panel

## Core Interactions

- Receive room change alerts  
- Open update detail page  
- Navigate directly from alert  
- Filter critical-only notifications

## Logic Behind the Feature

- Prioritises updates affecting saved sessions  
- Groups simultaneous alerts  
- Sends targeted notifications by attendee relevance

## Future Enhancements

- SMS backup alerts  
- Real-time occupancy alerts  
- Smart summarised daily recap  
- Sponsor announcements with relevance ranking

---

# Feature 05 — Networking Recommendations

## Purpose

Help attendees make meaningful professional connections.

## User Value

- Better ROI from attending events  
- Easier networking for shy users  
- Saves time finding relevant people  
- Creates intentional networking moments

## Main UI Components

- Recommended people cards  
- Match score tags  
- Suggested meet-up windows  
- Nearby attendee discovery panel

## Core Interactions

- Browse suggested attendees  
- View shared interests  
- Save people to meet list  
- Receive ideal meet timing suggestions

## Logic Behind the Feature

- Uses role, industry, interests, goals, and session overlap  
- Ranks high-value potential matches  
- Suggests networking during free schedule windows

## Future Enhancements

- QR connect exchange  
- AI intro message generation  
- Group networking circles  
- Smart follow-up reminders

---

# Feature 06 — Accessibility Mode

## Purpose

Create an inclusive event experience for users with different accessibility needs.

## User Value

- Equal access to event experience  
- Less friction and stress  
- Easier movement through venue  
- Better confidence and independence

## Main UI Components

- Accessibility settings page  
- One-tap accessibility mode toggle  
- High contrast theme  
- Large text controls  
- Accessible map layer

## Core Interactions

- Enable accessibility mode  
- Choose step-free routing  
- Increase text size  
- Show quiet rooms / restrooms

## Logic Behind the Feature

- Applies saved preferences globally  
- Defaults routes to lifts/ramps  
- Enhances alerts with accessibility context

## Future Enhancements

- Sign-language support  
- Voice navigation mode  
- Sensory overload quiet alerts  
- Personal accessibility profiles

---

# Feature 07 — Help & Emergency Center

## Purpose

Give attendees immediate support and safety access.

## User Value

- Faster issue resolution  
- Better safety confidence  
- Less dependency on searching staff  
- Critical help available instantly

## Main UI Components

- Help home screen  
- FAQ categories  
- Emergency quick-call button  
- Exit map  
- Support chat/contact module

## Core Interactions

- Find first aid  
- Contact support team  
- View emergency procedures  
- Locate nearest exit

## Logic Behind the Feature

- Distress keywords trigger emergency flow  
- Uses current zone to suggest nearest exits/help  
- Routes requests to correct support channel

## Future Enhancements

- Live support chat agents  
- SOS sharing with staff  
- Lost-person assistance mode  
- Incident reporting dashboard

---

# Feature 08 — Feedback & Calendar Export

## Purpose

Capture attendee insights and improve utility after scheduling.

## User Value

- Share feedback easily  
- Keep schedule in personal calendar  
- Better post-event follow-up

## Main UI Components

- Feedback form modal  
- Session rating cards  
- Export to Google / Apple / Outlook Calendar  
- Share agenda link button

## Core Interactions

- Rate sessions  
- Submit suggestions  
- Export agenda as .ics file  
- Share schedule with team/friends

## Logic Behind the Feature

- Feedback tied to attended sessions  
- Export converts agenda into calendar format  
- Prompts appear contextually after sessions

## Future Enhancements

- AI-generated event summary  
- Networking follow-up digest  
- Organizer analytics dashboard  
- Loyalty rewards for feedback

---

# Product Design Principles

- Mobile-first experience  
- Minimal friction onboarding  
- Real-time usefulness over static information  
- AI where it adds clear value  
- Accessibility by default  
- Fast, intuitive, reliable interactions

---

# Success Metrics

- Session save rate  
- Daily active attendees  
- Navigation usage rate  
- Assistant response satisfaction  
- Networking interactions created  
- Reduced support desk load  
- Notification open rate  

---

# Final Product Vision

EventPilot AI transforms event attendance from reactive and stressful to guided, personalized, and highly productive.

---