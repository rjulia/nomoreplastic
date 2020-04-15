import React from 'react'
import styled from 'styled-components';
import Phone from "../../assets/images/phone.jpg";
import { FormContact, Title, Paragraph } from "../../components";
import './contact.scss';

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="row">
        <div className="col-md-6 col-12">
          <Title text={'Contact'} />
          <Paragraph
            tag='p'
            classN="contact__paragraph"
            text={'if you want to contact with us you fill out the form bellow'}
          />
          <FormContact />
        </div>
        <div className="col-md-6 col-12">
          <Title
            classN={'contact_buy-title'}
            text={'Buy Me A Coffee!'} />
          <Paragraph
            tag='p'
            text={'Hello, we are a couple of friends trying to help the people of Hong Kong to be more responsible when it comes to recycling, we do everything without any help, if you can help for the maintenance and expenses of the web, the palneta I will be deeply grateful to you. And we too, of course! :)'}
          />

        </div>
      </div>
    </div>

  )
}

export default Contact
