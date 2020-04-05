import cx from 'classnames';
import React, { useRef } from 'react';

import { usePressEnter } from '@app/src/helpers/hooks/usePressEnter';
import { useCustomInput } from '@app/src/helpers/hooks/useCustomInput';

import { getCheckedClassName } from './helpers/getCheckedClassName';
import { getCheckedText } from './helpers/getCheckedText';
import { getDisabledClassName } from './helpers/getDisabledClassName';
import * as styles from './Toggle.css';

export interface Props {
  name: string;
  label?: string;
  className?: string;
  onChange?: (value?: boolean) => void;
  value?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
}

export const Toggle = ({
  label,
  name,
  className,
  onChange,
  value,
  disabled = false,
}: Props) => {
  const { currentValue, handleChange } = useCustomInput(value, onChange);

  const toggle = () => handleChange(!currentValue);

  const ref = useRef<HTMLDivElement>(null);
  usePressEnter(ref, toggle);

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <div
        ref={ref}
        tabIndex={0}
        role="checkbox"
        aria-checked={currentValue}
        onClick={toggle}
        className={cx(
          styles.container,
          styles[getCheckedClassName(currentValue)],
          styles[getDisabledClassName(disabled)],
          className,
        )}
      >
        {getCheckedText(currentValue)}
      </div>
    </>
  );
};
