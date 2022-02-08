import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Form } from './RSVP';
import Checkbox from '../../components/RHFCheckbox';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AllergyWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;
const Yes = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    console.log(values);
    try {
      await axios({
        method: 'POST',
        url: 'https://formspree.io/f/mqkwvlqa',
        data: values,
      });

      toast.success('Tack! för att du vill komma!');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h6>
        <em>Vad kul att du kommer!</em>
      </h6>
      <h6>Då behöver vi lite mer information om dig:</h6>
      <label>Namn</label>
      <Input
        {...register('name', {
          required: 'Fältet är obligatoriskt.',
        })}
      />
      {errors?.name?.message}
      <label>Email</label>
      <Input
        type="email"
        {...register('email', {
          required: 'Fältet är obligatoriskt.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Ogiltig email',
          },
        })}
      />
      {errors.email && errors.email.message}

      <label>Allergier & preferenser:</label>
      <div>
        <AllergyWrapper>
          <Checkbox control={control} name="allergier.Baljväxter">
            Baljväxter
          </Checkbox>
          <Checkbox control={control} name="allergier.Gluten">
            Gluten
          </Checkbox>
          <Checkbox control={control} name="allergier.Vegan">
            Vegan
          </Checkbox>
          <Checkbox control={control} name="allergier.Laktos">
            Laktos
          </Checkbox>
          <Checkbox control={control} name="allergier.Ägg">
            Ägg
          </Checkbox>
          <Checkbox control={control} name="allergier.Vegetarian">
            Vegetarian
          </Checkbox>
        </AllergyWrapper>
      </div>
      <label>Annat</label>
      <Input type="text" {...register('allergier-other')} />
      <p>
        Vi tar in denna informationen för att kunna anpassa bröllopet efter våra
        gäster men också för att kunna skicka ut mer information om något skulle
        ändras
      </p>
      <Button type="submit">Skicka in mitt svar!</Button>
    </Form>
  );
};

export default Yes;
