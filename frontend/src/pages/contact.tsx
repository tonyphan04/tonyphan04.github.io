import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, collaborate on
                interesting projects, or just chat about technology.
              </p>
            </motion.div>

            {/* Contact Information - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's Connect
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Whether you're looking for a full-stack developer, want to
                    collaborate on a project, or just want to say hello, I'd
                    love to hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Mail
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <a
                        href="mailto:tonyphan04.dev@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        tonyphan04.dev@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                  >
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MapPin
                        className="text-green-600 dark:text-green-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Melbourne, Australia
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                  >
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Phone
                        className="text-purple-600 dark:text-purple-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Status
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Available for opportunities
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href="https://linkedin.com/in/hoangphan1810"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      <Linkedin size={24} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
