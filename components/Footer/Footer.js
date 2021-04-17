import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #fab2a6;
`;

const buttonsConfig = [
  { name: 'Акции', path: '#' },
  { name: 'Наши мастера', path: '#' },
  { name: 'Услуги', path: '/price' },
  { name: 'Галерея', path: '#' },
  { name: 'So beauty & urman', path: '#' },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        {buttonsConfig.map(({ name}) => (
          <li key={name}>{name.toUpperCase()}</li>
        ))}
      </ul>
    </FooterWrapper>
  );
}

export { Footer };
