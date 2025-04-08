import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Hi, I'm [Your Name]
          </h1>

          <h2 className="text-2xl text-gray-300">
            Full Stack Developer & Creative Problem Solver
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I'm passionate about creating beautiful, functional, and
            user-friendly applications. With expertise in modern web
            technologies, I transform ideas into reality through clean code and
            innovative solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
