import * as React from 'react';

import { ClinicCard } from './ClinicCard';
import s from './ForClinics.css';

export const Helping = () => (
  <div className={s.helping}>
    <h2 className={s.title}>Уже помогаем</h2>
    <div className={s.list}>
      {helpingClinics.map((clinic) => (
        <ClinicCard key={clinic.name} clinic={clinic} />
      ))}
    </div>
  </div>
);

const helpingClinics = [
  {
    logo: '/static/images/clinic-example.png',
    name: 'Городская больница Святого Великомученика Георгия',
    city: 'Санкт-Петербург',
    link: 'http://xn-----6kcdhgbarxi0a0amgbd0bkv3fvg6cl.xn--p1ai/',
  },
];
