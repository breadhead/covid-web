import * as React from 'react';

import * as styles from './ProgressBar.css';

interface Props {
  percentage?: number;
}

const ProgressBar = ({ percentage = 0 }: Props) => (
  <div className={styles.progressBar}>
    <div className={styles.filler} style={{ width: `${percentage}%` }} />
  </div>
);

export default ProgressBar;
