import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectTrustPartners } from '@app/src/domain/reducers/partnerReducer/selectTrustPartners';
import { NavLink } from '@app/src/ui/nav-link';

import { getImageSrc } from '@front/lib/useImageSrc/getImageSrc';

import * as styles from './TrustPartners.css';

const TrustPartners = () => {
  const partners = useMappedState(selectTrustPartners);

  return partners.length > 0 ? (
    <div>
      <section>
        {partners.map(({ name, logo, url }) => (
          <NavLink
            className={styles.logoWrapper}
            withoutUnderline
            href={url}
            blank
            key={name}
          >
            <img
              className={styles.logo}
              src={getImageSrc(logo, 0, 56) || ''}
              alt={name}
            />
          </NavLink>
        ))}
      </section>
    </div>
  ) : null;
};

export default TrustPartners;
