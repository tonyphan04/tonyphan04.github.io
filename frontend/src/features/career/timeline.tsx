import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ANSCenter",
    period: "Feb 2025 - Present",
    location: "Sydney, Australia",
    type: "Full-time",
    description:
      "Leading frontend development initiatives with focus on modern web technologies and user experience optimization.",
    achievements: [
      "Implemented seamless i18n language-switching feature with superior scalability",
      "Leveraged useFormik for efficient form state management",
      "Improved application performance through advanced React optimization techniques",
    ],
    technologies: ["React", "TypeScript", "i18n", "Formik", "JavaScript"],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Edtronaut.ai",
    period: "Mar 2024 - Dec 2024",
    location: "Remote",
    type: "Full-time",
    description:
      "Developed AI-powered educational platform with comprehensive full-stack solutions and microservices architecture.",
    achievements: [
      "Built 1:1 mentor matching system using Next.js with server-side rendering optimization",
      "Developed AI-powered quiz generation feature using OpenAI GPT-4 API, increasing user engagement by 45%",
      "Implemented microservices architecture with Docker and Kubernetes, reducing deployment time by 63%",
      "Achieved 90% code coverage with automated testing suites",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "OpenAI API",
      "Docker",
      "Kubernetes",
      "Redis",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Bluebottle Digital",
    period: "Dec 2022 - Feb 2023",
    location: "Albert Park, Australia",
    type: "Internship",
    description:
      "Specialized in responsive web development and SaaS platform integration with focus on performance optimization.",
    achievements: [
      "Developed responsive website templates with Next.js and TypeScript, improving load speeds by 32%",
      "Created reusable UI components with React Hooks, reducing development time by 65%",
      "Integrated customizable templates into SaaS platform, increasing client satisfaction by 20%",
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
    period: "Jun 2022 - Aug 2022",
    location: "Sydney, Australia",
    type: "Internship",
    description:
      "Focused on backend development and API integration with emphasis on scalable solutions.",
    achievements: [
      "Developed RESTful APIs using Node.js and Express.js for client management system",
      "Implemented database optimization strategies, improving query performance by 40%",
      "Created comprehensive API documentation and testing procedures",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="text-center bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div className="text-center bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Companies</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                20+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Technologies
              </div>
            </div>
            <div className="text-center bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                ∞
              </div>
              <div className="text-gray-600 dark:text-gray-300">Impact</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm actively seeking new opportunities to contribute to
                initative projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Let's Connect
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
