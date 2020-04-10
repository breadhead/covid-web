import React from 'react';

import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './Aside.css';

interface AsideProps {
  items: any[];
  title?: string;
}

export const Aside = ({ items, title = 'Официальные ресурсы' }: AsideProps) => {
  return items.length > 0 ? (
    <aside className={styles.itemsWrap}>
      {!!title && <h4 className={styles.title}>{title}</h4>}
      <div className={styles.items}>
        {items.map((res) => (
          <NavLink
            blank
            href={res.url}
            withoutUnderline
            className={styles.item}
            key={res._id}
          >
            <img
              className={styles.photo}
              src={getImageSrc(res.logo, 48, 48) || ''}
              alt={res.name}
            />
            <div className={styles.textContainer}>
              <span>{res.name}</span>
              <span className={styles.link}>{res.url}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  ) : null;
};
