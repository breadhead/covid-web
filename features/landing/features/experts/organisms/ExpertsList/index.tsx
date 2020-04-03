import * as React from 'react';

import * as styles from './ExpertsList.css';
import ExpertCard from '../ExpertCard';
import {Expert} from "@app/models/sanity/Expert";

interface Props {
  experts: Expert[]
}

const ExpertsList = ({ experts}: Props) => {
  return (
    <section className={styles.expertsList}>
      {experts.map((expert) => (
        <ExpertCard key={expert._id} expert={expert} />
      ))}
    </section>
  );
};

export default ExpertsList;
