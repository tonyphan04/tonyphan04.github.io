import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com/tonyphan04/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "AI Task Management",
    description:
      "Intelligent task management with AI-powered prioritization, team collaboration, and productivity analytics.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Prisma", "Tailwind"],
    github: "https://github.com/tonyphan04/ai-tasks",
    live: "https://ai-tasks.vercel.app",
    featured: true,
  },
  {
    title: "Real-time Chat App",
    description:
      "Modern chat application with real-time messaging, file sharing, and video calls for team collaboration.",
    technologies: ["React", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
    github: "https://github.com/tonyphan04/chat-app",
    live: "https://chat-app-demo.vercel.app",
    featured: false,
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Dynamic portfolio website with CMS integration, blog functionality, and interactive project showcases.",
    technologies: ["Next.js", "Sanity", "Framer Motion", "Vercel"],
    github: "https://github.com/tonyphan04/portfolio",
    live: "https://portfolio-demo.vercel.app",
    featured: false,
  },
  {
    title: "Weather Analytics",
    description:
      "Weather tracking application with detailed analytics, forecasting, and location-based recommendations.",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "Docker"],
    github: "https://github.com/tonyphan04/weather-app",
    live: "https://weather-analytics.vercel.app",
    featured: false,
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance management tool with budget tracking, expense categorization, and financial insights.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "https://github.com/tonyphan04/expense-tracker",
    live: "https://expense-tracker-demo.vercel.app",
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working
              with
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
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
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out my GitHub for more projects and contributions
              </p>
              <motion.a
                href="https://github.com/tonyphan04"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
