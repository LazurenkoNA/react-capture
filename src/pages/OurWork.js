import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';
import { pageAnimation } from '../animations';

const OurWork = () => (
  <Work
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <Movie>
      <h2>The Athlete</h2>
      <div className="line" />
      <Link to="/work/the-athlete">
        <img src={athlete} alt="athlete" />
      </Link>
    </Movie>
    <Movie>
      <h2>The Racer</h2>
      <div className="line" />
      <Link to="/work/the-racer">
        <img src={theRacer} alt="athlete" />
      </Link>
    </Movie>
    <Movie>
      <h2>Good Times</h2>
      <div className="line" />
      <Link to="/work/good-times">
        <img src={goodTimes} alt="athlete" />
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
    background: #ccc;
    margin-bottom: 4rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
