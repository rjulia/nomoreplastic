import React from 'react';
import { connect } from "react-redux";

import './MenuMobile.scss';

const MenuMobile = ({ isOpen }) => {
  const IsMenuOpen = (isOpen) ? 'isOpen' : '';
  return (
    <div className={`${IsMenuOpen} menu-mobile`}>
      hello
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.settings.isOpenMenu
})



export default connect(mapStateToProps)(MenuMobile) 
