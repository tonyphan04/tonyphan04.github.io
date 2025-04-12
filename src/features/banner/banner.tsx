import { motion } from "framer-motion";
import React from "react";
//import viteLogo from "/vite.svg";

export default function Banner() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = "#projects";
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-background py-24 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <h1 className="text-5xl font-bold text-foreground">Hi, I'm Tony</h1>

            <h2 className="text-2xl text-muted-foreground">
              Full Stack Developer & Creative Problem Solver
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating beautiful, functional, and
              user-friendly applications. With expertise in modern web
              technologies, I transform ideas into reality through clean code
              and innovative solutions.
            </p>

            <div className="flex gap-6 pt-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
              >
                View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Logo/Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96">
              <img
                src={viteLogo}
                alt="Vite Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
