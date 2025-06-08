import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white code-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate about creating efficient, scalable solutions that make a difference
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Software development workspace"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Full Stack Developer & DevOps Enthusiast
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                I am an MCA student at Presidency University with a specialization in DevOps, Microservices, and Data Analysis & Visualization. I have a strong foundation in designing, building, and deploying innovative software solutions.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Passionate about solving real-world problems through clean and efficient code, I thrive on collaborating with clients and teams to deliver high-quality applications that not only meet but exceed expectations. I'm driven by continuous learning and committed to contributing to impactful and scalable software projects.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Current Focus</h4>
                  <p className="text-slate-600 text-sm">DevOps & Microservices Architecture</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Specialization</h4>
                  <p className="text-slate-600 text-sm">Data Analysis & Visualization</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Location</h4>
                  <p className="text-slate-600 text-sm">Bengaluru, Karnataka</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">Languages</h4>
                  <p className="text-slate-600 text-sm">English, Hindi, Kannada</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;