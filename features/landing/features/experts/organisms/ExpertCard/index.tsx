import * as React from 'react';

import { Expert } from '@app/models/sanity/Expert';
import { getImageSrc } from '@app/lib/useImageSrc/getImageSrc';
import { AppContext } from '@app/lib/server-types';
import { getExpertsFromSanity } from '@app/features/common/expertReducer';

import { NavLink } from '@front/ui/nav-link';

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
