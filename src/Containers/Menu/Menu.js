import React from 'react';
import './Menu.scss';
import { HongKongIcon, HomeIcon, EmailIcon, AddIcon } from "../../assets/icons";
import { ButtonMenu } from "../../components";
import styled from 'styled-components';

const WrapperLogo = styled('div')`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = () => {
  return (
    <div className="menu">
      <WrapperLogo>
        <HongKongIcon />
      </WrapperLogo>

      <ButtonMenu text="home">
        <HomeIcon width="40px" />
      </ButtonMenu>
      <ButtonMenu text="add">
        <AddIcon width="40px" />
      </ButtonMenu>
      <ButtonMenu text="contact">
        <EmailIcon width="40px" />
      </ButtonMenu>

    </div>
  )
}

export default Menu
