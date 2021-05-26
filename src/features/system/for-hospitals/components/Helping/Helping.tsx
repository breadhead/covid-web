import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectHospitals } from '@app/src/domain/reducers/hospitalsReducer/selectHospitals';

import { ClinicCard } from '../ClinicCard/ClinicCard';
import s from './Helping.css';

export const Helping = () => {
  const hospitals = useMappedState(selectHospitals);

  return (
    <div>
      <h2 className="gl-sectionTitle">Мы помогли</h2>
      <div className={s.list}>
        {hospitals.map((clinic) => (
          <ClinicCard key={clinic.name} hospital={clinic} />
        ))}
      </div>
    </div>
  );
};

const helpingHospitals = [
  {
    logo: '/static/images/clinic-example.png',
    name: 'Городская больница Святого Великомученика Георгия',
    city: 'Санкт-Петербург',
    link: 'http://xn-----6kcdhgbarxi0a0amgbd0bkv3fvg6cl.xn--p1ai/',
  },
];
