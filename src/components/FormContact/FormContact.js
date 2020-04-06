import React from 'react';
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


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

  const { control, handleSubmit } = useForm();
  const onSubmit = data => {
    const templateId = 'template_e2PZkKnU';
    console.log(data)
    // sendFeedback(templateId,
    //   {
    //     message_html: this.state.feedback,
    //     from_name: this.state.name,
    //     reply_to: this.state.email
    //   })
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className={''}>

        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Controller
          label="hello"
          as={Input}
          name="HelloWorld"
          control={control}
          defaultValue="" />
      </FormControl>
      <Controller as={Input} name="AntdInput" control={control} defaultValue="" />
      <Controller
        as={Select}
        name="reactSelect"
        control={control}
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
        defaultValue={{}}
      />

      <input type="submit" />
    </form>
  )

}

export default FormContact