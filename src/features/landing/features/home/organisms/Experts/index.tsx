import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectExperts } from '@app/src/domain/reducers/expertReducer/selectExperts';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './Experts.css';
import Photos from './components/Photos';
import { CovidButtons } from '../Main/components/CovidButtons/CovidButtons';

const Experts = () => {
  const experts = useMappedState(selectExperts);

  return (
    <div className={styles.wrap}>
      <div className={styles.expertsWrapper}>
        <section className={styles.experts}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Наша команда</h2>
            <p className={styles.text}>
              На большинство вопросов в нашей службе отвечают врачи-волонтёры.
              Ответы постоянно подвергаются супервизии проверенных
              экспертов-инфекционистов Санкт-Петербурга и Москвы.
            </p>
            <NavLink className={styles.link} href="/ask/experts">
              Посмотреть всех
            </NavLink>
          </div>
        </section>
        <Photos experts={experts} />
      </div>
      <CovidButtons />
    </div>
  );
};

export default Experts;
