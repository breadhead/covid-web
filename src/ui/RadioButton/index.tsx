import {Radio} from 'antd';
import cx from 'classnames';
import * as React from 'react';

import './RadioButton.css?CSSModulesDisable';

export interface Props {
  name: string;
  value: string;
  className?: string;
  children?: React.ReactNode;
}

const RadioButton = ({ name, className, value, children, ...rest }: Props) => (
  <Radio
    className={cx('radioButton', className)}
    name={name}
    value={value}
    {...rest}
  >
    {children}
  </Radio>
);

export default RadioButton;
