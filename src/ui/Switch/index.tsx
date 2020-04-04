import { Switch as AntSwitch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import * as React from 'react';

import './Switch.css?CSSModulesDisable';

interface OwnProps {
  label?: string;
  name: string;
  className?: string;
}

export type Props = OwnProps & SwitchProps;

const Switch = ({ label, name, className, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <AntSwitch
      className={className}
      checkedChildren="Да"
      unCheckedChildren="Нет"
      {...rest}
    />
  </>
);

export default Switch;
