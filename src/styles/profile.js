import Styled from 'styled-components';

const Wrapper = Styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
`;

const Tagline = Styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  /* margin: 1rem; */
  /* background: rgba(255,255,255,0.8); */
  flex-wrap: wrap;
  flex-direction: row;
  background: #d5d4d3;
  width: 100%;
`;

const TaglineItem = Styled.li`
  margin: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  position: relative;
  color:  #000;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  font-family: 'Comfortaa', sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Separator = Styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,1);
  text-shadow: 2px 1px 2px rgba(0,0,0,1);
`;

export {
  Wrapper,
  Tagline,
  Separator,
  TaglineItem,
}