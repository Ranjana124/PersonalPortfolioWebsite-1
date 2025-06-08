import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Code, Globe, Cloud, Shield, Trophy, BarChart } from "lucide-react";

const skillsData = {
  "Programming Languages": {
    icon: Code,
    skills: [
      { name: "Java", level: 90, color: "bg-slate-600" },
      { name: "Python", level: 85, color: "bg-slate-700" },
      { name: "C++", level: 80, color: "bg-slate-800" },
      { name: "C#", level: 75, color: "bg-slate-500" },
    ]
  },
  "Web Technologies": {
    icon: Globe,
    skills: [
      { name: "React.js", level: 88, color: "bg-slate-600" },
      { name: "Node.js", level: 82, color: "bg-slate-700" },
      { name: "Express.js", level: 80, color: "bg-slate-800" },
      { name: "Full Stack Development", level: 85, color: "bg-slate-500" },
    ]
  },
  "Specialized Skills": {
    icon: Cloud,
    skills: [
      { name: "DevOps & Microservices", level: 85, color: "bg-slate-600" },
      { name: "Machine Learning", level: 80, color: "bg-slate-700" },
      { name: "AWS", level: 78, color: "bg-slate-800" },
      { name: "Artificial Intelligence", level: 75, color: "bg-slate-500" },
    ]
  }
};

const certificationsData = [
  {
    title: "Tata Cybersecurity Analyst Simulation",
    description: "Completed comprehensive job simulation involving IAM principles and cybersecurity best practices for TCS.",
    date: "January 2025",
    icon: Shield,
  },
  {
    title: "Multiple Technology Certifications",
    description: "Certified in Selenium, Full Stack Development, and Android App Development.",
    date: "Professional",
    icon: Code,
  },
  {
    title: "Competition Achievements",
    description: "Winner of multiple coding competitions, debugging challenges, and IT quizzes.",
    date: "Awards",
    icon: Trophy,
  },
  {
    title: "Microsoft Office Suite",
    description: "Proficient in Advanced Excel, Word, and PowerPoint for data analysis and presentations.",
    date: "Productivity",
    icon: BarChart,
  }
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedSkills(new Set(Object.keys(skillsData)));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proficient in modern technologies and development practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Object.entries(skillsData).map(([category, data], categoryIndex) => {
              const IconComponent = data.icon;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                >
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category}</h3>
                  </div>
                  <div className="space-y-6">
                    {data.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${skill.color}`}
                            initial={{ width: 0 }}
                            animate={animatedSkills.has(category) ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: skillIndex * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificationsData.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{cert.title}</h4>
                      <p className="text-slate-600 mb-3 text-sm leading-relaxed">{cert.description}</p>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        {cert.date}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Summary Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Code, label: "Programming Languages", value: "6+" },
              { icon: Globe, label: "Web Technologies", value: "10+" },
              { icon: Cloud, label: "Cloud & DevOps", value: "4+" },
              { icon: Trophy, label: "Certifications", value: "8+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl border border-slate-200"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <motion.div
                  className="text-3xl font-light text-slate-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;