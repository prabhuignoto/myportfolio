import Styled from 'react-emotion';

export const About = Styled('div')`
  z-index: 150;
  color: #000;
  padding: 2rem;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 4px;
  /* background: rgba(231, 216, 199, 0.5); */
  /* border-radius: 3px; */
  /* box-shadow: 0 0 10px 5px rgba(0,0,0,0.5); */
  /* text-shadow: 2px 1px 2px rgba(0,0,0,0.25); */
  font-family: 'Comfortaa',sans-serif;
`;

export const Mark = Styled('span')`
  position: relative;
  margin: 0 0.25rem;
`;

export const ImageWrapper = Styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 3rem;
`;
