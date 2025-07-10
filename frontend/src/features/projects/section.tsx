import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Box Configuration Platform",
    description:
      "Web application built with ReactJS, TypeScript and MaterialUI to help users remotely configure ANSCenter's AI Box computing hardware with powerful AI applications.",
    technologies: ["ReactJS", "TypeScript", "MaterialUI", "i18n", "Formik"],
    github: "https://github.com/tonyphan04/ai-box-config",
    live: "https://ai-box-config.vercel.app",
  },
  {
    title: "AI-Powered Quiz Generator",
    description:
      "Educational platform with mentor-matching and AI-powered quiz generation using OpenAI GPT-4 API, featuring Redis caching and SSR optimization.",
    technologies: ["Next.js", "JavaScript", "OpenAI API", "Redis", "Zustand"],
    github: "https://github.com/tonyphan04/ai-quiz-generator",
    live: "https://ai-quiz-generator.vercel.app",
  },
  {
    title: "Job Application Management System",
    description:
      "Comprehensive system built with React, Node.js, and MongoDB to streamline recruiter workflows with secure RESTful APIs and real-time syncing.",
    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Redux"],
    github: "https://github.com/tonyphan04/job-management",
    live: "https://job-management-demo.vercel.app",
  },
  {
    title: "High-Performance Templates",
    description:
      "Responsive website templates built with Next.js, TypeScript, and TailwindCSS, featuring reusable React components and Figma design conversion.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Hooks"],
    github: "https://github.com/tonyphan04/responsive-templates",
    live: "https://responsive-templates.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
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
              Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working
              with
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs px-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
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
