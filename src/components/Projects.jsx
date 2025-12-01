import { motion } from "framer-motion";
import project1 from "../assets/project1.png"

const projects = [
  {
    title: "Tea Factory Management System",
    description: "A web application for managing tea orders, internal operations, and workflow automation within a tea factory.",
    tech: ["React", "Spring Boot", "MongoDB"],
    image: project1 
  },
  {
    title: "Inventory Dashboard",
    description: "A full analytical dashboard with data cleaning, visualizations, and SQL backend.",
    tech: ["Python", "Power BI", "SQL Server"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Portfolio Website",
    description: "A fully animated personal portfolio built with React, Vite, Tailwind & Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://via.placeholder.com/600x400",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="w-full py-28 bg-slate-900 text-slate-100"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Projects
    </motion.h2>

    <motion.p
      className="text-lg text-center text-slate-300 max-w-2xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Some of the work I’ve built — combining design, development, and analytical thinking.
    </motion.p>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="
            bg-white/5 backdrop-blur-md border border-white/10
            rounded-2xl overflow-hidden shadow-lg
            hover:shadow-emerald-500/20 transition-all duration-300 
            hover:-translate-y-2 cursor-pointer
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="h-48 w-full overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>

            <p className="text-slate-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    text-sm px-3 py-1 rounded-full 
                    bg-emerald-500/10 text-emerald-400 border border-emerald-500/20
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
