import cx from 'classnames';
import React from 'react';

import styles from './Button.css';
import {ButtonKind} from './ButtonKind';
import {ButtonProps} from './ButtonProps';
import {ButtonSize} from './ButtonSize';
import {getButtonType} from './helpers/getButtonType';
import {getKindClassName} from './helpers/getKindClassName';
import {getSizeClassName} from './helpers/getSizeClassName';

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  disabled = false,
  submit = false,
  loading = false,
  onClick,
  className,
}: ButtonProps) => (
  <button
    className={cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
      className,
    )}
    onClick={onClick}
    disabled={disabled || loading}
    type={getButtonType(submit)}
  >
    {children}
  </button>
);
