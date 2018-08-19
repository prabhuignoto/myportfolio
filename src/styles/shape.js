import Styled, {
} from 'styled-components';

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
  clip-path: polygon(40% 0%,100% 0%,60% 100%,0% 100%);
  box-shadow: 0 0 10px 1 rgba(0,0,0,0.5);
`;

export {
  Shapes,
  Shape,
  ShapeContent,
};
