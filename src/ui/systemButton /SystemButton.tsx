import cx from 'classnames';
import React from 'react';

import styles from './Button.css';
import { SystemButtonKind } from './SystemButtonKind';
import { SystemButtonProps } from './SystemButtonProps';
import { SystemButtonSize } from './SystemButtonSize';
import { getButtonType } from './helpers/getButtonType';
import { getKindClassName } from './helpers/getKindClassName';
import { getSizeClassName } from './helpers/getSizeClassName';

export const SystemButton = ({
  children,
  size = SystemButtonSize.Medium,
  kind = SystemButtonKind.Primary,
  disabled = false,
  submit = false,
  loading = false,
  onClick,
  className,
}: SystemButtonProps) => (
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
