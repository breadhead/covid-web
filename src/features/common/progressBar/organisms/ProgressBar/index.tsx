import React from 'react';
import cx from 'classnames';

import * as styles from './ProgressBar.css';
import StepPointer, { StepPointerModel } from '../../molecule/StepPointer';

export interface Props {
  steps: StepPointerModel[];
  className?: string;
}

const Container = ({ steps, className }: Props) => (
  <div className={cx(styles.ProgressBar, className)}>
    {steps.map((step, i) => (
      <StepPointer
        key={step.title}
        index={i}
        step={step}
        className={styles.ProgressBarItem}
      />
    ))}
  </div>
);

export default Container;
