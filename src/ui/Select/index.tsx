import { Select as AntSelect } from 'antd';
import { LabeledValue, SelectProps } from 'antd/lib/select';
import cx from 'classnames';
import * as React from 'react';

import './SelectGlobal.css?CSSModulesDisable';

const { Option } = AntSelect;

interface OwnProps {
  name: string;
  options: { label: string }[];
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
}

export type Props = OwnProps & SelectProps;

const Select = ({
  name,
  options,
  label,
  error,
  className,
  value,
  placeholder,
  ...rest
}: Props) => {
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    setCheck(true);
  }, []);

  const currentValue = `${value}`.length > 0 ? `${value}` : undefined;
  const currentPlaceholder = !currentValue && placeholder;
  return (
    check && (
      <div className={className}>
        {label && <label htmlFor={name}>{label}</label>}
        <AntSelect
          value={currentValue}
          id={name}
          placeholder={currentPlaceholder}
          {...rest}
          className={cx(
            error && 'error',
            currentPlaceholder && 'placeholder-pale',
          )}
        >
          {options.map((option) => (
            <Option key={option.label} value={option.label}>
              {option.label}
            </Option>
          ))}
        </AntSelect>
      </div>
    )
  );
};

export default Select as any;

export { mapEnum, mapString } from './mappers';
