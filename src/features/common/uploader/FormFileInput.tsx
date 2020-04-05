import * as React from 'react';
import {Field as FinalField} from 'react-final-form';

import Uploader from './Uploader';

interface Props {
  name: string;
  remove?: () => void;
}

const FormFileInput = ({ name, ...rest }: Props) => (
  <>
    <FinalField name={name}>
      {({ input }) => (
        <>
          <Uploader
            {...rest}
            id={name}
            initialValue={input.value}
            onUploaded={(value) => {
              const fakeEvent = { target: { value } };
              input.onChange(fakeEvent);
            }}
          />
        </>
      )}
    </FinalField>
  </>
);

export default FormFileInput;
