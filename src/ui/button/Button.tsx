import cx from 'classnames';
import React from 'react';

import styles from './Button.css';
import { ButtonKind } from './ButtonKind';
import { ButtonProps } from './ButtonProps';
import { ButtonSize } from './ButtonSize';
import { getButtonType } from './helpers/getButtonType';
import { getKindClassName } from './helpers/getKindClassName';
import { getSizeClassName } from './helpers/getSizeClassName';

export const Button = ({
  children,
  size = ButtonSize.Medium,
  kind = ButtonKind.Primary,
  disabled = false,
  submit = false,
  icon,
  loading = false,
  onClick,
  className,
  href,
}: ButtonProps) => {
  const props = {
    className: cx(
      styles.button,
      styles[getSizeClassName(size)],
      styles[getKindClassName(kind)],
      className,
    ),
    onClick,
    disabled: disabled || loading,
    type: getButtonType(submit),
    href,
  };

  const TagName = href ? 'a' : 'button';
  return (
    <TagName {...props}>
      {children}
      {icon && <img loading="lazy" className={styles.buttonIcon} src={icon} />}
    </TagName>
  );
};
