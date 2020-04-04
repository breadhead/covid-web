import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import { Bubble } from '../bubble';
import * as styles from './NavCards.css';

export const NavCards = () => {
  return (
    <div className={styles.cards}>
      <NavLink withoutUnderline href={'/ask'} className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.title}>Справочная служба</h3>
          <Bubble />
        </div>
        <div className={styles.block}>
          Просто спросить
          <Icon className={styles.linkIcon} name={IconsList.ArrowRight2} />
        </div>
      </NavLink>

      <NavLink withoutUnderline href={'/doctors'} className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.title}>Больницам</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Помогаем подготовиться к COVID-19
            </li>
            <li className={styles.listItem}>Ищем партнера-спонсора</li>
            <li className={styles.listItem}>Закупаем медоборудование</li>
          </ul>
        </div>
        <div className={styles.block}>
          Подробнее
          <Icon className={styles.linkIcon} name={IconsList.ArrowRight2} />
        </div>
      </NavLink>

      <article className={cx(styles.card, styles.disable)}>
        <div className={styles.content}>
          <h3 className={styles.title}>Врачам</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Клинические рекомендации и статьи
            </li>
            <li className={styles.listItem}>Вебинары</li>
            <li className={styles.listItem}>Чеклист для реанимации</li>
          </ul>
        </div>
        <div className={styles.block}>
          <span className={styles.hint}>скоро</span>
        </div>
      </article>
    </div>
  );
};
