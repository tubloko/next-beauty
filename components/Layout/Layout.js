import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const Header = styled.header`
  position: fixed;
  background-color: ${({ scrollPosition }) => !scrollPosition ? '' : 'white'};
  top: ${({ scrollPosition }) => !scrollPosition ? '5%' : '0px'};
  transition: .3s;
  width: 100%;
`;

const Layout = ({ children, scrollPosition }) => {
  return (
    <>
      <Header scrollPosition={scrollPosition}>
        <Navbar />
      </Header>
      {children}
      <Footer />
    </>
  );
}

export {Layout};
