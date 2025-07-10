import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "TailwindCSS",
  "Docker",
  "AWS",
  "Git",
  "JavaScript",
  "Python",
  "GraphQL",
  "Redis",
  "Firebase",
  "Figma",
  "UI/UX Design",
];

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "C#",
      "JavaScript",
      "Python",
      "ReactJS",
      "ASP.NET",
      "Node.js",
      "Next.js",
    ],
  },
  {
    title: "State & UI Management",
    skills: [
      "Zustand",
      "Material UI",
      "ShadcnUI",
      "TailwindCSS",
      "Redux",
      "React Hooks",
    ],
  },
  {
    title: "Databases & APIs",
    skills: [
      "Entity Framework",
      "LINQ",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "RESTful Services",
      "OpenAI Integrations",
    ],
  },
  {
    title: "DevOps & Development",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Azure",
      "CI/CD",
      "TDD",
      "Clean Architecture",
      "Microservices",
    ],
  },
  {
    title: "Testing & Practices",
    skills: [
      "xUnit",
      "Jest",
      "Domain-Driven Design",
      "Event-Driven Architecture",
      "Code Splitting",
      "Performance Optimization",
    ],
  },
];

export function CarouselSkills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-800">
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 dark:bg-slate-800 rounded-lg px-4 py-2 text-center"
                    >
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700 font-medium hover:shadow-md transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
