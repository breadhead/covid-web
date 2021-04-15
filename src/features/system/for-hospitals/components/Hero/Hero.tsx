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
          title="Чеклист готовности ОРИТ"
          text="Проверьте свое отделение ОРИТ заполнив контрольный лист для получения консультации и возможной помощи."
          buttonText="Заполнить контрольный лист"
          href="/checklist"
          icon={
            <img 
              loading="lazy" 
              className={s.bottomOffset}
              src="/static/images/continue-filling.png"
            />
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
