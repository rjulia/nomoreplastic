import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Title.scss'

const Title = ({ tag, text, classN, color, size }) => {

  const TagName = tag || 'h1'

  const WrapperTitle = styled(TagName)`
    color: ${props => props.color};
    font-size: ${props => props.size}px;
    margin: 1rem 0;

`;

  return (
    <WrapperTitle className={classN} color={color} size={size}>
      {text}
    </WrapperTitle>
  )
}

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classN: PropTypes.string
};

export default Title
