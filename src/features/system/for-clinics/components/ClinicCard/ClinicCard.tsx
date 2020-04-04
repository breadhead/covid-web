import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';

import s from './ClinicCard.css';

export interface ClicicCardProps {
  clinic: {
    logo: string;
    name: string;
    city: string;
    link: string;
  };
}

export const ClinicCard = ({
  clinic: { logo, name, city, link },
}: ClicicCardProps) => (
  <NavLink className={s.clinicCard} withoutUnderline blank href={link}>
    <img className={s.logo} src={logo} alt={name} />
    <h3 className={s.title}>{name}</h3>
    <p className={s.city}>{city}</p>
  </NavLink>
);
