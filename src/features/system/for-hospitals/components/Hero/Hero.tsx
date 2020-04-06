import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Hero.css';

export const ForHospitalsHero = () => (
  <div>
    <h1 className="gl-pageTitle">Помогаем больницам</h1>
    <div className={cx('gl-text', s.description)}>
      <span>Проект «‎Убить COVID-19»‎ — это инициатива</span>{' '}
      <NavLink blank href="https://nenaprasno.ru">
        Фонда профилактики рака «‎Не напрасно»‎
      </NavLink>
      <span>
        , которая объединяет общественные организации, бизнес, СМИ и простых
        людей в единый фронт борьбы с коронавирусной инфекцией.
      </span>
    </div>
  </div>
);
