import { motion } from "framer-motion";
import { Award, Download, ExternalLink, Calendar, Shield, Code, Cloud, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certificatesData = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Training",
    date: "January 22, 2025",
    description: "Successfully completed AWS-DGL-SS-AWS course covering cloud computing fundamentals, AWS core services, and cloud architecture principles.",
    category: "Cloud Computing",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    pdfPath: "/certificates/aws-certificate.pdf",
    verificationUrl: "https://verify.onwingspan.com",
    skills: ["AWS Services", "Cloud Architecture", "Cloud Security", "Cost Management"]
  },
  {
    title: "Full Stack Development",
    issuer: "Wingspan Learning",
    date: "September 19, 2024",
    description: "Comprehensive full stack development course covering frontend and backend technologies, database management, and deployment strategies.",
    category: "Web Development",
    icon: Code,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    pdfPath: "/certificates/fullstack-certificate.pdf",
    verificationUrl: "https://verify.onwingspan.com",
    skills: ["React.js", "Node.js", "Database Design", "API Development"]
  },
  {
    title: "Android Development",
    issuer: "Great Learning",
    date: "Completed",
    description: "Android application development certification covering mobile app design, development lifecycle, and deployment to Google Play Store.",
    category: "Mobile Development",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    pdfPath: "/certificates/android-certificate.pdf",
    verificationUrl: "https://www.mygreatlearning.com/certificate/HELDYKXT",
    skills: ["Android Studio", "Java/Kotlin", "UI/UX Design", "App Publishing"]
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "January 22, 2025",
    description: "Practical cybersecurity training covering IAM fundamentals, security strategy assessment, custom solutions, and platform integration.",
    category: "Cybersecurity",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    pdfPath: "/certificates/forage-certificate.pdf",
    verificationCode: "QSbTnASpCxp7MfZvG",
    skills: ["IAM Strategy", "Security Assessment", "Platform Integration", "Risk Management"]
  }
];

const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certificates" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Certifications & Training
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications and specialized training programs that validate my expertise 
            across cloud computing, development, and cybersecurity domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${cert.borderColor} hover:border-opacity-60`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 ${cert.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className={`h-6 w-6 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  
                  {cert.date}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                  
                  {cert.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-sm font-medium text-slate-700 mb-2">Key Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex-1`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  
                  View Certificate
                </motion.a>
                
                {cert.verificationUrl && (
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    
                    Verify
                  </motion.a>
                )}
              </div>

              {/* Verification Code */}
              {cert.verificationCode && (
                <div className="mt-3 p-2 bg-slate-100 rounded-lg">
                  <p className="text-xs text-slate-600">
                    <span className="font-medium">Verification Code:</span> {cert.verificationCode}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Certifications", value: "4+", icon: Award },
            { label: "Domains", value: "4", icon: Code },
            { label: "Recent", value: "2025", icon: Calendar },
            { label: "Verified", value: "100%", icon: Shield }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-xl mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;