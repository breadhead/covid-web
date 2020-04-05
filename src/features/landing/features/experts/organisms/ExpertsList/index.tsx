import * as React from 'react';

import { Expert } from '@app/src/domain/models/common/Expert';

import * as styles from './ExpertsList.css';
import ExpertCard from '../ExpertCard';

interface Props {
  experts: Expert[];
}

const ExpertsList = ({ experts }: Props) => {
  return (
    <section className={styles.expertsList}>
      {experts.map((expert) => (
        <ExpertCard key={expert._id} expert={expert} />
      ))}
    </section>
  );
};

export default ExpertsList;
