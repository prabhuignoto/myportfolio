import Styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import * as Images from './images';

const List = Styled.ul`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ListItem = Styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
`;

const ImgWrapper = Styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = Styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const ListItemText = Styled.span`
  display: block;
  color: #000;
  font-size: 1.1rem;
`;

const Hdr = Styled.header`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const Wrapper = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;


const Box = ({ title, items }) => (
  <Wrapper>
    <Hdr>
      {title}
    </Hdr>
    <List>
      {items.map(x => (
        <ListItem>
          <ImgWrapper>
            <Img src={Images[x.icon]} className="image" />
          </ImgWrapper>
          <ListItemText>
            {x.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Wrapper>
);

Box.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default Box;
