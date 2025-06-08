import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:ranjanachoudhary124@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ranjana-choudhary-522320221",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Ranjana124",
      label: "GitHub"
    }
    {
      icon: Phone,
      href: "tel:+918660204905",
      label: "Phone"
    }
  ];

  return (
    <section id="home" className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Top left circle */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/40 rounded-full"></div>
        {/* Bottom right circle */}
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-200/40 rounded-full"></div>
        {/* Top right small circle */}
        <div className="absolute top-32 right-40 w-12 h-12 bg-blue-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-slate-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Ranjana Choudhary
                  </span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl lg:text-2xl font-medium text-slate-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Software Developer & Technology Enthusiast
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-slate-500 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  MCA student specializing in full-stack development, machine learning, and 
                  cloud technologies. Passionate about creating scalable solutions and 
                  modern web applications.
                </motion.p>
              </div>

              {/* Action buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  
                </motion.button>
                
                <motion.a
                  href="/Ranjanachoudhary.pdf"
                  download="Ranjana_Choudhary_Resume.pdf"
                  className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  
                  Download Resume
                </motion.a>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="border border-emerald-300 text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Workspace with laptop showing code"
                  className="rounded-2xl shadow-2xl"
                />
                {/* Green status indicator */}
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-emerald-400 rounded-full shadow-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-slate-400 hover:text-slate-600 transition-colors"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
