import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.scss';
import { HongKongIcon, HomeIcon, EmailIcon, AddIcon } from "../../assets/icons";
import { ButtonMenu, ButtonLanguage, ButtonBurger } from "../../components";
import localization from "../../localization";


const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/" className="menu__logo">
        <HongKongIcon />
      </NavLink>
      <div className="menu__buttons">
        <NavLink to="/map">
          <ButtonMenu text={localization.home.home}>
            <HomeIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink to="contact">
          <ButtonMenu text={localization.home.contact}>
            <EmailIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink to="add">
          <ButtonMenu text={localization.home.add}>
            <AddIcon width="60px" />
          </ButtonMenu>
        </NavLink>
      </div>
      {/* <ButtonLanguage /> */}
      <div className="menu__burger">
        <ButtonBurger />
      </div>
    </div>
  )
}

export default Menu
