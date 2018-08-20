import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin: 0.5rem;
`;

const TimeComponent = Styled.span`
  display: block;
  padding: 0.25rem;
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  text-shadow: 2px 1px 2px rgba(0,0,0,0.25);
  font-family: 'Lato', sans-serif;
`;

export {
  Wrapper,
  TimeComponent,
};
