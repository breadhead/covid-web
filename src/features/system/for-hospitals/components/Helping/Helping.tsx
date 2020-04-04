import * as React from 'react';

import { ClinicCard } from '../ClinicCard/ClinicCard';
import s from './Helping.css';

export const Helping = () => (
  <div>
    <h2 className="gl-sectionTitle">Уже помогаем</h2>
    <div className={s.list}>
      {helpingHospitals.map((clinic) => (
        <ClinicCard key={clinic.name} clinic={clinic} />
      ))}
    </div>
  </div>
);

const helpingHospitals = [
  {
    logo: '/static/images/clinic-example.png',
    name: 'Городская больница Святого Великомученика Георгия',
    city: 'Санкт-Петербург',
    link: 'http://xn-----6kcdhgbarxi0a0amgbd0bkv3fvg6cl.xn--p1ai/',
  },
];
