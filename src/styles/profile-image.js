import Styled from 'react-emotion';

export const ImageWrapper = Styled('div')`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;

export const IconWrapper = Styled('div')`
  height: 1.25rem;
  width: 1.25rem;
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
  font-size: 0.7rem;
  margin: 0;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  padding: 0.25rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`;

export const Wrapper = Styled('div')`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem; */
`;
