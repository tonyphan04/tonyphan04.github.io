import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/project1.jpg",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "/project2.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with animations",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/project3.jpg",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
