import { Button, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

const No = () => {
  return (
    <form>
      <h3>Vad synd att höra att du inte kan delta.</h3>
      <h3>
        Om du vill får du gärna skicka in en hälsning lyckönskning eller andra
        glada tillrop här under!
      </h3>
      <Input />
      <Textarea resize="none" />
      <Button type="submit">Skicka in mitt svar!</Button>
    </form>
  );
};

export default No;
