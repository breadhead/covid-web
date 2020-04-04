import * as React from 'react';
import { Field } from 'react-final-form';

import SimpleSwitch, { Props as SwitchProps } from '@app/ui/Switch';

const Switch = ({ name, ...rest }: SwitchProps) => (
  <Field name={name}>
    {({ input }) => (
      <SimpleSwitch name={name} {...input} checked={input.value} {...rest} />
    )}
  </Field>
);

export default Switch;
