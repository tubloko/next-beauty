import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: url("${require('../public/bg-hero.png')}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const H1 = styled.h1`
  font-size: 5vw;
  font-weight: 500;
  line-height: 1.3;
`;

const CustomBorder = styled.span`
  width: 15vw;
  margin-bottom: 2%;
  border-bottom: 1px solid black;
`;

const SubH1 = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 2vw;
`;

const Home = () => {
  const [scrollPosition, setSrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  return (
    <>
      <Layout scrollPosition={scrollPosition}>
        <main>
          <FirstSection>
            <H1>{'So beauty'.toUpperCase()}</H1>
            <CustomBorder />
            <SubH1>
              cтудия лазерной <br/>эпиляции и косметологии
            </SubH1>
          </FirstSection>
        </main>
      </Layout>
    </>
  )
};

export default Home;
