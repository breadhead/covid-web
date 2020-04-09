import React from 'react';

import { ResourcesItem } from '@app/src/domain/models/common/ResourcesItem';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './ResourcesDesktop.css';

interface ResourcesProps {
  resources: ResourcesItem[];
}

export const ResourcesDesktop = ({ resources }: ResourcesProps) => {
  return resources.length > 0 ? (
    <aside className={styles.resourcesWrap}>
      <h4 className={styles.title}>Официальные ресурсы</h4>
      <div className={styles.resources}>
        {resources.map((res) => (
          <NavLink
            href={res.url}
            withoutUnderline
            className={styles.item}
            key={res._id}
          >
            <img
              className={styles.photo}
              src={getImageSrc(res.logo, 48) || ''}
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
