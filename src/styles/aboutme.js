import Styled from "@emotion/styled";

export const About = Styled("div")`
  z-index: 150;
  color: #000;
  padding: 2rem;
  font-size: 1.25rem;
  font-weight: 400;
  border-radius: 4px;
  /* font-family: 'Open Sans',sans-serif; */
`;

export const Mark = Styled("span")`
  margin: 0 0.1rem;
`;

export const ImageWrapper = Styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 3rem;
`;

export const SponsorWrapper = Styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  margin: 1rem 0;
`;
