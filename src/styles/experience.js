import Styled from 'styled-components';

export const Wrapper = Styled.div`
display: flex;
min-height: 35rem;
justify: center;
align-items: center;
`;

export const Company = Styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;

>:not(:last-child):after{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background: #ddd;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
}
`;

export const Figure = Styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 10rem;
`;

export const Text = Styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: #247BA0;
`;
