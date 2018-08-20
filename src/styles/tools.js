import Styled from 'styled-components';

const Content = Styled.div`
  position: relative;
  box-shadow: 0 0 13px 5px rgba(0,0,0,0.2);
  &::before {
    content: '${p => p.heading}';
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    color: rgba(0, 0, 0, 0.7);
    height: auto;
    width: auto;
    font-size: 0.75rem;
    font-weight: 500;
    background: #fff;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    background: #E8F1F2;
    color: #000;
  }
`;


const Container = Styled.section`
  min-height: 80vh;
  padding: 0;
`;

export {
  Content,
  Container,
};
