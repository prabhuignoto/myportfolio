import React from 'react';
import Styled from 'styled-components';
import { string } from 'prop-types';

const Header = Styled.header`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 400;
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
