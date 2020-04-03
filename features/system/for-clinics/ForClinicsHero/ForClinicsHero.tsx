import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './ForClinicsHero.css';

export const ForClinicsHero = () => (
  <div className={cx('global-section', s.hero)}>
    <h1 className="global-pageTitle">Помощь больницам</h1>
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
