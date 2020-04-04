import * as React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/ui/nav-link';
import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import { Bubble } from '../bubble';
import * as styles from './NavCards.css';

export const NavCards = () => {
  return (
    <div className={styles.cards}>
      <article className={styles.card}>
        <div className={styles.content}>
          <NavLink
            className={styles.titleWrapper}
            withoutUnderline
            href={'/ask'}
          >
            <h3 className={styles.title}>Справочная служба</h3>
          </NavLink>
          <Bubble />
        </div>
        <NavLink withoutUnderline className={styles.block} href={'/ask'}>
          Просто спросить
          <Icon className={styles.linkIcon} name={IconsList.ArrowRight2} />
        </NavLink>
      </article>

      <article className={styles.card}>
        <div className={styles.content}>
          <NavLink
            className={styles.titleWrapper}
            withoutUnderline
            href={'/doctors'}
          >
            <h3 className={styles.title}>Больницам</h3>
          </NavLink>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Помогаем подготовиться к COVID-19
            </li>
            <li className={styles.listItem}>Ищем партнера-спонсора</li>
            <li className={styles.listItem}>Закупаем медоборудование</li>
          </ul>
        </div>
        <NavLink withoutUnderline className={styles.block} href={'/doctors'}>
          Подробнее
          <Icon className={styles.linkIcon} name={IconsList.ArrowRight2} />
        </NavLink>
      </article>

      <article className={cx(styles.card, styles.disable)}>
        <div className={styles.content}>
          <NavLink
            className={styles.titleWrapper}
            withoutUnderline
            href={'/doctors'}
          >
            <h3 className={styles.title}>Врачам</h3>
          </NavLink>
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
