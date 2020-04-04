import * as React from 'react';

import { Expert } from '@app/src/domain/models/sanity/Expert';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { AppContext } from '@app/src/lib/server-types';
import { getExpertsFromSanity } from '@app/src/domain/reducers/expertReducer';
import { NavLink } from '@app/src/ui/nav-link';

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
