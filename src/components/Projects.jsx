import { motion } from "framer-motion";
import { ExternalLink, Calendar, Github, Code2, Database, Cloud, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const projectsData = [
  {
    title: "Lung Cancer Detection Using Machine Learning",
    description: "Advanced machine learning solution leveraging CT scans to identify early signs of malignancy with high accuracy. Utilizes deep learning algorithms for medical image analysis, improving early diagnosis and treatment outcomes.",
    image: "/Lung cancer.jpg",
    tags: ["Machine Learning", "AI", "Python", "TensorFlow", "OpenCV", "Medical Imaging"],
    period: "January 2025",
    category: "AI/ML",
    icon: Code2,
    achievements: ["95% Accuracy", "Real-time Processing", "Clinical Trial Ready"],
    teamSize: "Solo Project",
    status: "Completed",
    githubUrl: "https://github.com/Ranjana124/Lung-Cancer-Detection-And-Prediction-Using-CTscan",
    liveUrl: null
  },
  {
    title: "Online Pharmacy Management System",
    description: "Comprehensive web-based application for managing pharmacy operations. Features include product management, order processing, customer management, and sales reporting, designed to streamline pharmacy workflows and enhance customer service.",
    image: "/homepage.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    period: "March 2025 - June 2025",
    category: "Web Development",
    icon: Database,
    achievements: ["User Authentication", "Product Management", "Order Tracking","Responsive Design","prescription upload"],
    teamSize: "solo Project",
    status: "Deployed",
    githubUrl: "https://github.com/Ranjana124/Medplus-Pharmacy-using-reactjs",
    liveUrl: "https://medplus-pharmacy-using-reactjs.vercel.app/"
  },
  {
    title: "Smart Gym Management System",
    description: "Full-stack MERN application featuring user registration, session booking, and fitness tracking. Includes admin dashboard for member management, scheduling, and analytics with real-time updates and secure authentication.",
    image: "/ui.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    period: "Recent",
    category: "Full Stack",
    icon: Code2,
    achievements: ["Real-time Updates", "Payment Integration", "Mobile Responsive"],
    teamSize: "solo Project",
    status: "In Development",
    githubUrl: "https://github.com/Ranjana124/BookMyFit-Gym-Web-Application-",
    liveUrl: "https://bookmyfit-1.onrender.com/"
  },
  {
    title: "Online Catering Management System",
    description: "Real-time catering platform with integrated payment gateway for automating catering services. Features inventory management, billing system, receipt generation, and comprehensive sales reporting for catering businesses.",
    image: "https://www.caterzen.com/hubfs/online-ordering-catering-software-1.png",
    tags: ["Java", "PHP", "MySQL", "CSS"],
    period: "Recent",
    category: "E-commerce",
    icon: Cloud,
    achievements: ["Payment Gateway", "Inventory System", "Sales Analytics"],
    teamSize: "Solo Project",
    status: "Completed",
    githubUrl: null,
    liveUrl: null
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI/ML", "Web Development", "Full Stack", "E-commerce"];

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case "AI/ML": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Web Development": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Full Stack": return "bg-purple-50 text-purple-700 border-purple-200";
      case "E-commerce": return "bg-orange-50 text-orange-700 border-orange-200";
      default: return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-emerald-500";
      case "Deployed": return "bg-blue-500";
      case "In Development": return "bg-amber-500";
      default: return "bg-slate-500";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing innovative software solutions that demonstrate expertise in modern development practices
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 border ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                      <span className="text-xs font-medium text-slate-700">{project.status}</span>
                    </div>
                  </div>

                  {/* Hover actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-slate-800 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">Key Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded border border-slate-200"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center text-slate-500 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                    <motion.button
                      className="text-slate-600 hover:text-slate-900 font-medium text-sm flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      <span>Learn More</span>
                      
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Code2, label: "Projects Completed", value: "10+" },
              { icon: Award, label: "Technologies Used", value: "15+" },
              { icon: Users, label: "Team Projects", value: "5+" },
              { icon: Database, label: "Systems Built", value: "4+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200"
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
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
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

export default Projects;
