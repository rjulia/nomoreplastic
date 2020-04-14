import React from 'react';
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { Input, Select, InputLabel, FormControl, MenuItem, TextField, FormHelperText } from "@material-ui/core";
import { Paragraph } from "../index";
import './FormContact.scss'

const FormContact = () => {

  function sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const templateId = 'template_e2PZkKnU';
    console.log(data)
    const { name, company, email, phone, type, message } = data
    sendFeedback(templateId,
      {
        reply_to: "reply_to_value",
        from_name: name,
        company_name: company,
        email,
        phone,
        type,
        message_html: message
      })
  }


  return (
    <form className="form-contact__container" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-4">
          <FormControl className={'form__control'} error={Boolean(errors.name)}>
            <InputLabel htmlFor="name">Name *</InputLabel>
            <Controller
              as={Input}
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "this is required" }} />
            <FormHelperText>
              {errors.name && errors.name.message}
            </FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="company">Company</InputLabel>
            <Controller
              as={Input}
              name="company"
              control={control}
              defaultValue="" />
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'} error={Boolean(errors.email)}>
            <InputLabel htmlFor="email">Email *</InputLabel>
            <Controller
              as={Input}
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "this is required" }} />
            <FormHelperText>
              {errors.email && errors.email.message}
            </FormHelperText>
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="age-native-simple">Tel</InputLabel>
            <Controller
              as={Input}
              name="phone"
              control={control}
              defaultValue="" />
          </FormControl>
        </div>
        <div className="col-md-4">
          <FormControl className={'form__control'}>
            <InputLabel htmlFor="age-native-simple">Type of: </InputLabel>
            <Controller
              as={
                <Select>
                  <MenuItem value="particular">
                    PARTICULAR
                  </MenuItem>
                  <MenuItem value="company">
                    COMPANY
                  </MenuItem>
                  <MenuItem value="ong">
                    ONG
                  </MenuItem>
                  <MenuItem value="shop">
                    SHOP
                  </MenuItem>
                </Select>
              }
              name="type"
              control={control}
              defaultValue="particular"
            />
          </FormControl>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <FormControl className={'form__control text-area'} error={Boolean(errors.message)}>
            <Controller
              as={<TextField
                label="Message *"
                id="multiline"
                multiline
                rowsMax="4"
                placeholder="Message "
              />}
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "this is required" }}
            />
            <FormHelperText>
              {errors.message && errors.message.message}
            </FormHelperText>
          </FormControl>
        </div>
        <div className="col-md-4"></div>
      </div>

      <Paragraph text={'* these fields are mandatory'} />

      <input className="btn__submint" type="submit" />
    </form>
  )

}

export default FormContact