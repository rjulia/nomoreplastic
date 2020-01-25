import React from 'react';
import { connect } from 'react-redux';
import { FiMenu } from "react-icons/fi";
import styled from 'styled-components';
import styles from "../../scss/styles.scss";

const WrapperButtonBurger = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 88px;
  color: ${styles.white};
  cursor: pointer;
  span {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 300;
  }

`



const ButtonBurger = ({ settings }) => {
  return (
    <WrapperButtonBurger>
      <FiMenu size="44px" />
    </WrapperButtonBurger>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ButtonBurger) 
