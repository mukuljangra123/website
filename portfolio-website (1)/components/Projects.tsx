import { motion } from "framer-motion"

const projects = [
  {
    title: "Efficient Grouping System for Fairness & Equality",
    description:
      "Developed a grouping algorithm using data structures in C++ to ensure balanced and fair team formations. Focused on equity, skill distribution, and efficient computation to optimize group assignments.",
    duration: "March 2024 – April 2024",
    techStack: ["C++", "Data Structures", "Algorithms"],
  },
  {
    title: "Enhancing Food Security for Small Farmers in Drought-Prone Northern India",
    description:
      "Innovation Lab Grand Challenges Project aimed at tackling climate unpredictability and outdated agricultural policies. Designed solutions to help small-scale farmers adapt to drought conditions, improving resource distribution.",
    duration: "October 2024 – November 2024",
    techStack: ["AI", "Predictive Analysis", "Smart Farming"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.duration}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-700 text-cyan-300 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

