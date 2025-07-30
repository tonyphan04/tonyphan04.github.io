import { motion } from "framer-motion";
import { Code, Lightbulb, Zap } from "lucide-react";

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
                  , a passionate programmer with full working rights in
                  Australia and a strong foundation in frontend development. My
                  early experience spans ReactJS, TypeScript, and Material UI,
                  and I've progressively expanded my expertise into full-stack
                  engineering, focusing on .NET, Nodejs and scalable backend
                  systems.
                </p>

                <p>
                  My journey from frontend specialist to full-stack developer
                  has been driven by a deep motivation to build robust,
                  user-centric applications and solve meaningful technical
                  challenges. I aspire to grow into a senior full-stack
                  developer role where I can contribute to projects that push
                  boundaries and refine my skills.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="italic text-gray-700 dark:text-gray-200">
                    "I actively seek opportunities to join teams that value
                    collaboration, mentorship, and continuous learning—where
                    knowledge sharing and tackling innovative problems are part
                    of the culture."
                  </p>
                </div>

                <p>
                  I'm excited to contribute to a friendly and forward-thinking
                  environment where curiosity is welcomed and growth is
                  continuous, exploring scalable software architecture and
                  pushing the boundaries of what's possible.
                </p>
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
                      Full-Stack Software Engineer
                    </h4>
                    <p className="text-sm opacity-90">
                      Melbourne, Australia • .NET • ReactJS • Nodejs
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
        </div>
      </div>
    </section>
  );
}
