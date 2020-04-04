import * as React from 'react';

import styles from './QuotaDetails.css';

interface Props {
  type: string;
  name: string;
  comment: string;
}

const QuotaDetails = ({ type, name, comment }: Props) => (
  <p className={styles.QuotaDetails}>
    <strong>{type}</strong>
    <span>{name}</span>
    <span>({comment})</span>
  </p>
);

export default QuotaDetails;
