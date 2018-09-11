import Styled from 'react-emotion';

export const ImageWrapper = Styled('div')`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
`;

export const IconWrapper = Styled('div')`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`;

export const Icon = Styled('img')`
  max-height: 100%;
  max-width: 100%;
`;

export const Links = Styled('ul')`
  margin: 0.1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`;

export const Link = Styled('li')`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  padding: 0.25rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  /* background: #d5d4d3; */
`;

export const Wrapper = Styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
