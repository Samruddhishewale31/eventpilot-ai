
# 03 — User Flows  
## EventPilot AI · Physical Event Experience Companion

---

This document defines the primary user journeys for EventPilot AI. These flows help guide UI/UX design, frontend implementation, and AI integration.

---

# Flow 01 — First-Time Visitor Onboarding

## Trigger  
User opens EventPilot AI for the first time via QR code, email link, or event page.

## Goal  
Provide a personalised experience in under 90 seconds.

## Steps

1. Welcome screen with **Set Up Your Experience** CTA  
2. Event detected automatically or registration code entered  
3. Quick profile questions:

- Role (Student / Professional / Speaker / Organiser)  
- Interests  
- Goal (Learn / Network / Both)  
- Accessibility needs  
- Familiar with venue?  

4. AI processes answers in background  
5. Dashboard loads with:

- Recommended sessions  
- Suggested schedule  
- Live updates  
- Venue guide prompt  

## Decision Logic

- Invalid code → Continue as guest  
- Accessibility selected → Accessibility Mode auto-enabled  

## Outcome

User gets a ready-to-use personalised dashboard instantly.

---

# Flow 02 — Exploring Recommended Sessions

## Trigger  
User taps **Sessions** or **Recommended for You**

## Goal  
Help users find valuable sessions quickly.

## Steps

1. Ranked session list shown with:

- Title  
- Speaker  
- Time  
- Room  
- Why it’s recommended  

2. Filters available:

- Topic  
- Time  
- Format  
- Speaker type  

3. User opens session detail page  
4. Taps **Add to My Schedule**  
5. Conflict detection checks timing clashes  

## Decision Logic

- No preferences → Popular sessions shown  
- Live event → Past sessions deprioritised  

## Outcome

User finds 3–5 relevant sessions with minimal effort.

---

# Flow 03 — Saving Personal Agenda

## Trigger  
User adds first session or opens **My Agenda**

## Goal  
Create a reliable, conflict-free schedule.

## Steps

1. Timeline agenda view by day  
2. Add sessions from recommendations/search  
3. Overlapping sessions flagged  
4. AI suggests alternatives  
5. Travel-time warning shown if tight schedule  
6. Export to calendar (.ics) or share link  
7. Optional reminders enabled  

## Decision Logic

- No saved sessions → AI starter agenda shown  
- Cancelled session → Removed automatically + alternatives suggested  

## Outcome

User trusts agenda as their daily operating plan.

---

# Flow 04 — Asking AI Assistant

## Trigger  
User taps assistant icon or types query.

## Goal  
Give instant answers without menu searching.

## Example Questions

- When does AI in Healthcare start?  
- Where is Hall B lunch area?  
- Which sessions are live now?  
- Who is speaking on design today?  

## Steps

1. Chat panel opens  
2. User types question  
3. AI replies with direct answer  
4. Deep links to session/map when relevant  
5. Supports follow-up context  

## Decision Logic

- Saved session question → Uses personal schedule  
- Unsupported query → Offers human help  

## Outcome

Useful answer in under 10 seconds.

---

# Flow 05 — Venue Navigation

## Trigger  
User taps **Get Directions**

## Goal  
Guide attendee through venue easily.

## Steps

1. Interactive map opens  
2. Destination highlighted  
3. Route drawn with ETA  
4. Turn-by-turn instructions shown  
5. Accessibility route available  
6. Arrival confirmation shown  

## Decision Logic

- Room changed → Auto-updates route  
- Full room → Warning shown before walking  

## Outcome

User reaches room without asking staff.

---

# Flow 06 — Live Updates Feed

## Trigger  
Push notification, banner, or Updates tab.

## Goal  
Keep user informed without spam.

## Steps

1. Feed categories:

- Room Change  
- Delay  
- Cancellation  
- Announcement  
- Networking Alert  

2. Relevant updates pinned first  
3. Update detail page explains action needed  
4. One-tap actions:

- Navigate now  
- Find alternative session  

5. Notification preferences adjustable  

## Decision Logic

- No saved sessions → All updates shown  
- Many updates → Grouped into one notification  

## Outcome

User avoids confusion and missed sessions.

---

# Flow 07 — Help & Emergency Support

## Trigger  
User taps Help icon or distress query detected.

## Goal  
Provide support within two taps.

## Sections

### Event Help

- FAQs  
- Contact organiser  
- Lost & Found  
- Wi-Fi help  

### Venue Support

- First aid location  
- Security  
- Exits  
- Accessibility support  

### Emergency

- One-tap emergency call  
- Nearest exit route  
- Safety instructions  

## Decision Logic

- Medical/safety query → Emergency screen shown immediately  

## Outcome

Fast access to human help and safety info.

---

# Flow 08 — Accessibility Setup

## Trigger  
Onboarding or Settings > Accessibility

## Goal  
Adapt platform in under 30 seconds.

## Settings

### Display

- Text Size  
- High Contrast  
- Reduced Motion  

### Navigation

- Step-free route  
- Lift-first routing  
- Avoid crowded areas  

### Support

- Screen reader mode  
- Accessibility contact  
- Quiet zones visible  

## Smart Mode Toggle

One tap enables:

- Large text  
- High contrast  
- Step-free routing  

## Outcome

Inclusive experience without repeated setup.

---

# Flow Summary

| Flow | Entry Point | AI Role |
|------|------------|--------|
| Onboarding | QR / URL | Profile recommendations |
| Sessions | Home tab | Personal ranking |
| Agenda | My Agenda | Conflict resolution |
| Assistant | Chat icon | NLP answers |
| Navigation | Map / Session | Smart routing |
| Updates | Notifications | Relevance filtering |
| Help | Help icon | Distress detection |
| Accessibility | Settings | Adaptive preferences |

---

# Critical Flows

The most important product flows are:

1. Onboarding  
2. AI Assistant  
3. Help & Emergency  

If these fail, the product fails.

---