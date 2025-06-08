import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Github, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast.js";
const resumePdf = "/Ranjanachoudhary.pdf";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create mailto link
    const mailtoLink = `mailto:ranjanachoudhary124@gmail.com?subject=${encodeURIComponent(subject || 'Website Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Thank you for your message!",
      description: "Your email client should open now. I'll get back to you soon.",
    });

    // Reset form
    e.target.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ranjanachoudhary124@gmail.com",
      href: "mailto:ranjanachoudhary124@gmail.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8660204905",
      href: "tel:+918660204905",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ranjana-choudhary-522320221",
      href: "https://linkedin.com/in/ranjana-choudhary-522320221",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ranjanachoudhary",
      href: "https://github.com/ranjanachoudhary",
      color: "bg-gray-100 text-gray-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let's discuss opportunities and how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for a dedicated developer or have an exciting project in mind, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{item.title}</h4>
                        {item.href !== "#" ? (
                          <a 
                            href={item.href} 
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    className="w-full"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 border-t border-slate-200 pt-8"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ranjana Choudhary</h3>
            <p className="text-slate-600 mb-6">Building the future through innovative software solutions</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:ranjanachoudhary124@gmail.com"
                className="group flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ranjana-choudhary-522320221"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ranjanachoudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 hover:bg-gray-800 hover:text-white transition-all transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="tel:+918660204905"
                className="group flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
                title="Phone"
              >
                <Phone size={20} />
              </a>
              <a
                href={resumePdf}
                download="Ranjana_Choudhary_Resume.pdf"
                className="group flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-600 hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110 duration-300 shadow-md hover:shadow-lg"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
            </div>
            <div className="border-t border-slate-200 pt-8">
              <p className="text-slate-400">&copy; 2025 Ranjana Choudhary. All rights reserved.</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;