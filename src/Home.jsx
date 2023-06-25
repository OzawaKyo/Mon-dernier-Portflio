import { motion } from 'framer-motion';
import heroImage from '/hero2.png';
import lineImage from '/line.png';
import line2Image from '/line2.png';
import gitImage from '/git.png';
import gmailImage from '/gmail.png';
import igImage from '/ig.png';

import './Home.css';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container flex flex-row content-center">
      <div className="ideas flex flex-col gap-11">
        <motion.div
          className="flex flex-row gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img className="line" src={lineImage} alt="Line" />
          <h1 className="mohamed">Mohamed Amarcha</h1>
        </motion.div>
        <motion.h1
          className="bring"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I bring <span className="blue">ideas</span> to web.
        </motion.h1>
        <motion.p
          className="sol"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Transforming complex ideas into elegant and scalable front-end
          solutions.
        </motion.p>
        <motion.button
          className="view"
          onClick={() => scrollToSection('works')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          View My Work
        </motion.button>
      </div>
      <div className="flex flex-col items-center gap-16">
        <motion.img
          className="hero"
          src={heroImage}
          alt="Hero"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex flex-row gap-2 justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img className="line2" src={line2Image} alt="Line 2" />
            <h1 className="socials">Socials</h1>
          </motion.div>
          <motion.div
            className="flex items-center justify-evenly"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://github.com/ozawakyo" target="_blank" rel="noreferrer">
              <img className="logo" src={gitImage} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/simoamarcha/" target="_blank" rel="noreferrer">
              <img className="logo" src={igImage} alt="Instagram" />
            </a>
            <motion.img
              onClick={() => scrollToSection('contact')}
              className="logo"
              src={gmailImage}
              alt="Gmail"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
