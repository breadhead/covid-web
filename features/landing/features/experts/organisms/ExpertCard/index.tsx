import * as React from 'react';

import { Expert } from './node_modules/@app/models/sanity/Expert';
import { getImageSrc } from './node_modules/@app/src/lib/useImageSrc/getImageSrc';
import { AppContext } from './node_modules/@app/src/lib/server-types';
import { getExpertsFromSanity } from './node_modules/@app/features/common/expertReducer';
import { NavLink } from './node_modules/@app/ui/nav-link';
import * as styles from './ExpertCard.css';

interface Props {
  expert: Expert;
}

const ExpertCard = ({ expert }: Props) => {
  return (
    <article className={styles.expertCard}>
      <NavLink
        className={styles.link}
        withoutUnderline
        href={`/experts/${expert.code.current}`}
      >
        <img
          className={styles.image}
          src={getImageSrc(expert.logo) || ''}
          alt={expert.name}
        />
        <p className={styles.name}>{expert.name}</p>
        <p className={styles.specialization}>{expert.subtitle}</p>
      </NavLink>
    </article>
  );
};

export default ExpertCard;
