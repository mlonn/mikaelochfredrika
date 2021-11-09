import { Checkbox, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import No from './No';
import Yes from './Yes';
const RSVP = () => {
  const [attend, setAttend] = useState();

  return (
    <div>
      <h1>RSVP</h1>
      <h2>répondez s’il vous plaît</h2>
      <h3>Kommer du att delta under vårat bröllop?</h3>
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
    </div>
  );
};

export default RSVP;
