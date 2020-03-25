import * as React from 'react';

import * as styles from './Conclution.css'
interface ConclutionProps {
  children: string
}

export const Conclution = ({ children }: ConclutionProps) => {
  return (<p className={styles.text}>
    {children}
  </p>)
}
