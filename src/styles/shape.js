import Styled, {
  keyframes,
} from 'styled-components';
import page from '../assets/hero.jpg';

const Shapes = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 10rem; */
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Expand = keyframes`
  0% {
    transform: skew(-0deg) ;
    width: 33%;
  }
  100% {
    transform: skew(-0deg) ;
    width: 35%;
  }
`;

const Collapse = keyframes`
  0% {
    transform: skew(-0deg) ;
    width: 35%;
  }
  100% {
    transform: skew(-0deg) ;
    width: 33%;
  }
`;

const ShapeContent = Styled.div`
  transform: skew(0deg);
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  position: absolute;
  bottom: 2rem;
  width: 100%;
`;


const Shape = Styled.div`
  height: 100%;
  width: ${(p) => {
    switch (p.type) {
      case 1: return '100%';
      case 3: return '30%';
      default: return '35%';
    }
  }};
  /* width: ${p => (p.animation === 'expand' ? '35%' : '33%')}; */
  /* animation-name:  ${p => (p.animation === 'expand' ? Expand : Collapse)}; */
  animation-duration: 400ms;
  animation-timing-function: ease;
  transform-origin: center;
  animation-iteration-count: 1;
  cursor: pointer;
  z-index: ${p => (p.animation === 'expand' ? 100 : 0)};
  /* background: url(${page});
  background-size: cover;
  background-repeat: no-repeat; */
  /* background:  ${(p) => {
    switch (p.type) {
      // case 4: return 'rgba(0, 0, 0, 0.6)';
      case 1: return 'rgba(0, 0, 0, 0.95)';
      case 2: return 'rgba(0, 0, 0, 0.25)';
      // case 3: return 'rgba(0, 0, 0, 0.3)';
      default: return 'transparent';
    }
  }}; */
  clip-path: polygon(35% 0%,100% 0%,65% 100%,0% 100%);
  box-shadow: 0 0 10px 1 rgba(0,0,0,0.5);
`;

export {
  Shapes,
  Shape,
  ShapeContent,
};
