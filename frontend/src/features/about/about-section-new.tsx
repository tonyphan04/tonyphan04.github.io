import { motion } from "framer-motion";
import { Code, Palette, Lightbulb, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
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
              About me
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Code className="text-blue-600" size={32} />
              <Palette className="text-purple-600" size={32} />
              <Lightbulb className="text-yellow-600" size={32} />
              <Zap className="text-green-600" size={32} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              Developer, Designer, Creator, Innovator
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    Tony Phan
                  </strong>
                  , a passionate JavaScript developer specializing in creating
                  innovative web solutions and user-friendly interfaces. Using
                  React & Next.js Framework, I'm dedicated to simplifying
                  development workflows.
                </p>

                <p>
                  My focus is on making web development faster, easier, and
                  accessible to all developers. Currently, I'm expanding into
                  backend development to grow as a full-stack developer and
                  create seamless, secure web applications.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    "I am a lifelong learner and a dedicated supporter of the
                    developer community, committed to creating new and effective
                    tools and ideas to empower developers."
                  </p>
                </div>

                <p>
                  I share this knowledge and experience with my community, so
                  that we can all move forward together. My goal is to bridge
                  the gap between complex technical concepts and practical,
                  real-world applications.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Technologies
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    ∞
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Learning
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 relative overflow-hidden">
                {/* Placeholder for illustration or image */}
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <Code size={64} className="mx-auto mb-4" />
                    <h4 className="text-xl font-semibold">
                      Full-Stack Developer
                    </h4>
                    <p className="text-sm opacity-90">
                      Creating Digital Solutions
                    </p>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Lightbulb size={16} className="text-white" />
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to my universe
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's collaborate and create something amazing together
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
