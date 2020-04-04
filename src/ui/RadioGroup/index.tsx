import { RadioChangeEvent } from 'antd/lib/radio';
import * as React from 'react';
import cx from 'classnames';
import { Radio } from 'antd';

import { NON_BREAKING_SPACE } from '@app/src/lib/config';

import './ButtonStyle.css?CSSModulesDisable';
import Button from './ButtonVariant';
import './RadioStyle.css?CSSModulesDisable';

const AntRadioGroup = Radio.Group;

export enum RadioButtonStyles {
  Button = 'Button',
  Radio = 'Radio',
}
export interface Props {
  name: string;
  buttons: Button[];
  defaultValue?: string;
  className?: string;
  label?: string;
  onChange?: (evt: RadioChangeEvent) => void;
  radioStyle?: RadioButtonStyles;
  value?: string;
}

const RadioGroup = ({
  name,
  buttons,
  defaultValue,
  className,
  onChange,
  value,
  radioStyle = RadioButtonStyles.Button,
  ...rest
}: Props) => {
  const [currentValue, setCurrentValue] = React.useState(undefined);

  React.useEffect(() => {
    setCurrentValue(value as any);
  }, [value]);

  return (
    <div className={cx(`radioButtonStyle__${radioStyle}`, className)}>
      <AntRadioGroup
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        value={currentValue}
      >
        {buttons.map((button) => (
          <Radio key={button.id} name={name} value={button.value} {...rest}>
            {button.component || button.text || button.value}
            {NON_BREAKING_SPACE}
            {button.count && <span className="count">{button.count}</span>}
          </Radio>
        ))}
      </AntRadioGroup>
    </div>
  );
};

export default RadioGroup;
