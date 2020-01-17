import React from 'react';
import styled from 'styled-components';
import styles from "../../scss/styles.scss";
import { FaAngleLeft } from "react-icons/fa";


const WrapperButtonBack = styled("div")`
  display: flex;
  position:relative;
  width: 108px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${styles.primary};
  border-radius: 20px;
  padding: 0 4px;
  cursor: pointer;
  p {
    color: ${styles.primary};
    font-size: 15px;
    font-weight: 500;
    line-height: 16px;
    margin-left: 5px;
  }

`

const ButtonBack = ({ text, onClick }) => {
  return (
    <WrapperButtonBack onClick={onClick}>
      <FaAngleLeft color={styles.primary} /> <p>{text}</p>
    </WrapperButtonBack>
  )
}

export default ButtonBack
