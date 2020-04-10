import React from 'react';
import cx from 'classnames';

import { ResourcesItem } from '@app/src/domain/models/common/ResourcesItem';
import PartnerCard from '@app/src/features/landing/organisms/PartnerCard';

import * as styles from './ResourcesMobile.css';

interface ResourcesProps {
  resources: ResourcesItem[];
}

export const ResourcesMobile = ({ resources }: ResourcesProps) => {
  return (
    <article className={cx(styles.wrapper, 'gl-section')}>
      <h3 className={styles.title}>Официальные ресурсы</h3>
      <div className={styles.resources}>
        {resources.map((res) => (
          <PartnerCard
            key={res._id}
            partner={{ ...res, subtitle: res.url } as any}
          />
        ))}
      </div>
    </article>
  );
};
