import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const educationData = [
  {
    degree: "Masters in Computer Applications",
    specialization: "MCA in DevOps & Microservices and Data Analytics and Visualization",
    institution: "Presidency University",
    location: "Bengaluru",
    period: "2023 - 2025",
    grade: "CGPA: 8.78",
    gradeType: "excellent",
    side: "left"
  },
  {
    degree: "Bachelors in Computer Applications",
    institution: "Nagarjuna Degree College",
    location: "Bengaluru, Karnataka, India",
    period: "2020 - 2023",
    grade: "CGPA: 7.99",
    gradeType: "good",
    side: "right"
  },
  {
    degree: "Pre-University Education (PCMB)",
    institution: "Sheshadripuram PU College",
    location: "Bengaluru, Karnataka",
    period: "2019 - 2020",
    grade: "64%",
    gradeType: "average",
    side: "left"
  },
  {
    degree: "High School Education (ICSE Board)",
    institution: "Divine English School",
    location: "Bengaluru, Karnataka",
    period: "2017 - 2018",
    grade: "69%",
    gradeType: "average",
    side: "right"
  }
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  const getGradeColor = (type) => {
    switch (type) {
      case "excellent": return "bg-green-100 text-green-800";
      case "good": return "bg-blue-100 text-blue-800";
      default: return "bg-amber-100 text-amber-800";
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building a strong foundation in computer science and technology
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                  
                  <div className={`w-full ${edu.side === 'left' ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg ml-8 md:ml-0 hover:shadow-xl transition-shadow duration-300">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
                        {edu.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                      {edu.specialization && (
                        <p className="text-blue-600 font-medium mb-2 text-sm">{edu.specialization}</p>
                      )}
                      <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-slate-600 text-sm mb-3">{edu.location}</p>
                      <div className={`inline-block text-sm px-3 py-1 rounded-full font-medium ${getGradeColor(edu.gradeType)}`}>
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;