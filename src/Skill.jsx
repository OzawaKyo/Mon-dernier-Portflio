import { motion } from 'framer-motion';
import './Skill.css';
import angularImage from '/angular.png';
import reactImage from '/react.png';
import firebaseImage from '/firebase.png';
import tailwindImage from '/tailwind.png';
import springImage from '/spring.png';
import symfonyImage from '/symfony.png';
import csharpImage from '/csharp.png';
import djangoImage from '/django.png';
import figmaImage from '/figma.png';
import aeImage from '/ae.png';
import aiImage from '/ai.png';
import psImage from '/ps.svg';

export default function Skill() {
  return (
    <section className="skill flex flex-col items-center" id="skill">
      <div className="flex flex-col items-center">
        <motion.li
          className="superpower"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I Thrive In
        </motion.li>
        <motion.h1
          className="ski"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Skills
        </motion.h1>
        <motion.h2
          className="wor"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I have been working in the web development industry for over{' '}
          <span className="yellow">3 years</span>.
        </motion.h2>
      </div>
      <div className="stack flex">
        <div className="logos flex gap-10 flex-wrap">
          <motion.img
            src={angularImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.img
            src={reactImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.img
            src={firebaseImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.img
            src={tailwindImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
        </div>
        <div className="logos flex gap-10 flex-wrap">
          <motion.img
            src={springImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src={symfonyImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
          <motion.img
            src={csharpImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          <motion.img
            src={djangoImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          />
        </div>
        <div className="logos flex gap-10 flex-wrap">
          <motion.img
            src={figmaImage}
            className="logoo figma"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          />
          <motion.img
            src={aeImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          />
          <motion.img
            src={aiImage}
            className="logoo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.8 }}
          />
          <motion.img
            src={psImage}
            className="logoo ps"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
        </div>
      </div>
    </section>
  );
}
