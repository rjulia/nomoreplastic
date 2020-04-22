import React from 'react'
import { FormContact, Title, Paragraph } from "../../components";
import './contact.scss';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const WraperImage = styled('a')`
  img {
    height: '51px !important'; 
    width: '217px !important'
}`

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact__container">
      <div className="row">
        <div className="col-md-6 col-12">
          <Title
            text={t('contact.title_contact')}
            classN={'contact_title'} />
          <Paragraph
            tag='p'
            classN="contact__paragraph"
            text={t('contact.phrase')}
          />
          <FormContact />
        </div>
        <div className="col-md-6 col-12">
          <Title
            classN={'contact_buy-title'}
            text={t('contact.title_coffee')} />
          <Paragraph
            tag='p'
            text={t('contact.buyacoffee')}
          />
          <WraperImage href="https://www.buymeacoffee.com/nomorewaste" target="_blank">
            <img src="https://cdn.buymeacoffee.com/buttons/lato-white_img.png" alt="Buy Me A Coffee" />

          </WraperImage>

        </div>
      </div>
    </div>

  )
}

export default Contact