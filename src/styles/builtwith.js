import Styled from 'styled-components';
import ReactSVG from '../assets/react.svg';
import TypeScript from '../assets/typescript.svg';
import VueSVG from '../assets/vue.svg';
import Redux from '../assets/redux.svg';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem;
  font-size: 1rem;
  flex-wrap: wrap;
`;

export const ItemWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 1rem;
`;

export const ItemLabel = Styled.span`
  display: block;
  text-transform: capitalize;
  margin-left: 0.25rem;
  font-size: 0.9rem;
`;

export const Item = Styled.div`
  padding: 0.75rem;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.5rem 0 0;
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
    return '';
  }});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;
