import * as React from 'react';

import { Expert } from '@app/src/domain/models/common/Expert';
import ExpertCard from '@app/src/features/landing/features/experts/organisms/ExpertCard';

import * as styles from './ExpertsList.css';

interface Props {
  experts: Expert[];
  href?: string;
}

const ExpertsList = ({ experts, href }: Props) => {
  return (
    <section className={styles.expertsList}>
      {experts.map((expert) => (
        <ExpertCard href={href} key={expert._id} expert={expert} />
      ))}
    </section>
  );
};

export default ExpertsList;
