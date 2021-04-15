import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';
import { Icon } from '@app/src/ui/icon';
import { Hospital } from '@app/src/domain/models/common/Hospital';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';

import s from './ClinicCard.css';

export interface ClicicCardProps {
  hospital: Hospital;
}

export const ClinicCard = ({
  hospital: { logo, name, city, url },
}: ClicicCardProps) => {
  const logoSrc = getImageSrc(logo) || '';

  return (
    <NavLink className={s.clinicCard} withoutUnderline blank href={url || ''}>
      <img loading="lazy" className={s.logo} src={logoSrc} alt={name} />
      {name && <h3 className={s.title}>{name}</h3>}
      {city && <p className={s.city}>{city}</p>}

      <Icon name="away-link" className={s.icon} />
    </NavLink>
  );
};
