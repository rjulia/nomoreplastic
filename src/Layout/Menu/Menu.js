import React from 'react';
import './Menu.scss';
import { HongKongIcon, HomeIcon, EmailIcon, AddIcon } from "../../assets/icons";
import { ButtonMenu } from "../../components";
import styled from 'styled-components';
import styles from "../../scss/styles.scss";
import { NavLink } from "react-router-dom";

const WrapperMenu = styled('div')`
  position: fixed;
  width: 100px;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${styles.primary};
`

const WrapperLogo = styled('div')`
  margin: 0 14px 47px;
  padding-top: 25px;
  width: 72px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.hongkong};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px
`;

const Menu = () => {
  return (
    <WrapperMenu>
      <NavLink to="/">
        <WrapperLogo>
          <HongKongIcon />
        </WrapperLogo>
      </NavLink>
      <NavLink to="/map">
        <ButtonMenu text="home">
          <HomeIcon width="40px" />
        </ButtonMenu>
      </NavLink>
      <NavLink to="contact">
        <ButtonMenu text="contact">
          <EmailIcon width="40px" />
        </ButtonMenu>
      </NavLink>
      <NavLink to="add">
        <ButtonMenu text="add">
          <AddIcon width="40px" />
        </ButtonMenu>
      </NavLink>
    </WrapperMenu>
  )
}

export default Menu
