import { motion } from "framer-motion";

export function Banner() {
  return (
    <div className="w-full bg-white py-16 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-5xl font-bold text-black">Hi, I'm Tony</h1>

            <h2 className="text-2xl text-gray-800">
              Full Stack Developer & Creative Problem Solver
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about creating beautiful, functional, and
              user-friendly applications. With expertise in modern web
              technologies, I transform ideas into reality through clean code
              and innovative solutions.
            </p>

            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Logo/Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
