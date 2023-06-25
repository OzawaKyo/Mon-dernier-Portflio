import { motion } from 'framer-motion';
import './Contact.css';
import handshake from '/handshake.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oj81k9d',
        'template_hdlm96o',
        form.current,
        'C2Tv2ddJ-J7qXYa05'
      )
      .then(
        (result) => {
          window.alert('Message sent successfully!');
        },
        (error) => {
          window.alert('Error sending message. Please try again later.');
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="contact flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.li
        className="superpower pr-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact me
      </motion.li>
      <div className="flex items-center gap-10 frr">
        <motion.h1
          className="ski build"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let’s build something together
        </motion.h1>
        <motion.img
          src={handshake}
          className="hand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </div>
      <motion.h2
        className="wor create"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        I'm excited to collaborate and bring your{' '}
        <span className="yellow">ideas</span> to life. Let's{' '}
        <span className="yellow">create</span> something remarkable!
      </motion.h2>
      <motion.form
        className="flex flex-col inputs kk"
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex inputs gr">
          <div className="flex flex-col inputs">
            <motion.input
              type="text"
              placeholder="Name"
              className="input1"
              name="user_name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="input1"
              name="user_email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
          </div>
          <motion.input
            type="text"
            placeholder="Enter your message"
            className="input1 input2"
            name="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
        </div>
        <motion.button
          className="button1"
          value="Send"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Send your message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
