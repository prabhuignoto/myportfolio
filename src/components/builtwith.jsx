import React, { Fragment } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactSVG from '../assets/react.svg';
import TypeScript from '../assets/typescript.svg';
import VueSVG from '../assets/vue.svg';
import Redux from '../assets/redux.svg';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem;
  margin-left: 1rem;
  font-size: 1rem;
  flex-wrap: wrap;
`;

const ItemWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 1rem;
`;

const ItemLabel = Styled.span`
  display: block;
  text-transform: capitalize;
  margin-left: 0.25rem;
  font-size: 0.9rem;
`;

const Item = Styled.div`
  padding: 1rem;
  width: 1rem;
  height: 1rem;
  margin: 0.25rem;
  background: url(${(p) => {
    if (p.name === 'react') {
      return ReactSVG;
    } if (p.name === 'typescript') {
      return TypeScript;
    } if (p.name === 'vue') {
      return VueSVG;
    } if (p.name === 'redux') {
      return Redux;
    }
  }});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const BuiltWith = ({ tech }) => (
  <Wrapper>
    <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
      {'Built With'}
    </span>
    <ItemWrapper>
      {tech.map(x => (
        <Item name={x} title={x} />
      ))}
    </ItemWrapper>
  </Wrapper>
);

BuiltWith.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default BuiltWith;
