import { Button, Input, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Form } from './RSVP';
const No = () => {
  return (
    <Form>
      <h6>Vad synd att höra att du inte kan delta.</h6>
      <label>Namn</label>
      <Input />
      <h6>
        Om du vill får du gärna skicka in en hälsning lyckönskning eller andra
        glada tillrop här under!
      </h6>
      <label>Meddelande</label>
      <Textarea resize="none" />
      <Button type="submit">Skicka mitt meddelande!</Button>
    </Form>
  );
};

export default No;
