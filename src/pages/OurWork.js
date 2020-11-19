import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';
import {
  fade, lineAnim, pageAnimation, photoAnim, slider, sliderContainer,
} from '../animations';

const OurWork = () => (
  <Work
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <motion.div variants={sliderContainer}>
      <Frame1 variants={slider} />
      <Frame2 variants={slider} />
      <Frame3 variants={slider} />
      <Frame4 variants={slider} />
    </motion.div>
    <Movie>
      <motion.h2 variants={fade}>The Athlete</motion.h2>
      <motion.div variants={lineAnim} className="line" />
      <Link to="/work/the-athlete">
        <Hide>
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Hide>
      </Link>
    </Movie>
    <Movie>
      <h2>The Racer</h2>
      <motion.div variants={lineAnim} className="line" />
      <Link to="/work/the-racer">
        <Hide>
          <img src={theRacer} alt="athlete" />
        </Hide>
      </Link>
    </Movie>
    <Movie>
      <h2>Good Times</h2>
      <motion.div variants={lineAnim} className="line" />
      <Link to="/work/good-times">
        <Hide>
          <img src={goodTimes} alt="athlete" />
        </Hide>
      </Link>
    </Movie>
  </Work>
);

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
`;
const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 4rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
