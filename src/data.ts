import { Project, Skill, Experience, Education, Certification, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "Maham Furqan",
  headline: "Graphic Designer | Digital Marketer | QA Associate | Software Engineering Student",
  email: "mahamfurqan00@gmail.com",
  phone: "+92 328 5778746",
  location: "Shahdara, Lahore, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/mahamfurqan00",
  github: "https://github.com/mahamfurqan",
  avatarUrl: "/src/assets/images/profile_avatar_1783403108160.jpg",
  heroBgUrl: "/src/assets/images/workspace_hero_1783403088586.jpg",
  bio: "I am a multi-disciplinary professional combining creative design with robust technical skills. Currently pursuing a BS in Software Engineering, I bring a unique blend of visual artistry, strategic digital marketing, meticulous quality assurance, and clean software development practices. I am passionate about crafting engaging digital experiences, ensuring high product quality, and automating business processes to drive growth.",
};

export const SKILLS: Skill[] = [
  // Graphic Design
  { name: "Adobe Photoshop", level: 90, category: "Design" },
  { name: "Canva", level: 95, category: "Design" },
  { name: "Branding", level: 85, category: "Design" },
  { name: "Social Media Design", level: 92, category: "Design" },
  { name: "Logo Design", level: 88, category: "Design" },

  // Digital Marketing
  { name: "Social Media Marketing", level: 88, category: "Marketing" },
  { name: "Content Strategy", level: 85, category: "Marketing" },
  { name: "Campaign Planning", level: 82, category: "Marketing" },
  { name: "Basic SEO", level: 75, category: "Marketing" },
  { name: "Audience Engagement", level: 90, category: "Marketing" },

  // Quality Assurance
  { name: "Manual Testing", level: 88, category: "QA" },
  { name: "Bug Reporting", level: 92, category: "QA" },
  { name: "Test Cases", level: 85, category: "QA" },
  { name: "Quality Control", level: 86, category: "QA" },
  { name: "Software Validation", level: 80, category: "QA" },

  // Technical Skills
  { name: "Google AppSheet", level: 85, category: "Technical" },
  { name: "Microsoft Excel", level: 80, category: "Technical" },
  { name: "PowerPoint", level: 90, category: "Technical" },
  { name: "Google Sheets", level: 85, category: "Technical" },

  // Soft Skills
  { name: "Communication", level: 95, category: "Soft" },
  { name: "Teamwork", level: 90, category: "Soft" },
  { name: "Adaptability", level: 92, category: "Soft" },
  { name: "Problem Solving", level: 88, category: "Soft" },
  { name: "Time Management", level: 85, category: "Soft" },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Social Media Campaign Management",
    category: "marketing",
    description: "A comprehensive organic social media campaign that boosted brand engagement and follower growth through targeted content strategy and custom-designed visual assets.",
    longDescription: "This project showcases a complete lifecycle of organic social media marketing for a client. By integrating high-quality custom visuals with a strategic, audience-centric content schedule, we achieved remarkable engagement milestones.",
    objective: "To increase brand awareness, drive organic traffic, and foster a highly engaged community of active brand supporters within 3 months.",
    process: [
      "Audience Persona & Market Research: Identified primary engagement triggers and high-value content pillars.",
      "Visual Brand Alignment: Crafted a tailored design toolkit on Photoshop and Canva, defining cohesive color palettes, typography, and image treatments.",
      "Content Matrix & Strategy: Developed a 30-day dynamic calendar mixing educational infographics, customer success spotlights, and interactive stories.",
      "Launch and Live Optimization: Monitored daily analytics to adjust posting schedules, hashtags, and engagement tactics."
    ],
    results: "Achieved a 45% increase in weekly profile visits, 120% growth in organic engagement rate, and an expansion of the active follower base by 1,200 organic users.",
    resultsMetrics: [
      "45% Increase in Profile Visits",
      "120% Higher Organic Engagement",
      "1,200+ New Organic Followers",
      "220k+ Total Campaign Impressions"
    ],
    tags: ["Social Media Marketing", "Photoshop", "Canva", "Campaign Strategy", "Audience Engagement"],
    imageUrl: "https://picsum.photos/seed/campaign/800/600",
  },
  {
    id: "proj-2",
    title: "Business Automation App",
    category: "software",
    description: "A customized enterprise operations and inventory tracking mobile/tablet app built using Google AppSheet, fully integrated with Google Sheets for real-time relational data updates and automated email notifications.",
    longDescription: "Developed to replace manual spreadsheet-based entries, this application streamlines inventory tracking, order management, and automated status alerts, significantly minimizing data entry errors and response latencies.",
    objective: "To eliminate inventory data lag, minimize operational errors, and automate daily report generation for client-facing stakeholders.",
    process: [
      "Database Architecture: Designed normalized Google Sheets spreadsheets acting as the relational database backend.",
      "AppSheet Implementation: Configured views, custom UX behaviors, and robust role-based access permissions.",
      "Workflow Automation: Structured automated triggers for real-time email alerts upon low-stock events and critical order status shifts.",
      "User Acceptance & Quality Assurance: Authored manual test cases and validated end-to-end user workflows under various device environments."
    ],
    results: "Reduced manual reporting time by 12 hours weekly, reduced duplicate stock errors to virtually 0%, and improved intra-team status updates to real-time sync.",
    resultsMetrics: [
      "12 hrs Weekly Time Saved",
      "0% Duplicate Entry Errors",
      "Real-time Data Sync",
      "Automated Stock Alerts"
    ],
    features: [
      "Barcode & QR Code Scanning Support",
      "Real-time Google Sheets Database Integration",
      "Automated Low-Stock Email Notifications",
      "Offline Access with Auto-Sync Features"
    ],
    tags: ["Google AppSheet", "Google Sheets", "Business Automation", "Quality Assurance", "Workflow Optimization"],
    imageUrl: "/src/assets/images/workspace_hero_1783403088586.jpg",
  },
  {
    id: "proj-3",
    title: "Graphic Design Collection",
    category: "design",
    description: "A diverse creative portfolio showcasing professional social media posts, elegant logo designs, modern marketing banners, and cohesive brand promotional materials.",
    longDescription: "This collection brings together selective design deliverables completed for various freelance clients and independent marketing brands. It shows a versatile ability to capture different brand moods—from energetic modern aesthetics to elegant corporate identities.",
    objective: "To develop visually compelling, on-brand graphic assets that stand out in crowded feeds and reinforce consistent brand visual identity.",
    process: [
      "Creative Brief Synthesis: Collaborated with clients to map design ideas to core business messages and color preferences.",
      "Visual Hierarchy & Sketching: Drafted core vector layout concepts, balancing imagery, text readability, and spatial margins.",
      "High-Fidelity Rendering: Utilized Adobe Photoshop and Canva to create precise, scalable designs.",
      "Iterative Polish: Tailored designs based on feedback and created responsive multi-format variations (stories, banners, print)."
    ],
    results: "Successfully developed 15+ comprehensive visual assets resulting in 100% client satisfaction, praised for modern composition and strong brand alignment.",
    resultsMetrics: [
      "15+ Completed Deliverables",
      "100% Client Satisfaction",
      "Cohesive Multi-Platform Assets",
      "Modern Color Theory Application"
    ],
    tags: ["Graphic Design", "Canva", "Photoshop", "Logo Design", "Branding Assets"],
    imageUrl: "https://picsum.photos/seed/graphics/800/600",
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Digital Marketing & QA Associate",
    company: "Creative Digital Solutions",
    period: "2023 - Present",
    description: "Successfully managing cross-functional tasks that blend creative digital outreach with rigorous product validation and quality assurance workflows.",
    highlights: [
      "Directed end-to-end organic social media campaigns, designing assets and driving engagement strategy to boost client reach.",
      "Authored, maintained, and executed over 100+ manual test cases to ensure seamless operation of client web portals.",
      "Developed custom business automation applications on Google AppSheet, automating tasks that saved hours of manual labor.",
      "Reported bugs and tracked issue cycles using standard bug-tracking boards, ensuring smooth coordination with engineering teams."
    ]
  },
  {
    id: "exp-2",
    role: "Freelance Graphic Designer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Delivering high-quality visual identity and creative materials directly to clients and small business owners globally.",
    highlights: [
      "Created modern, memorable logo designs and full branding toolkits for startup projects.",
      "Designed attention-grabbing social media graphics, promotional banners, and marketing flyers that amplified client engagement.",
      "Maintained professional, clear, and proactive communication with clients, delivering assets ahead of deadlines.",
      "Managed design feedback loops efficiently, ensuring client desires were fully realized in final deliverables."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "BS in Software Engineering",
    school: "Virtual University of Pakistan",
    period: "In Progress",
    description: "Focussing on core computing principles, object-oriented programming, database management systems, software design patterns, and quality assurance methodologies."
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "Punjab University",
    period: "2022 Graduate",
    description: "Deepened understandings of communication patterns, creative aesthetics, research methodologies, and logical writing skills."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Graphic Design Masterclass",
    issuer: "Udemy Certified",
    year: "2022",
    category: "Design"
  },
  {
    title: "Adobe Photoshop Advanced Training",
    issuer: "Creative Arts Institute",
    year: "2022",
    category: "Design"
  },
  {
    title: "Canva Pro Creator Certification",
    issuer: "Canva Design Academy",
    year: "2023",
    category: "Design"
  },
  {
    title: "Inbound Digital Marketing Specialist",
    issuer: "HubSpot Academy",
    year: "2023",
    category: "Marketing"
  },
  {
    title: "SEO Fundamentals and Keyword Strategy",
    issuer: "Semrush Academy",
    year: "2024",
    category: "Marketing"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Bridging the Gap Between Code and Creativity",
    summary: "How a background in Graphic Design helps write better, more user-centric front-end software, and why UI/UX layout planning is a critical developer skill.",
    content: "In modern software development, code and visual design are often treated as distinct disciplines. However, some of the most successful applications are built when developers understand visual hierarchy, typography, and spatial composition. As both a Graphic Designer and a Software Engineering student, I've realized that design principles directly influence how we build user interfaces. \n\n### The UI/UX Advantage in Front-End Coding\nWhen you understand negative space, color theories, and contrast, writing CSS or tailwind classes becomes a more intentional process. You don't just put items on a grid; you design a visual journey. Every touch target, alignment, and hover state is created to guide the user's attention seamlessly. \n\n### Practical Design Tips for Developers\n1. **Embrace Spacing Rhythm:** Always use a consistent spacing scale (like Tailwind's multiple of 4px). This creates structural harmony across elements.\n2. **Optimize Contrast:** Text readability is paramount. Always ensure high-contrast ratios between text and background.\n3. **Limit Font Families:** Stick to a maximum of two font families—one high-impact serif or sans-serif for headings, and a highly legible body font.",
    date: "June 15, 2026",
    readTime: "4 min read",
    category: "Software & Design",
    tags: ["UX/UI Design", "Front-end Development", "Creative Coding", "Web Styling"]
  },
  {
    id: "blog-2",
    title: "A Beginner's Guide to Low-Code Business Automation",
    summary: "Discover how utilizing Google AppSheet and Google Sheets can empower small businesses to replace outdated spreadsheets with robust custom mobile apps.",
    content: "Many small businesses run on heavily manual, error-prone spreadsheets. From inventory lists to customer contacts, managing everything manually is time-consuming. Fortunately, low-code and no-code tools like Google AppSheet have revolutionized how we automate operations. \n\n### Why AppSheet is a Game Changer\nAppSheet takes raw structured spreadsheets from Google Sheets or Excel and compiles them into functional native-feeling mobile and web interfaces. It handles database operations and CRUD behaviors out-of-the-box, allowing you to focus on tailoring user flows and custom business rules.\n\n### Key Automation Features to Implement\n* **Real-time Synchronization:** Update a row in your spreadsheet, and the user's app reflects that instantly.\n* **Automated Email & Push Workflows:** Set triggers to automatically alert teams when inventory drops below a specific threshold or an order status moves to 'Shipped'.\n* **Rich Mobile Hardware Support:** AppSheet has native access to smartphone hardware, permitting barcode scanning, GPS geolocation tagging, and digital signature capture.",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "Business Tech",
    tags: ["AppSheet", "Google Sheets", "Low Code", "Automation", "Workflow Optimization"]
  },
  {
    id: "blog-3",
    title: "Meticulous Quality Control: Why Manual Testing Still Matters",
    summary: "Exploring the critical role of human intuition and thorough exploratory manual software verification in an era increasingly dominated by automated testing suites.",
    content: "With the rise of robust test suites and automated end-to-end framework test runs, some argue that manual testing is becoming obsolete. However, manual QA remains the most vital safety net for user experience. Automated tests can check if an API returns status code 200, but they cannot tell you if a button feels awkward, if a layout is shifted on a specific viewport, or if a workflow is cognitively draining.\n\n### The Human Touch in Software Validation\nManual testing relies on exploratory verification, user intuition, and active problem-solving. A human tester can push boundaries, attempt unexpected inputs, and discover visual edge cases that automated scripts miss.\n\n### Best Practices for Effective Manual QA\n1. **Write Modular Test Cases:** Keep your test steps discrete, reproducible, and clearly mapped to functional specifications.\n2. **Capture Clear Bug Reports:** Always include the exact steps to reproduce, actual vs. expected results, environment/device variables, and clean screenshots or video captures.\n3. **Understand Edge Cases:** Don't just test the happy path. Actively try to break the application with extreme inputs, multi-clicks, and network interruptions.",
    date: "April 12, 2026",
    readTime: "6 min read",
    category: "Quality Assurance",
    tags: ["Manual Testing", "QA Methodologies", "Bug Reporting", "UX Validation"]
  }
];
