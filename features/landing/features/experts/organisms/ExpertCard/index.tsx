import * as React from 'react';

import { NavLink } from '@front/ui/nav-link';

import * as styles from './ExpertCard.css';
import {Expert} from "@app/models/sanity/Expert";
import {getImageSrc} from "@app/lib/useImageSrc/getImageSrc";

interface Props {
  expert: Expert;
}

const ExpertCard = ({ expert }: Props) => {
  return (
    <article className={styles.expertCard}>
      <NavLink className={styles.link} withoutUnderline href={`/experts/${expert.code.current}`}>
        <img className={styles.image} src={getImageSrc(expert.logo) || ''} alt={expert.name} />
        <p className={styles.name}>{expert.name}</p>
        <p className={styles.specialization}>{expert.subtitle}</p>
      </NavLink>
    </article>
  );
};

export default ExpertCard;
