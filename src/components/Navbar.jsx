import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "projects", "contact"];

      for (let id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md 
        ${scrolled ? "bg-slate-900/90 shadow-lg py-4" : "bg-transparent py-3"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            Matheesha<span className="text-primary">.</span>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-white/80 font-medium">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`cursor-pointer transition relative ${
                  activeSection === link.id
                    ? "text-primary"
                    : "hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="h-[2px] bg-primary w-full absolute -bottom-1 left-0"
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-6 text-white text-xl">
            <a 
              href="https://github.com/matheeshagit" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-primary transition" />
            </a>

            <a 
              href="https://linkedin.com/in/matheesha-shehan-24502623a" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-primary transition" />
            </a>

            <a href="mailto:12matheesha@gmail.com">
              <FaEnvelope className="hover:text-primary transition" />
            </a>

            <a
              href="/Matheesha-CV.pdf"
              download
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/80 transition"
            >
              Download CV
            </a>
          </div>



          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-slate-900/95 shadow-xl z-50 p-8 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="text-white text-3xl self-end mb-10"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

              {/* Links */}
              <ul className="flex flex-col gap-8 text-white text-lg font-medium">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`cursor-pointer transition relative ${
                      activeSection === link.id
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>

              {/* Socials + CV */}
              <div className="mt-10 flex flex-col gap-5">
                <a
                  href="/Matheesha-CV.pdf"
                  download
                  className="flex items-center gap-3 text-white bg-primary/20 hover:bg-primary/30 p-3 rounded-lg transition"
                >
                  <FaFileDownload className="text-primary" />
                  Download CV
                </a>

                <div className="flex gap-5 text-white/80 text-2xl">
                  <a 
                    href="https://github.com/matheeshagit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:text-white transition" />
                  </a>

                  <a 
                    href="https://linkedin.com/in/matheesha-shehan-24502623a" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-white transition" />
                  </a>

                  <a href="mailto:12matheesha@gmail.com">
                    <FaEnvelope className="hover:text-white transition" />
                  </a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
