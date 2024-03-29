import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectTrustPartners } from '@app/src/domain/reducers/partnerReducer/selectTrustPartners';
import { NavLink } from '@app/src/ui/nav-link';

import { getImageSrc } from '@front/lib/useImageSrc/getImageSrc';
import { Icon } from '@front/ui/icon';
import { IconsList } from '@front/ui/sprite';

import * as styles from './TrustPartners.css';

const TrustPartners = () => {
  const partners = useMappedState(selectTrustPartners);

  return partners.length > 0 ? (
    <div className={styles.container}>
      {/*<NavLink*/}
      {/*  className={styles.logoWrapper}*/}
      {/*  withoutUnderline*/}
      {/*  href="https://nenaprasno.ru"*/}
      {/*  blank*/}
      {/*>*/}
      {/*  <Icon className={styles.mainLogo} name={IconsList.FoundationLogo} />*/}
      {/*</NavLink>*/}
      {/*<div className={styles.plus}/>*/}
      <section className={styles.scrollContainer}>
        {partners.map(({ name, logo, url }) => (
          <NavLink
            className={styles.logoWrapper}
            withoutUnderline
            href={url}
            blank
            key={name}
          >
            <img
              loading="lazy"
              className={styles.logo}
              src={getImageSrc(logo, 0, 112) || ''}
              alt={name}
            />
          </NavLink>
        ))}
      </section>
    </div>
  ) : null;
};

export default TrustPartners;
