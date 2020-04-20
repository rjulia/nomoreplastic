import React, { useState } from 'react'
import styled from 'styled-components';
import styles from "../../scss/styles.scss";
import { useTranslation, withTranslation } from 'react-i18next';

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

const ButtonLanguage = ({ i18n }) => {
  //const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en')
  const changeLanguage = () => {
    if (language === "en") {
      i18n.changeLanguage('zh');
      setLanguage('zh')
    } else {
      i18n.changeLanguage('en');
      setLanguage('en')

    }
  };


  return (
    <WrapperButtonLanguage onClick={() => changeLanguage()}>
      <span >{language === "en" ? "繁" : "en"}</span>
    </WrapperButtonLanguage>
  )
}


export default withTranslation()(ButtonLanguage);

