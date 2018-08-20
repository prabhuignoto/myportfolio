import Styled from 'styled-components';

export const ImageWrapper = Styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`;

export const Links = Styled.ul`
  margin: 0.1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`;

export const Link = Styled.li`
  width: 100%;
  font-size: 0.75rem;
  margin: 0.25rem 0;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  color: #000;
  font-family: 'Comfortaa', sans-serif;
  /* background: #cec4b5; */
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  &:hover {
  }
`;
