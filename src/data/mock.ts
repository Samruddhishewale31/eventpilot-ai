import { Session, Speaker, Room, Announcement, Attendee, FAQ } from "../types";

export const mockSpeakers: Speaker[] = [
  { id: "spk-1", name: "Dr. Sarah Chen", role: "Chief AI Officer", company: "Nexus Tech", bio: "Leading AI research with a focus on scalable NLP models and multimodal architectures. Pioneered the 'Nexus-7' reasoning engine.", topics: ["AI", "NLP", "Machine Learning"], image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=indigo&color=fff" },
  { id: "spk-2", name: "James Volton", role: "VP of Engineering", company: "CloudScale", bio: "Pioneer in distributed systems and micro-frontends. Architected one of the world's largest serverless infrastructures.", topics: ["Engineering", "Frontend", "Cloud"], image: "https://ui-avatars.com/api/?name=James+Volton&background=blue&color=fff" },
  { id: "spk-3", name: "Elena Rodriguez", role: "UX Director", company: "DesignOps", bio: "Expert in bridging the gap between analytics and human-centric design. Former design lead at Apple.", topics: ["Design", "UX", "Analytics"], image: "https://ui-avatars.com/api/?name=Elena+Rodriguez&background=purple&color=fff" },
  { id: "spk-4", name: "Marcus Thorne", role: "Head of Product", company: "Vanguard Systems", bio: "Former startup founder turned product leader. Focused on rapid-growth frameworks and consumer psychology.", topics: ["Product", "Leadership"], image: "https://ui-avatars.com/api/?name=Marcus+Thorne&background=green&color=fff" },
  { id: "spk-5", name: "Aisha Patel", role: "Security Researcher", company: "DefendNet", bio: "Specializes in zero-trust architecture and cloud security. Named 'Security Researcher of the Year' in 2025.", topics: ["Security", "Infrastructure"], image: "https://ui-avatars.com/api/?name=Aisha+Patel&background=red&color=fff" },
  { id: "spk-6", name: "Liam O'Connor", role: "Open Source Advocate", company: "MetaBuild", bio: "Contributor to numerous core web frameworks including React and Next.js.", topics: ["React", "Open Source"], image: "https://ui-avatars.com/api/?name=Liam+OConnor&background=020617&color=fff" },
  { id: "spk-7", name: "Sophia Martinez", role: "Sustainability Lead", company: "EcoWeb", bio: "Driving green computing initiatives across the tech industry.", topics: ["Sustainability", "Cloud"], image: "https://ui-avatars.com/api/?name=Sophia+Martinez&background=emerald&color=fff" },
  { id: "spk-8", name: "Kenzo Tanaka", role: "Principal Architect", company: "CyberDyne", bio: "Master of low-latency systems and real-time data processing.", topics: ["Backend", "Performance"], image: "https://ui-avatars.com/api/?name=Kenzo+Tanaka&background=slate&color=fff" },
  { id: "spk-9", name: "Maya Gold", role: "Venture Partner", company: "Vantage VC", bio: "Experienced investor focused on seed-stage AI startups.", topics: ["Startups", "Funding"], image: "https://ui-avatars.com/api/?name=Maya+Gold&background=amber&color=fff" },
  { id: "spk-10", name: "Vikram Singh", role: "DevOps Lead", company: "ScaleUp", bio: "Obsessed with CI/CD efficiency and Kubernetes orchestration.", topics: ["DevOps", "Infrastructure"], image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=cyan&color=fff" },
  { id: "spk-11", name: "Chloe Dupont", role: "Ethicist", company: "FairAI", bio: "Leading the conversation on algorithmic fairness and bias mitigation.", topics: ["Ethics", "AI"], image: "https://ui-avatars.com/api/?name=Chloe+Dupont&background=pink&color=fff" },
  { id: "spk-12", name: "Robert Sterling", role: "CTO", company: "FinTech Prime", bio: "Revolutionizing digital banking through high-frequency distributed ledgers.", topics: ["Fintech", "Security"], image: "https://ui-avatars.com/api/?name=Robert+Sterling&background=neutral&color=000" },
  { id: "spk-13", name: "Isabella Rossi", role: "Motion Designer", company: "Aura Creative", bio: "Pushing the boundaries of interactive web animations.", topics: ["Design", "Motion"], image: "https://ui-avatars.com/api/?name=Isabella+Rossi&background=f0f&color=fff" },
  { id: "spk-14", name: "Nolan Reed", role: "Chief Evangelist", company: "DevForce", bio: "Passionate about building developer communities and high-quality documentation.", topics: ["Developer Relations", "Documentation"], image: "https://ui-avatars.com/api/?name=Nolan+Reed&background=orange&color=fff" },
  { id: "spk-15", name: "Jasmine Wu", role: "Mobile Architect", company: "Swiftly", bio: "Expert in cross-platform mobile development and edge computing.", topics: ["Mobile", "Edge Computing"], image: "https://ui-avatars.com/api/?name=Jasmine+Wu&background=0ea5e9&color=fff" },
];

export const mockRooms: Room[] = [
  { id: "room-A", name: "Main Stage", building: "North Hall", floor: 1, type: "session_room", accessible: true },
  { id: "room-B", name: "Workshop Beta", building: "West Wing", floor: 2, type: "session_room", accessible: true },
  { id: "room-C", name: "Innovation Hub", building: "East Wing", floor: 1, type: "session_room", accessible: true },
  { id: "room-D", name: "Executive Lounge", building: "South Tower", floor: 3, type: "networking", accessible: true },
  { id: "room-E", name: "Food Court", building: "Central Atrium", floor: 1, type: "food", accessible: true },
  { id: "room-F", name: "Quiet Zone 204", building: "West Wing", floor: 2, type: "quiet_zone", accessible: true },
  { id: "room-G", name: "First Aid Unit", building: "North Hall", floor: 1, type: "first_aid", accessible: true },
  { id: "room-H", name: "Registration Desk", building: "South Lobby", floor: 1, type: "help_desk", accessible: true },
  { id: "room-I", name: "Seminar Room 4", building: "West Wing", floor: 2, type: "session_room", accessible: true },
  { id: "room-J", name: "Boardroom 101", building: "East Wing", floor: 1, type: "session_room", accessible: false },
];

export const mockSessions: Session[] = [
  // Day 1: May 15
  // 09:00 AM
  { id: "sess-01", title: "The Future of Generative AI", description: "An in-depth look at what's next for LLMs and multimodal AI architectures. We'll explore reasoning engines and the move toward agentic AI.", speakerId: "spk-1", track: "Artificial Intelligence", format: "Keynote", level: "Intermediate", startTime: "2026-05-15T09:00:00Z", endTime: "2026-05-15T10:00:00Z", roomId: "room-A", capacity: 500, status: "scheduled", tags: ["AI", "Generative"] },
  { id: "sess-02", title: "Zero Trust Architecture Essentials", description: "Learn how to secure your cloud infrastructure from the ground up using modern zero-trust principles and identity-first security.", speakerId: "spk-5", track: "Engineering", format: "Workshop", level: "Beginner", startTime: "2026-05-15T09:00:00Z", endTime: "2026-05-15T10:30:00Z", roomId: "room-B", capacity: 60, status: "scheduled", tags: ["Security", "Cloud"] },
  { id: "sess-02b", title: "Green Computing in the Cloud", description: "Strategies to reduce the carbon footprint of your large-scale cloud deployments.", speakerId: "spk-7", track: "Sustainability", format: "Talk", level: "Intermediate", startTime: "2026-05-15T09:15:00Z", endTime: "2026-05-15T10:00:00Z", roomId: "room-C", capacity: 100, status: "scheduled", tags: ["GreenTech", "Cloud"] },
  
  // 10:30 AM
  { id: "sess-03", title: "Building Micro-Frontends at Scale", description: "Lessons learned from moving to a distributed frontend system at one of the world's largest enterprises.", speakerId: "spk-2", track: "Engineering", format: "Talk", level: "Advanced", startTime: "2026-05-15T10:30:00Z", endTime: "2026-05-15T11:15:00Z", roomId: "room-C", capacity: 150, status: "scheduled", tags: ["Frontend", "Scaling"] },
  { id: "sess-04", title: "Design Thinking for Data-Driven Experiences", description: "Practical strategies to bridge the gap between complex analytics and human-centric UI design.", speakerId: "spk-3", track: "Design", format: "Talk", level: "Intermediate", startTime: "2026-05-15T10:30:00Z", endTime: "2026-05-15T11:30:00Z", roomId: "room-B", capacity: 80, status: "scheduled", tags: ["UX", "Data"] },
  { id: "sess-04b", title: "Mobile Performance Optimization", description: "Deep dive into memory management and rendering cycles for high-performance React Native apps.", speakerId: "spk-15", track: "Engineering", format: "Tech Session", level: "Advanced", startTime: "2026-05-15T10:45:00Z", endTime: "2026-05-15T11:45:00Z", roomId: "room-I", capacity: 50, status: "scheduled", tags: ["Mobile", "Performance"] },

  // 11:30 AM
  { id: "sess-05", title: "Product Leadership Panel", description: "Top VPs of Product discuss navigating growth and scaling teams in uncertain markets.", speakerId: "spk-4", track: "Product", format: "Panel", level: "Advanced", startTime: "2026-05-15T11:30:00Z", endTime: "2026-05-15T12:30:00Z", roomId: "room-A", capacity: 300, status: "scheduled", tags: ["Leadership", "Growth"] },
  { id: "sess-06", title: "Evaluating Open Source LLMs", description: "Benchmarking performance and implementation strategies for local AI deployment.", speakerId: "spk-1", track: "Artificial Intelligence", format: "Workshop", level: "Intermediate", startTime: "2026-05-15T11:45:00Z", endTime: "2026-05-15T12:45:00Z", roomId: "room-C", capacity: 100, status: "scheduled", tags: ["LLM", "OpenSource"] },
  { id: "sess-06b", title: "The Art of Documentation", description: "Why your docs are your most important product feature.", speakerId: "spk-14", track: "Product", format: "Talk", level: "Beginner", startTime: "2026-05-15T11:30:00Z", endTime: "2026-05-15T12:15:00Z", roomId: "room-I", capacity: 80, status: "scheduled", tags: ["Docs", "DX"] },

  // 01:30 PM
  { id: "sess-07", title: "Next.js App Router Masterclass", description: "Deep dive into React Server Components, high-performance caching, and server actions.", speakerId: "spk-2", track: "Engineering", format: "Workshop", level: "Advanced", startTime: "2026-05-15T13:30:00Z", endTime: "2026-05-15T15:00:00Z", roomId: "room-B", capacity: 100, status: "scheduled", tags: ["React", "Performance"] },
  { id: "sess-08", title: "Fireside Chat: AI Ethics", description: "Discussing the societal responsibilities of building and deploying autonomous systems.", speakerId: "spk-11", track: "Artificial Intelligence", format: "Panel", level: "Beginner", startTime: "2026-05-15T13:45:00Z", endTime: "2026-05-15T14:45:00Z", roomId: "room-A", capacity: 400, status: "scheduled", tags: ["Ethics", "AI"] },
  { id: "sess-08b", title: "State Management in 2026", description: "Exploring the evolution of Zustand, Signal-based state, and native React state.", speakerId: "spk-6", track: "Engineering", format: "Talk", level: "Intermediate", startTime: "2026-05-15T14:00:00Z", endTime: "2026-05-15T14:45:00Z", roomId: "room-C", capacity: 150, status: "scheduled", tags: ["React", "State"] },

  // 03:00 PM
  { id: "sess-09", title: "Founder's Networking Mixer", description: "Curated networking for startup founders and technical co-founders.", speakerId: "spk-9", track: "Networking", format: "Networking", level: "Beginner", startTime: "2026-05-15T15:00:00Z", endTime: "2026-05-15T16:30:00Z", roomId: "room-D", capacity: 200, status: "scheduled", tags: ["Startups", "Founders"] },
  { id: "sess-10", title: "Real-time Data with CyberDyne", description: "How we process millions of events per second with 99.999% reliability.", speakerId: "spk-8", track: "Engineering", format: "Tech Session", level: "Advanced", startTime: "2026-05-15T15:15:00Z", endTime: "2026-05-15T16:15:00Z", roomId: "room-C", capacity: 120, status: "live", tags: ["Backend", "Performance"] },
  { id: "sess-11", title: "Motion Design for Web Apps", description: "Creating premium emotional responses through subtle motion and physics-based animations.", speakerId: "spk-13", track: "Design", format: "Workshop", level: "Advanced", startTime: "2026-05-15T15:30:00Z", endTime: "2026-05-15T16:45:00Z", roomId: "room-I", capacity: 40, status: "scheduled", tags: ["Motion", "UX"] },

  // 05:00 PM
  { id: "sess-12", title: "Closing Keynote: The Decade Ahead", description: "Predictions for tech in 2030 and how today's innovations will shape society.", speakerId: "spk-1", track: "Artificial Intelligence", format: "Keynote", level: "Intermediate", startTime: "2026-05-15T17:00:00Z", endTime: "2026-05-15T18:00:00Z", roomId: "room-A", capacity: 500, status: "scheduled", tags: ["Future", "Tech"] },

  // Day 2 (Drafted for depth)
  { id: "sess-13", title: "Kubernetes the Hard Way (Revisited)", description: "Lessons from managing clusters in massive multi-tenant environments.", speakerId: "spk-10", track: "Engineering", format: "Workshop", level: "Advanced", startTime: "2026-05-16T09:00:00Z", endTime: "2026-05-16T11:00:00Z", roomId: "room-B", capacity: 50, status: "scheduled", tags: ["K8s", "DevOps"] },
  { id: "sess-14", title: "Funding the Future", description: "What investors are actually looking for in the next wave of AI and Fintech.", speakerId: "spk-9", track: "Founders", format: "Talk", level: "Beginner", startTime: "2026-05-16T10:30:00Z", endTime: "2026-05-16T11:30:00Z", roomId: "room-C", capacity: 150, status: "scheduled", tags: ["Funding", "VC"] },
  { id: "sess-15", title: "The Fintech Security Challenge", description: "Protecting financial data in a world of increasingly sophisticated AI attacks.", speakerId: "spk-12", track: "Security", format: "Talk", level: "Advanced", startTime: "2026-05-16T13:45:00Z", endTime: "2026-05-16T14:45:00Z", roomId: "room-A", capacity: 400, status: "scheduled", tags: ["Fintech", "Security"] },
];

export const mockAnnouncements: Announcement[] = [
  { id: "ann-1", type: "general", title: "Welcome to TechSummit 2026!", message: "Registration is open at the South Lobby. Pick up your premium badge and welcome kit.", createdAt: "2026-05-15T08:00:00Z", priority: "low" },
  { id: "ann-2", type: "room_change", title: "Workshop Alpha Relocated", message: "Zero Trust Architecture has been moved to Workshop Beta on Floor 2.", createdAt: "2026-05-15T08:30:00Z", priority: "high" },
  { id: "ann-3", type: "general", title: "Lunch Service Updates", message: "Gourmet catering is now available in the North Hall. Vegan and Gluten-free options marked.", createdAt: "2026-05-15T11:45:00Z", priority: "medium" },
  { id: "ann-4", type: "general", title: "Surprise Guest Keynote!", message: "A major AI researcher from OpenAI is joining our Closing Keynote. Seats are filling fast.", createdAt: "2026-05-15T14:15:00Z", priority: "critical" },
  { id: "ann-5", type: "networking", title: "Founders Meetup starting in 15min", message: "Head to the Executive Lounge for the curated mixer session.", createdAt: "2026-05-15T14:45:00Z", priority: "high" },
];

export const mockCurrentUser: Attendee = {
  id: "usr-me",
  name: "Alexander Dev",
  role: "Lead Software Architect",
  company: "Stellar Systems",
  interests: ["React", "AI Integration", "Performance", "Startups", "Scaling"],
  goals: ["Master Next.js App Router", "Network with AI founders", "Evaluate LLM performance"],
  networkingVisible: true,
  savedSessionIds: ["sess-01", "sess-05", "sess-07", "sess-10"],
};

export const mockAttendees: Attendee[] = [
  { id: "usr-2", name: "Sarah Chen", role: "AI Product Lead", company: "InnovateTech", interests: ["AI Integration", "Product Strategy", "UX"], goals: ["Find technical co-founders"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-3", name: "David Kim", role: "Startup Founder", company: "Scale AI", interests: ["Startups", "Performance", "AI Integration"], goals: ["Seed funding tips"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-4", name: "Jessica Lin", role: "Senior Frontend Engineer", company: "Vercel", interests: ["React", "Performance", "Scaling"], goals: ["Next.js internals"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-5", name: "Michael Chang", role: "Cloud Architect", company: "AWS", interests: ["Cloud", "Security", "Startups"], goals: ["Meet DevOps leaders"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-6", name: "Emily Watson", role: "Head of Marketing", company: "Eventbrite", interests: ["Growth", "Experience Design"], goals: ["Learn AI event usecases"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-7", name: "Robert Sterling", role: "CTO", company: "FinTech Prime", interests: ["Fintech", "Security", "Scaling"], goals: ["Infrastructure scalability"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-8", name: "Isabella Rossi", role: "Motion Designer", company: "Aura Creative", interests: ["Design", "Motion", "UX"], goals: ["Inspiration for web animations"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-9", name: "Liam O'Connor", role: "Software Engineer", company: "Meta", interests: ["React", "Open Source", "Performance"], goals: ["React 19 features"], networkingVisible: true, savedSessionIds: [] },
  { id: "usr-10", name: "Jasmine Wu", role: "Mobile Architect", company: "Swiftly", interests: ["Mobile", "Edge Computing", "React"], goals: ["React Native optimization"], networkingVisible: true, savedSessionIds: [] },
];

export const mockFAQs: FAQ[] = [
  { id: "faq-1", category: "event", question: "Where do I pick up my badge?", answer: "Registration is located in the South Lobby. Dedicated premium and speaker queues are available from 8 AM." },
  { id: "faq-2", category: "venue", question: "Is there a quiet space available?", answer: "Yes, the Quiet Zone is located on Floor 2, Room 204. No phone calls or loud conversations permitted." },
  { id: "faq-3", category: "emergency", question: "Where is the nearest first aid?", answer: "First Aid stations are located near every main exit. The primary First Aid Unit is in North Hall." },
  { id: "faq-4", category: "event", question: "How do I access the event Wi-Fi?", answer: "Connect to 'TechSummit_Premium' and log in with your registration email." },
  { id: "faq-5", category: "event", question: "Are catering services inclusive?", answer: "Yes, all full-access passes include gourmet catering available in the North Hall Food Court." },
  { id: "faq-6", category: "venue", question: "Where can I charge my devices?", answer: "Charging stations are available in the Innovation Hub and the Executive Lounge." },
  { id: "faq-7", category: "emergency", question: "What is the evacuation procedure?", answer: "In case of emergency, please follow floor staff and exit via the nearest marked green door." },
  { id: "faq-8", category: "venue", question: "Where is the lost & found?", answer: "Lost & Found is managed at the Help Desk in the South Lobby." },
];
