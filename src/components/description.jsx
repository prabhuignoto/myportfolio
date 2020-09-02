import React from 'react';
import Styled from '@emotion/styled';
import { string } from 'prop-types';


const DescriptionWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const DescriptionContent = Styled('span')`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  text-align: center;
  color: ${p => (p.color ? '#000' : '#fff')};
`;


const Description = ({ color, text }) => (
  <DescriptionWrapper>
    <DescriptionContent color={color}>
      {text}
    </DescriptionContent>
  </DescriptionWrapper>
);

Description.propTypes = {
  color: string.isRequired,
  text: string.isRequired,
};

export default Description;
