import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.scss';
import { HongKongIcon, HomeIcon, EmailIcon, AddIcon, Shop } from "../../assets/icons";
import { ButtonMenu, ButtonBurger } from "../../components"
import { useTranslation } from 'react-i18next';


const Menu = () => {

  const { t } = useTranslation();
  return (
    <div className="menu">
      <NavLink to="/" className="menu__logo">
        <HongKongIcon />
      </NavLink>
      <div className="menu__buttons">
        <NavLink to="/map">
          <ButtonMenu text={t('menu.home')}>
            <HomeIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink to="shops">
          <ButtonMenu text={t('menu.shops')}>
            <Shop width="60px" style={{ transform: 'scale(0.7)' }} />
          </ButtonMenu>
        </NavLink>
        <NavLink to="contact">
          <ButtonMenu text={t('menu.contact')}>
            <EmailIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink to="add">
          <ButtonMenu text={t('menu.add')}>
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
