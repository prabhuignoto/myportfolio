import Styled from 'styled-components';
import Linkedin from '../assets/linkedin-icon.svg';
import Github from '../assets/github-octocat.svg';
import Overflow from '../assets/stackoverflow-com.svg';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-width: 4rem;
  justify-content: space-evenly;
  padding: 2rem 0;
  border-radius: 3px;
`;

const Item = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 50%;
  background: rgba(0,0,0,0.45);
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.8);
  width: 5rem;
  height: 5rem;
  &:hover {
    background: rgba(255,255,255,0.15);
    box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.95);
  }
`;

const IconWrapper = Styled.a`
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

const Icon = Styled.i`
  display: block;
  width: 100%;
  height: 100%;
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
  background-size: ${(p) => {
    if (p.type === 'stack') {
      return '50%';
    }
    return '70%';
  }};
  flex-basis: 100%;
  cursor: pointer;
`;

const Label = Styled.span`
  display: block;
  width: 100px;
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 2px 1px 2px rgba(0,0,0,0.9);
  white-space: nowrap;
  text-align: center;
`;

export {
  Wrapper,
  Item,
  Icon,
  Label,
  IconWrapper,
};
