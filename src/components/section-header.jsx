import React from 'react';
import Styled from 'styled-components';
import { string } from 'prop-types';

const Header = Styled.header`
  width: 100%;
  font-size: 1.75rem;
  color: #000;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
`;

const SectionHeader = ({ title }) => (
  <Header>
    {title}
  </Header>
);

SectionHeader.propTypes = {
  title: string.isRequired,
};

export default SectionHeader;
