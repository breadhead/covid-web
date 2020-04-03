import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';

import s from './ForClinics.css';

export const ForClinicsHero = () => (
  <div className={s.hero}>
    <h1 className={s.title}>Помощь больницам</h1>
    <div className={s.description}>
      Проект «‎Убить COVID-19»‎ — это инициатива{' '}
      <NavLink blank href="https://nenaprasno.ru">
        Фонда профилактики рака «‎Не напрасно»‎
      </NavLink>
      , которая объединяет общественные организации, бизнес, СМИ и простых людей
      в единый фронт борьбы с коронавирусной инфекцией.
    </div>
  </div>
);
