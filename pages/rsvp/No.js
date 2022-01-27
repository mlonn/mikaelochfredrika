import Button from '../../components/Button';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
//import Textarea from '../../components/Textarea';
import { Controller, useForm } from 'react-hook-form';
import { Form } from './RSVP';
const No = () => {
  const { handleSubmit, control, register, formState } = useForm();
  const { errors } = formState;
  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios({
        method: 'POST',
        url: 'https://formspree.io/f/xnqwparz',
        data: values,
      });

      toast.success('Synd att du inte kan komma');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h6>Vad synd att höra att du inte kan delta.</h6>
      <label>Namn</label>
      <Input
        {...register('name', {
          required: 'Fältet är obligatoriskt.',
        })}
      />
      {errors?.name?.message}
      <h6>
        Om du vill får du gärna skicka in en hälsning lyckönskning eller andra
        glada tillrop här under!
      </h6>
      <label>Meddelande</label>
      {/*       <Controller */}
      {/*         control={control} */}
      {/*         name="message" */}
      {/*         rules={{ required: 'Fältet är obligatoriskt.' }} */}
      {/*         render={({ */}
      {/*           field: { onChange, onBlur, value, name, ref }, */}
      {/*           fieldState: { invalid, isTouched, isDirty, error }, */}
      {/*           formState, */}
      {/*         }) => <Textarea onChange={onChange} value={value} />} */}
      {/*       /> */}
      {errors?.message?.message}
      <Button type="submit">Skicka mitt meddelande!</Button>
    </Form>
  );
};

export default No;
