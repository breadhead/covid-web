import React from 'react';
import {Spin} from 'antd';
import cx from 'classnames';

import * as styles from './Loader.css';

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => (
  <div className={cx(styles.Loader, className)}>
    <Spin />
  </div>
);

export default Loader;
