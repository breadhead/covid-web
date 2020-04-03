import * as React from 'react';
import cx from 'classnames';

import * as styles from './SytemRadioButton.css';

interface SytemRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  onClick: (id: string) => void;
  checked: boolean;
  className?: string;
}

export const SytemRadioButton = ({
  id,
  name,
  value,
  label,
  onClick,
  checked = false,
  className,
}: SytemRadioButtonProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cx(styles.radio, className)}
      key={id}
    >
      <input
        className={styles.input}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
