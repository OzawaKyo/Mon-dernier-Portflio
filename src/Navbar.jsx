import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="ozawa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Ozawa Kyo
      </motion.h1>
      <div className="flex gap-24 items-center navl">
        <motion.h1
          className="navlist"
          onClick={() => scrollToSection('skill')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Skills
        </motion.h1>
        <motion.h1
          className="navlist"
          onClick={() => scrollToSection('works')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Works
        </motion.h1>
        <motion.button
          className="lets navlist"
          onClick={() => scrollToSection('contact')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  );
}
