import { motion } from "framer-motion"

const experiences = [
  {
    title: "Teaching & Management Intern",
    company: "Plaksha University",
    duration: "June 2024 – July 2024",
    description: [
      "Led robotics, electronics, and Arduino workshops for 120+ students.",
      "Designed the robotics curriculum, ensuring alignment with course objectives and learning goals.",
      "Assisted in managing the learning experience, mentoring students in hands-on practical sessions.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{exp.title}</h3>
              <p className="text-cyan-300 mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

