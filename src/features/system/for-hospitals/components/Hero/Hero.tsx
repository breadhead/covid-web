import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { ActionBlock } from '@app/src/ui/actionBlock';
import { SPACE } from '@app/src/lib/config';

import s from './Hero.css';

export const ForHospitalsHero = () => (
  <div>
    <h1 className="gl-pageTitle">Больницам</h1>

    <div className={cx(s.description)}>
      <div className="gl-text">
        <ActionBlock
          className={s.bottomOffset}
          title="Вашей больнице нужна помощь?"
          buttonText="Отправить заявку"
          href="/for-hospitals#help-request-form"
          icon={
            <img className={s.bottomOffset} src="/static/images/answers.png" />
          }
        />
        <h2 className="gl-sectionTitle">Как работает помощь больницам</h2>

        <ol className={cx(s.list)}>
          <li>
            Мы получаем запрос от медучреждения на инструменты, расходные
            материалы.
          </li>
          <li>
            Вместе с сотрудниками медучреждения сопоставляем список с нашим
            чек-листом для реанимации, составленным вместе с членами
            {SPACE}
            <NavLink href="/supervisory">наблюдательного совета</NavLink>.
          </li>
          <li>
            Корректируем и дополняем список нужд в соответствии с этим
            чек-листом.
          </li>
          <li>Составляем смету и показываем её компании-донору.</li>
          <li>Получаем пожертвование от компании или собираем средства.</li>
          <li>Закупаем всё необходимое.</li>
          <li>Организуем доставку в клинику.</li>
        </ol>
      </div>
    </div>
  </div>
);
