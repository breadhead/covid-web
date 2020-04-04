import * as React from 'react';
import cx from 'classnames';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import { RadioButtonStyles } from '@app/ui/RadioGroup';

const AntRadioGroup = Radio.Group;

export enum RadioButtonsValue {
  Yes = 'Да',
  No = 'Нет',
}

export const radioButtons = [
  {
    id: '1',
    value: 'Да',
  },
  {
    id: '2',
    value: 'Нет',
  },
];

const EMPTY_VALUE = '';

const getValue = (value: string | undefined) =>
  value === EMPTY_VALUE
    ? undefined
    : value
    ? RadioButtonsValue.Yes
    : RadioButtonsValue.No;

export interface Props {
  name?: string;
  onChange?: (evt: RadioChangeEvent) => void;
  defaultChecked?: boolean;
  value?: string;
  radioStyle?: RadioButtonStyles;
}

const RadioGroupElement = ({
  name = '',
  onChange,
  defaultChecked,
  value,
  radioStyle = RadioButtonStyles.Button,
  ...rest
}: Props) => {
  const [currentValue, setCurrentValue] = React.useState(undefined);

  React.useEffect(() => {
    setCurrentValue(getValue(value) as any);
  });

  return (
    <div className={cx(`radioButtonStyle__${radioStyle}`)}>
      <AntRadioGroup name={name} onChange={onChange} value={currentValue}>
        {radioButtons.map((button) => (
          <Radio key={button.id} name={name} value={button.value} {...rest}>
            {button.value}
          </Radio>
        ))}
      </AntRadioGroup>
    </div>
  );
};
export default RadioGroupElement;
