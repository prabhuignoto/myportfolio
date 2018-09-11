import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${p => (p.direction ? p.direction : 'row')};
  width: 100%;
  min-width: 16rem;
  justify-content: space-evenly;
  padding: 1rem 0;
  border-radius: 3px;
  height: 100%;
`;

const Item = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
  }
`;

const IconWrapper = Styled.a`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = Styled.i`
  display: block;
  width: 3rem;
  height: 3rem;
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
  font-size: 0.8rem;
  color: #13293d;
  white-space: nowrap;
  text-align: center;
  &:hover {
    color: #247ba0;
  }
`;

export {
  Wrapper,
  Item,
  Icon,
  Label,
  IconWrapper,
};
