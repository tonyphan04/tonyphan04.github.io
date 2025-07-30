import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience, built with React and TypeScript.",
    technologies: ["ReactJS", "TypeScript", "Motion framer", "GitHub Pages"],
    github: "https://github.com/tonyphan04/tonyphan04.github.io",
    live: "https://tonyphan04.github.io",
  },
  {
    title: "AI-Powered CV analyze",
    description: `The AICareer & Education Consultant is an AI-powered system designed to help users analyze their resumes, identify areas for improvement, receive personalized career recommendations, and discover relevant learning opportunities. It is tailored for job seekers, career shifters, freelancers, and remote workers who need clear, practical, and personalized career guidance.`,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tanstack Query",
    ],
    github: "https://github.com/hellomentorplus/AIMentorMe",
    live: "https://ac6cx5fqn3oh.share.zrok.io/",
  },
  {
    title: "Bookshop",
    description:
      "A full-stack bookshop application with a modern UI, built using React and .NET Core, featuring user authentication, product management, and order processing.",
    technologies: [".NET", "SQL Server", "LINQ", "Azure"],
    github: "https://github.com/tonyphan04/Bookshop",
    live: "",
  },
  {
    title: "LearningRemind",
    description:
      "LearningRemind is a full-stack vocabulary app designed to help users efficiently learn and review words using proven memory techniques",
    technologies: ["React", "Node.js", "Prisma ORM", "Postgres", "MaterialUI"],
    github: "https://github.com/tonyphan04/LearningRemind",
    live: "",
  },
  {
    title: "ApplicationTracker",
    description:
      "ApplicationTracker is a Node.js tool that helps you track your job or school applications by connecting to your Gmail account, extracting relevant emails, and saving the application data to a local JSON file",
    technologies: ["React", "Nodejs", "Google OAuth"],
    github: "https://github.com/tonyphan04/ApplicationTracker",
    live: "",
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
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {/* {project.technologies.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs px-1">
                        +{project.technologies.length - 3}
                      </span>
                    )} */}
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
