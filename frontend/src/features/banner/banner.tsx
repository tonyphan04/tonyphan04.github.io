import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hello I'm
                <span className="text-blue-600 dark:text-blue-400 block">
                  Tony Phan
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              Full-Stack Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              A passionate programmer with full working rights in Australia,
              specializing in frontend development and progressively expanding
              into full-stack engineering with .NET and scalable backend
              systems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:block"
          >
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">developer.js</span>
              </div>
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                {`const profile = {
  name: 'Tony Phan',
  title: 'Full-Stack Software Engineer',
  location: 'Australia',
  skills: [
      'TypeScript', 'C#', 'ReactJS', 
      'ASP.NET', 'Node.js', 'PostgreSQL',
      'MaterialUI', 'Docker', 'Azure'
  ],
  workingRights: 'Full rights in Australia',
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
        this.hardWorker &&
        this.quickLearner &&
        this.problemSolver
    );
  }
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
