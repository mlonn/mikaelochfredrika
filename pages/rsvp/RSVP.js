import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RSVP = () => {
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
    <div>
      <h1>RSVP</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Namn</label>
        <input
          {...register('name', {
            required: 'Fältet är obligatoriskt.',
          })}
        />
        {errors?.name?.message}
        <label>Email</label>
        <input
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
        <label>Allergier</label>
        <input {...register('allergies')} />
        <button type="submit">RSVP</button>
      </form>
    </div>
  );
};

export default RSVP;
