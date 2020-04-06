import React from 'react'
import styled from 'styled-components';
import Phone from "../../assets/images/phone.jpg";
import { FormContact, Title, Paragraph } from "../../components";
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact__container">
      <Title text={'Contact'} />
      <Paragraph
        tag='p'
        text={'if you want to contact with us you fill out the form bellow'}
      />
      <FormContact />
    </div>
  )
}

export default Contact
