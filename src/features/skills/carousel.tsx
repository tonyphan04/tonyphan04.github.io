import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express, MongoDB, PostgreSQL",
    icon: "⚙️",
  },
  {
    title: "UI/UX Design",
    description: "Figma, Adobe XD, User Research",
    icon: "🎨",
  },
  {
    title: "DevOps",
    description: "Docker, AWS, CI/CD, Git",
    icon: "🚀",
  },
];

export function CarouselSkills() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
