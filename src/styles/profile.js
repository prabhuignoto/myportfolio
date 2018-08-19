import Styled from 'styled-components';

const Wrapper = Styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
`;

const ImageWrapper = Styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
`;

const Tagline = Styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  /* background: rgba(255,255,255,0.7); */
  border-radius: 3px;
  flex-wrap: wrap;
`;

const TaglineItem = Styled.li`
  margin: 0.5rem 2rem;
  font-size: 1.75rem;
  font-weight: 700;
  position: relative;
  color: #fff;
  text-shadow: 2px 1px 2px rgba(0,0,0,1);
  font-family: 'Comfortaa', sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Separator = Styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,1);
  text-shadow: 2px 1px 2px rgba(0,0,0,1);
`;

export {
  Wrapper,
  ImageWrapper,
  Tagline,
  Separator,
  TaglineItem,
}