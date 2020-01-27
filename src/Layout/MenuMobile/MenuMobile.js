import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { HomeIcon, EmailIcon, AddIcon } from "../../assets/icons";
import { ButtonMenu } from "../../components";
import localization from "../../localization";
import { toggleMenu } from "../../services/redux/actions/settings.actions";


import './MenuMobile.scss';

const MenuMobile = ({ isOpen, onToggleMenu }) => {
  const IsMenuOpen = (isOpen) ? 'isOpen' : '';
  const handelToggleMenu = () => {
    onToggleMenu()
  }
  return (
    <div className={`${IsMenuOpen} menu-mobile`}>
      <div className="menu__buttons">
        <NavLink onClick={handelToggleMenu} to="/map">
          <ButtonMenu text={localization.home.home}>
            <HomeIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink onClick={handelToggleMenu} to="contact">
          <ButtonMenu text={localization.home.contact}>
            <EmailIcon width="60px" />
          </ButtonMenu>
        </NavLink>
        <NavLink onClick={handelToggleMenu} to="add">
          <ButtonMenu text={localization.home.add}>
            <AddIcon width="60px" />
          </ButtonMenu>
        </NavLink>

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.settings.isOpenMenu
})

const mapDispatchToProps = dispatch => ({
  onToggleMenu: () => dispatch(toggleMenu())
})



export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile) 
