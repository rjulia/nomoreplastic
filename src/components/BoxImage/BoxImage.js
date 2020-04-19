import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Content = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    height: ${props => props.height}px;
    background-repeat: no-repeat;
    background-clip: border-box;
    background-position: center;
    background-size: cover;
    background-color: white;
    border-radius: 12px;

`;

const Container = styled.div`
    border-radius: 22px;
    border: 2px solid #e2e2e2;
    box-sizing: border-box;
    background-color: white;
    overflow: hidden;
    padding: 10px
`;

const BoxImage = ({ img, height }) => {
  return (
    <Container>
      <Content img={img} height={height} />
    </Container>
  )
}


BoxImage.propTypes = {
  img: PropTypes.string
};

export default BoxImage