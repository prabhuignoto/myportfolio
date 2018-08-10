import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemWrapper, Wrapper } from '../styles/builtwith';


const BuiltWith = ({ tech }) => (
  <Wrapper>
    <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
      {/* {'Built With'} */}
    </span>
    <ItemWrapper title={`Built with ${tech.join(', ')}`}>
      {tech.map(x => (
        <Item name={x} key={x} />
      ))}
    </ItemWrapper>
  </Wrapper>
);

BuiltWith.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BuiltWith;
