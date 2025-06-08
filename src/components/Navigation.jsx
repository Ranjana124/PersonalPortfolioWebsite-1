import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Home, User, GraduationCap, FolderOpen, Code, Mail, Award, ChevronUp } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Certificates", href: "#certificates", icon: Award },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              className="flex items-center space-x-3"
              style={{ scale: logoScale }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-white font-bold text-lg relative z-10">RC</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                </div>
              </motion.div>
              <motion.span
                className="text-xl font-bold text-slate-800"
                whileHover={{ color: "#3b82f6" }}
              >
                Ranjana Choudhary
              </motion.span>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute inset-0 bg-blue-50 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            <div className="flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-50 lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronUp size={20} />
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default Navigation;