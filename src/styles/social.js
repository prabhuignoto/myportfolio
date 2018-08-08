import Styled from 'styled-components';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Overflow from '../assets/overflowing.svg';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-width: 4rem;
  justify-content: space-between;
  padding: 2rem 0;
  border-radius: 3px;
`;

const Item = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Icon = Styled.i`
  display: block;
  width: 3rem;
  height: 3rem;
  background: url(${(p) => {
    if (p.type === 'linkedin') {
      return Linkedin;
    } if (p.type === 'github') {
      return Github;
    } if (p.type === 'stack') {
      return Overflow;
    }
    return '';
  }});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  flex-basis: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Label = Styled.span`
  display: block;
  flex-basis: 70%;
`;

export {
  Wrapper,
  Item,
  Icon,
  Label,
};
