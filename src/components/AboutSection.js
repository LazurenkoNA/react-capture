import React from 'react';
import { motion } from 'framer-motion';
import home1 from '../img/home1.png';
import {
  About, Description, Hide, Image,
} from '../styles';
import { fade, photoAnim, titleAnim } from '../animations';
import Wave from './Wave';

const AboutSection = () => (
  <About>
    <Description>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>
            We work to make
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>
            your
            {' '}
            <span>dreams</span>
            {' '}
            come
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>
            true.
          </motion.h2>
        </Hide>
      </motion.div>
      <motion.p variants={fade}>
        Contact us for any photography or videography ideas that you have.
        We have professionals with amazing skills
      </motion.p>
      {/* eslint-disable-next-line react/button-has-type */}
      <motion.button variants={fade}>Contact Us</motion.button>
    </Description>
    <Image>
      <motion.img src={home1} variants={photoAnim} alt="guy with a camera" />
    </Image>
    <Wave />
  </About>
);

export default AboutSection;
