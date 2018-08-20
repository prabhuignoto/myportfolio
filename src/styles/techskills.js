import Styled from 'styled-components';

export const Wrapper = Styled.ul`
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
`;

export const ItemWrapper = Styled.ul`
  width: 100%;
  list-style: none;
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 0;
  position: relative;
  clip-path: polygon(50% 5%,20% 100%,80% 100%);
  z-index: 1;
`;

export const Item = Styled.li`
  width: 100%;
  height: 6.5rem;
  line-height: 5rem;
  text-align: center;
  padding: 0.5rem;
  background: ${p => p.background};
  color: ${p => (p.color ? p.color : '#fff')};
  font-size: 0.85rem;
  cursor: pointer;
`;

export const Overlay = Styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: transparent;
`;

export const ImageWrapper = Styled.div`
  display: block;
  width: 100%;
  height: 40vh;
`;
