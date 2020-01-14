import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import styles from "../../scss/styles.scss";

import { setLanguage } from '../../services/redux/actions/settings.actions';

const WrapperButtonLanguage = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100px;
  color: ${styles.white};
  cursor: pointer;
  span {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 300;
  }

`

const ButtonLanguage = ({ settings, dispatch }) => {

  const language = settings.language;
  const onLanguageButtonPress = () => {
    const a = language === "en" ? "zht" : "en"
    dispatch(setLanguage(a))

  }

  return (
    <WrapperButtonLanguage onClick={() => onLanguageButtonPress()}>
      <span >{language === "en" ? "繁" : "en"}</span>
    </WrapperButtonLanguage>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLanguage);

