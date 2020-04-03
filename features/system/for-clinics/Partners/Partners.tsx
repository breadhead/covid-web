import * as React from 'react';

import PartnersList from '@app/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import s from './Partners.css';
interface PartnersProps {}

export const Partners = ({}: PartnersProps) => {
  return (
    <div className={s.partners}>
      <h2 className={s.title}>Партнеры</h2>
      <PartnersList />
    </div>
  );
};
