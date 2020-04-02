import React from 'react';

import ValidationTooltip from '../ValidationTooltip';
import * as styles from './QuestionsValidationTooltip.css';
import { validateCb } from './validateCb';
interface Props {
  name: string;
}

const QuestionsValidationTooltip = ({ name }: Props) => (
  <ValidationTooltip
    name={name}
    validateOnBlur={false}
    validateCb={validateCb}
    className={styles.tooltip}
  />
);

export default QuestionsValidationTooltip;
