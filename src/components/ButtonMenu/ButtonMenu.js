import React from 'react';
import styled from 'styled-components';
import styles from "../../scss/styles.scss";
// Creates a StyledButton component of a button with the given style
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  cursor: pointer;
  svg {
    fill: ${styles.secondary};
  }
  svg:hover {
    
    fill: ${styles.white};
  }
  p {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 300;
    color: ${props => props.color};
    margin: 5px 0 0
  }
`;

// StyledButton can now be used like any other component
const Button = ({ children, onClick, text }) => {
  console.log(styles.primary)
  return (
    <StyledButton
      onClick={onClick}
      color={styles.white}>
      {children}
      <p> {text} </p>
    </StyledButton>
  )
}

export default Button