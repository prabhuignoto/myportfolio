import React from 'react';
import Styled from '@emotion/styled';
import { string } from 'prop-types';

const Header = Styled('header')`
  width: 100%;
  font-size: 1.5rem;
  /* font-family: 'Open Sans', sans-serif; */
  font-weight: 700;
  text-transform: uppercase;
  color: ${p => p.color};
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
`;

const SectionHeader = ({ title, color }) => (
  <Header color={color}>
    {title}
  </Header>
);

SectionHeader.propTypes = {
  title: string.isRequired,
  color: string,
};

SectionHeader.defaultProps = {
  color: '#000',
};

export default SectionHeader;
