import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <motion.div layout onClick={() => setToggle(!toggle)} className="question">
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className="faq-line" />
    </motion.div>
  );
};

Toggle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Toggle;
