import { Checkbox, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import No from './No';
import Yes from './Yes';

export const Form = styled.form`
  display: grid;
  width: 100%;
  grid-gap: 12px;
  p {
    font-size: 16px;
    font-style: italic;
  }
`;

const RSVP = () => {
  const [attend, setAttend] = useState();

  return (
    <>
      <div>
        <h3>RSVP</h3>
        <h4>répondez s’il vous plaît</h4>
        <h6>Kommer du att delta under vårat bröllop?</h6>
      </div>
      <VStack align="stretch">
        <Checkbox
          isChecked={attend === true}
          onChange={() => {
            if (attend) {
              setAttend(undefined);
            } else {
              setAttend(true);
            }
          }}
        >
          Ja, självklart!
        </Checkbox>

        <Checkbox
          color="#605242"
          colorScheme="facebook"
          isChecked={attend === false}
          onChange={() => {
            if (attend === false) {
              setAttend(undefined);
            } else {
              setAttend(false);
            }
          }}
        >
          Kan tyvärr inte komma.
        </Checkbox>
      </VStack>
      {attend && <Yes />}
      {attend === false && <No />}
    </>
  );
};

export default RSVP;
