import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ANSCenter",
    period: "Feb 2025 - Present",
    location: "Sydney, Australia",
    type: "Contract",
    description:
      "Developing web applications using ReactJS, TypeScript and MaterialUI to help users remotely configure ANSCenter's AI Box computing hardware.",
    achievements: [
      "Developed a web application using ReactJS, TypeScript and MaterialUI for AI Box configuration",
      "Implemented a scalable language-switching system with i18n, enabling dynamic key-based translations",
      "Handled complex forms with Formik, streamlining validation and submission across workflows",
    ],
    technologies: ["ReactJS", "TypeScript", "MaterialUI", "i18n", "Formik"],
  },
  {
    title: "Full-stack Software Engineer",
    company: "Edtronaut.ai",
    period: "Mar 2024 - Dec 2024",
    location: "Remote",
    type: "Part-time",
    description:
      "Developed mentor-matching features and AI-powered educational tools using Next.js, JavaScript, and OpenAI GPT-4 API.",
    achievements: [
      "Developed a mentor-matching feature using Next.js and JavaScript, leveraging SSR and SSG for performance and SEO",
      "Built an AI-powered quiz generation feature using OpenAI GPT-4 API with Redis caching, leading to 45% increase in engagement",
      "Optimized frontend performance through code splitting and lazy loading, reducing initial load times by 15%",
      "Implemented Zustand for efficient state management and client-side caching, improving API performance",
      "Maintained high-quality standards with Jest test suites, achieving 90% code coverage",
    ],
    technologies: [
      "Next.js",
      "JavaScript",
      "OpenAI API",
      "Redis",
      "Zustand",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Bluebottle Digital",
    period: "Dec 2022 - Feb 2023",
    location: "Albert Park, VIC",
    type: "Part-time",
    description:
      "Developed high-performance templates using Next.js, TypeScript, and TailwindCSS with focus on component reusability and design conversion.",
    achievements: [
      "Developed high-performance templates using Next.js, TypeScript, and TailwindCSS, reducing page load times by 32%",
      "Created reusable UI components with React Hooks to streamline development",
      "Converted Figma designs into interactive UIs, collaborating closely with designers",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React Hooks",
      "Figma",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ST United",
    period: "Feb 2022 - May 2022",
    location: "Da Nang, Vietnam",
    type: "Part-time",
    description:
      "Built a job application management system with React, Node.js, and MongoDB, focusing on recruiter workflow optimization.",
    achievements: [
      "Built a job application management system with React, Node.js, and MongoDB, streamlining recruiter workflows",
      "Designed UI using Ant Design to improve user experience",
      "Developed secure RESTful APIs and utilized Redux-persist for session management and real-time syncing",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Redux"],
  },
];

export function CareerTimeline() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {experience.type}
                        </span>
                        {index === 0 && (
                          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: achIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
