import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectExperts } from '@app/features/common/expertReducer/selectPartners';

import { NavLink } from '@front/ui/nav-link';

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
            <h2 className={styles.title}>Кто консультирует</h2>
            <p className={styles.text}>
              На большинство вопросов в нашей службе отвечают врачи-волонтёры.
              Ответы постоянно подвергаются супервизии проверенных
              экспертов-инфекционистов Санкт-Петербурга и Москвы.
            </p>
            <NavLink className={styles.link} href="/experts">
              Посмотреть всех экспертов
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
