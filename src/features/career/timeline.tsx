import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    title: "Full-stack Software Engineer",
    company: "Edtronaut.ai",
    period: "3/2024 - 12/2024",
    description: "Remote",
    details: [
      "Built a 1:1 mentor matching system using NextJS & JavaScript, leveraging server-side rendering and static site generation.",
      "Developed an AI-powered quiz generation feature using OpenAI GPT-4 API with advanced prompt engineering and a Redis custom caching layer, leading to a 45% increase in user engagement.",
      "Optimized front-end performance through the implementation of code splitting and lazy loading, reducing initial page load time and improving resource utilization during high-traffic periods.",
      "Implemented a microservices architecture using Node.js and Express, containerized with Docker and orchestrated by Kubernetes, significantly improving system scalability and reducing deployment time by 63%.",
      "Integrated advanced state management using Zustand for efficient API data fetching and caching, reducing boilerplate code and improving client-side performance.",
      "Developed automated testing suites using Jest and React Testing Library, achieving 90% code coverage for critical components and reducing the number of production bugs by nearly 50%.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Bluebottle Digital",
    period: "12/2022 – 2/2023",
    description: "Albert Park",
    details: [
      "Developed responsive website templates using Next.js, TypeScript and TailwindCSS, enhancing page load speeds by 32% and ensuring seamless mobile compatibility.",
      "Created reusable UI components with React Hooks and implemented advanced state management techniques, reducing new feature development time by 65% and ensuring a consistent, optimized user experience.",
      "Integrated customizable templates into a SaaS platform, enabling non-technical users to deploy tailored websites, leading to a 20% increase in client satisfaction scores.",
      "Collaborated with UX/UI designers to convert Figma prototypes into interactive web applications, improving project delivery time by 15%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ST United",
    period: "2/2022 – 5/2022",
    description: "Da Nang, Vietnam",
    details: [
      "Built a job application management system using React, Node.js, and MongoDB, streamlining group job applications and improving recruitment efficiency by 40%.",
      "Developed interfaces with Ant Design and custom components, enhancing user experience and improving recruiter satisfaction by 74%.",
      "Implemented secure RESTful APIs and Redux-persist for session management, reducing page load times and ensuring real-time data synchronization.",
      "Integrated advanced search functionality using Elasticsearch, implementing custom analyzers and filters to optimize job-matching algorithms, which led to a 60% increase in successful placements.",
    ],
  },
];

// Function to highlight technology names
const highlightTechnologies = (text: string) => {
  const technologies = [
    "NextJS",
    "JavaScript",
    "OpenAI GPT-4",
    "Redis",
    "Node.js",
    "Express",
    "Docker",
    "Kubernetes",
    "Zustand",
    "Jest",
    "React Testing Library",
    "TypeScript",
    "TailwindCSS",
    "React Hooks",
    "Figma",
    "React",
    "MongoDB",
    "Ant Design",
    "Redux-persist",
    "Elasticsearch",
  ];

  let highlightedText = text;
  technologies.forEach((tech) => {
    const regex = new RegExp(`\\b${tech}\\b`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      `<span class="font-bold">${tech}</span>`
    );
  });
  return highlightedText;
};

export function CareerTimeline() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          My Career Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5"></div>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-6" : "pl-6"}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardContent className="p-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value={experience.title}
                          className="border-none"
                        >
                          <AccordionTrigger className="hover:no-underline py-2">
                            <div className="flex flex-col gap-2 w-full">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-xl font-bold text-foreground">
                                    {experience.title}
                                  </h3>
                                  <p className="text-base text-muted-foreground">
                                    {experience.company}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-medium text-primary">
                                    {experience.period}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {experience.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 gap-2 mt-2">
                              {experience.details.map((detail, i) => (
                                <p
                                  key={i}
                                  className="text-muted-foreground bg-muted/50 p-2 rounded-lg text-sm"
                                  dangerouslySetInnerHTML={{
                                    __html: highlightTechnologies(detail),
                                  }}
                                />
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
