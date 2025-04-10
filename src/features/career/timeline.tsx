import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description:
      "Leading frontend development team, implementing modern web technologies and best practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inc",
    period: "2019 - 2021",
    description:
      "Developed and maintained full-stack applications using React and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "Web Solutions",
    period: "2017 - 2019",
    description:
      "Worked on various web projects, focusing on frontend development and UI/UX design.",
  },
];

export function CareerTimeline() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          My Career Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border -ml-0.5"></div>
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  }`}
                ></div>
                <div
                  className={`relative ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground">{experience.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {experience.period}
                  </p>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
