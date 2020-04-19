import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ tag, text, classN, color, size }) => {

  const TagName = tag || 'h1'

  const Content = styled(TagName)`
    color: ${props => props.color};
    font-size: ${props => props.size}px;
    margin: 1rem 0;

`;

  return (
    <Content className={classN} color={color} size={size}>
      {text}
    </Content>
  )
}

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  classN: PropTypes.string
};

export default Title
