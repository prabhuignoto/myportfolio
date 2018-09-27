import Styled from 'react-emotion';

export const Wrapper = Styled('figure')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
`;

export const Tagline = Styled('ul')`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */
  flex-wrap: wrap;
  flex-direction: row;
  background: #d5d4d3;
  width: 100%;
  min-height: 4rem;
  height: 0;
`;

export const TaglineItem = Styled('li')`
  margin-right: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
  position: relative;
  color:  #fff;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #747274; */
  background: ${p => (p.color ? p.color : '#747274')};
  transform: skew(-30deg);
  height: 100%;
  padding: 0.5rem 1.5rem;
`;

export const TaglineText = Styled('span')`
  transform: skew(30deg);
`;

export const Separator = Styled('span')`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,1);
  text-shadow: 2px 1px 2px rgba(0,0,0,1);
`;
