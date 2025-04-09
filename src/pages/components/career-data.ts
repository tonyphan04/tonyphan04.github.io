export interface CareerItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const careerData: CareerItem[] = [
  {
    company: "ANSCenter",
    role: "Full-stack Software Developer",
    period: "2/2025 - Present",
    location: "Sydney, AUS",
    responsibilities: [
      "Built a 1:1 mentor matching system using NextJS & JavaScript, leveraging server-side rendering and static site generation",
    ],
  },
  {
    company: "Edtronaut.ai",
    role: "Full-stack Software Engineer",
    period: "3/2024 - 12/2024",
    location: "Remote",
    responsibilities: [
      "Built a 1:1 mentor matching system using NextJS & JavaScript, leveraging server-side rendering and static site generation",
      "Developed an AI-powered quiz generation feature using OpenAI GPT-4 API with advanced prompt engineering and a Redis custom caching layer, leading to a 45% increase in user engagement",
      "Optimized front-end performance through the implementation of code splitting and lazy loading, reducing initial page load time and improving resource utilization during high-traffic periods",
      "Implemented a microservices architecture using Node.js and Express, containerized with Docker and orchestrated by Kubernetes, significantly improving system scalability and reducing deployment time by 63%",
      "Integrated advanced state management using Zustand for efficient API data fetching and caching, reducing boilerplate code and improving client-side performance",
      "Developed automated testing suites using Jest and React Testing Library, achieving 90% code coverage for critical components and reducing the number of production bugs by nearly 50%",
    ],
  },
  {
    company: "Bluebottle Digital",
    role: "Frontend Developer Intern",
    period: "12/2022 – 2/2023",
    location: "Albert Park, AUS",
    responsibilities: [
      "Developed responsive website templates using Next.js, TypeScript and TailwindCSS, enhancing page load speeds by 32% and ensuring seamless mobile compatibility",
      "Created reusable UI components with React Hooks and implemented advanced state management techniques, reducing new feature development time by 65% and ensuring a consistent, optimized user experience",
      "Integrated customizable templates into a SaaS platform, enabling non-technical users to deploy tailored websites, leading to a 20% increase in client satisfaction scores",
      "Collaborated with UX/UI designers to convert Figma prototypes into interactive web applications, improving project delivery time by 15%",
    ],
  },
  {
    company: "ST United",
    role: "Software Engineer Intern",
    period: "2/2022 – 5/2022",
    location: "Da Nang, Vietnam",
    responsibilities: [
      "Built a job application management system using React, Node.js, and MongoDB, streamlining group job applications and improving recruitment efficiency by 40%",
      "Developed interfaces with Ant Design and custom components, enhancing user experience and improving recruiter satisfaction by 74%",
      "Implemented secure RESTful APIs and Redux-persist for session management, reducing page load times and ensuring real-time data synchronization",
      "Integrated advanced search functionality using Elasticsearch, implementing custom analyzers and filters to optimize job-matching algorithms, which led to a 60% increase in successful placements",
    ],
  },
]; 