import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/mukul-jangra.jpg"
              alt="Mukul Jangra"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
            <p className="text-gray-300 mb-4">
              I am a second-year Computer Science and Artificial Intelligence student at Plaksha University, passionate
              about hardware, software technologies, and real-world problem-solving. My focus lies in leveraging C++,
              Python, and AI-driven solutions to build innovative projects, particularly in the fields of robotics,
              automation, and data structures.
            </p>
            <p className="text-gray-300 mb-4">
              With hands-on experience in Arduino programming, electronics, and Linux environments, I enjoy tackling
              challenges that require technical precision, logical thinking, and creativity.
            </p>
            <p className="text-gray-300">
              Beyond coding, I have a keen interest in writing, social media management, and creative storytelling,
              which allows me to communicate complex ideas effectively.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

