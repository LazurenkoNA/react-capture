import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <StyledNav>
    <h1>
      <a href="#">Capture</a>
    </h1>
    <ul>
      <li>
        <a href="#">1. About Us</a>
      </li>
      <li>
        <a href="#">2. Our Work</a>
      </li>
      <li>
        <a href="#">3. Contact Us</a>
      </li>
    </ul>
  </StyledNav>
);

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  a{
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
