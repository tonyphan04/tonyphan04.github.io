import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A modern portfolio website built with React, TypeScript, and Tailwind CSS.",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    name: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication and payment integration.",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    name: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with real-time updates.",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
