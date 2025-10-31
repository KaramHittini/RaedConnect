export const mockUsers = [
{ id: 1, name: "Lina Faris", university: "ZU", major: "CS", skills: ["Design", "Photography"], exp: ">6m", role: "user" },
{ id: 2, name: "Ahmad T", university: "JU", major: "SE", skills: ["Management"], exp: "<6m", role: "user" },
];


export const mockTeamMembers = [
{ id: 1, name: "Radi Alkhatib", role: "Director", bio: "Leads ops & partnerships.", avatar: "/assets/placeholder-user.png" },
{ id: 2, name: "Admin Team", role: "Admins", bio: "Moderation & support.", avatar: "/assets/placeholder-user.png" },
];


export const mockPosts = [
{ id: 1, author: "Admin", title: "Volunteer Call", category: "opportunity", body: "Join our weekend event!", image: "", createdAt: new Date().toISOString() },
{ id: 2, author: "Lina", title: "Design Meetup", category: "event", body: "UI session on Friday.", image: "", createdAt: new Date().toISOString() },
];


export const mockAchievements = [
{ id: 1, title: "100+ Volunteers", desc: "Milestone reached", icon: "🏅" },
{ id: 2, title: "10 Projects", desc: "Community impact", icon: "🎉" },
];

export const mockTeam = [
  {
    id: 1,
    name: "John Doe",
    role: "Team Leader",
    avatar: "https://via.placeholder.com/150",
    bio: "Experienced leader focused on community building.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Coordinator",
    avatar: "https://via.placeholder.com/150",
    bio: "Passionate about organizing impactful activities.",
  },
];

export const mockFeedback = [
  {
    id: 1,
    email: "user1@example.com",
    message: "I love this platform but I have a question...",
    time: "2025-01-02 14:30",
  },
  {
    id: 2,
    email: "user2@example.com",
    message: "Can you add dark mode support on mobile?",
    time: "2025-01-03 09:12",
  },
];
