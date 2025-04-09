export interface CareerItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const careerData: CareerItem[] = [
  {
    company: "Tech Company A",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    location: "Remote",
    responsibilities: [
      "Led the development of a new React-based dashboard",
      "Implemented TypeScript across the codebase",
      "Mentored junior developers",
      "Optimized application performance",
    ],
  },
  {
    company: "Startup B",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    location: "New York, NY",
    responsibilities: [
      "Developed and maintained web applications",
      "Collaborated with design team on UI/UX",
      "Implemented CI/CD pipelines",
      "Created RESTful APIs",
    ],
  },
  {
    company: "Software Solutions C",
    role: "Junior Developer",
    period: "2018 - 2020",
    location: "San Francisco, CA",
    responsibilities: [
      "Assisted in frontend development",
      "Fixed bugs and implemented features",
      "Participated in code reviews",
      "Wrote unit tests",
    ],
  },
]; 