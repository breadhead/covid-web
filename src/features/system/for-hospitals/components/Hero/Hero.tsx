import * as React from 'react';
import cx from 'classnames';
import htmlParser from 'react-html-parser';

import { ActionBlock } from '@app/src/ui/actionBlock';

import s from './Hero.css';
import { helpHospitalsList } from './helpHospitalsList';

export const ForHospitalsHero = () => (
  <div>
    <h1 className="gl-pageTitle">Больницам</h1>

    <div className={cx(s.description)}>
      <div className={s.text}>
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

        <ul className={cx(s.list)}>
          {helpHospitalsList.map((li) => (
            <li className={s.item} key={li.id}>
              <span className={s.index}>{li.id}</span>
              <span>{htmlParser(li.text)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
