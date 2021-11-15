import { Button, Checkbox, CheckboxGroup, Input } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import styled from 'styled-components';
const AlleryWrapper = styled(CheckboxGroup)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;
const Yes = () => {
  const {
    handleSubmit,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Vad kul att du kommer! Då behöver vi lite mer information om dig:</h3>
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
      <AlleryWrapper>
        <Checkbox {...register('allergier')} value="Baljväxter">
          Baljväxter
        </Checkbox>
        <Checkbox {...register('allergier')} value="Gluten">
          Gluten
        </Checkbox>
        <Checkbox {...register('allergier')} value="Vegan">
          Vegan
        </Checkbox>
        <Checkbox {...register('allergier')} value="Laktos">
          Laktos
        </Checkbox>
        <Checkbox {...register('allergier')} value="Ägg">
          Ägg
        </Checkbox>
        <Checkbox {...register('allergier')} value="Vegetarian">
          Vegetarian
        </Checkbox>
      </AlleryWrapper>
      <label>Annat</label>
      <Input {...register('allergier-other')} />
      <p>
        Vi tar in denna informationen för att kunna anpassa bröllopet efter våra
        gäster men också för att kunna skicka ut mer information om något skulle
        ändras
      </p>
      <Button type="submit">Skicka in mitt svar!</Button>
    </form>
  );
};

export default Yes;