import { motion } from 'framer-motion';
import './Work.css';
import mockupImage from '/mockup.png';
import mockup2Image from '/mockup2.png';
import mockup3Image from '/mockup3.png';

export default function Work() {
  return (
    <div className="work flex flex-col items-center" id="works">
      <motion.h1
        className="things"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="blue">Some Things</span> I've Built
      </motion.h1>
      <div className="projects flex flex-col">
        <motion.div
          className="project flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img className="mockup" src={mockupImage} />
          <div className="desc flex flex-col items-end justify-center">
            <motion.h3
              className="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Featured Project
            </motion.h3>
            <motion.h2
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Books For All
            </motion.h2>
            <div className="box">
              <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Engaging Front-End Design, Robust Back-End Solution. Delight in a visually captivating and user-friendly front-end design that entices book enthusiasts to explore our vast collection.
              </motion.p>
            </div>
            <div className="stacks flex">
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Firebase
              </motion.h4>
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Django
              </motion.h4>
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                React
              </motion.h4>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project pro2 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="desc flex flex-col justify-center">
            <motion.h3
              className="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Featured Project
            </motion.h3>
            <motion.h2
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Spolaya Fragrance
            </motion.h2>
            <div className="box">
              <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                Mesmerizing Front-End Design, Unleash Your Senses. Indulge in a sensory journey through our captivating fragrance shop website. Immerse in an enchanting website that captures the essence of scent and allure.
              </motion.p>
            </div>
            <div className="stacks flex">
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                Firebase
              </motion.h4>
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                React
              </motion.h4>
            </div>
          </div>
          <img className="mockup" src={mockup2Image} />
        </motion.div>

        <motion.div
          className="project flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <img className="mockup" src={mockup3Image} />
          <div className="desc flex flex-col items-end justify-center">
            <motion.h3
              className="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              Featured Project
            </motion.h3>
            <motion.h2
              className="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              Blooming Flowers
            </motion.h2>
            <div className="box">
              <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.6 }}
              >
                Inspiring Front-End Design, A Floral Wonderland Awaits. Immerse yourself in a visually captivating and user-friendly front-end design that invites you to explore the mesmerizing world of Blooming Flowers.
              </motion.p>
            </div>
            <div className="stacks flex">
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                Html
              </motion.h4>
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
              >
                Css
              </motion.h4>
              <motion.h4
                className="stackk"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.2 }}
              >
                JavaScript
              </motion.h4>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
