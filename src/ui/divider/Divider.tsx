import * as React from 'react';
import cx from 'classnames';

import * as s from './Divider.css';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cx(s.divider, className)} />;
};
