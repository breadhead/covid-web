import * as React from 'react';
import cx from 'classnames';

import { NavLink } from './node_modules/@app/ui/nav-link';
import { Partner } from './node_modules/@app/models/sanity/Partner';
import { getImageSrc } from './node_modules/@app/src/lib/useImageSrc/getImageSrc';
import * as styles from './PartnerCard.css';

interface Props {
  partner: Partner;
  className?: string;
}

const PartnerCard = ({ partner, className }: Props) => {
  const image = getImageSrc(partner.logo) || '';

  return (
    <NavLink
      blank
      withoutUnderline
      href={partner.url}
      className={cx(styles.card, className)}
    >
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={image} alt={partner.name} />
      </div>
      <p className={styles.label}>{partner.name}</p>
      <p className={styles.description}>{partner.subtitle}</p>
    </NavLink>
  );
};

export default PartnerCard;
