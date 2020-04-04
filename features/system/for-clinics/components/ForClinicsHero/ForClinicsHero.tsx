import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/ui/nav-link';

import s from './ForClinicsHero.css';

export const ForClinicsHero = () => (
  <div>
    <h1 className="gl-pageTitle">Помощь больницам</h1>
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
