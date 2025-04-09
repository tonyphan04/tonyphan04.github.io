import { Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  githubUrl: string;
}

export function ProjectCard({
  name,
  description,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}
