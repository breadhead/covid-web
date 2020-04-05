import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import PartnerCard from '@app/src/features/landing/organisms/PartnerCard';
import {selectPartners} from '@app/src/domain/reducers/partnerReducer/selectPartners';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './PartnersList.css';

interface Props {
  pageType: string;
}

const PartnersList = ({ pageType }: Props) => {
  const partners = useMappedState(selectPartners)
      .filter((partner) => partner.pageToShow.includes(pageType));

  return (
    <section className={styles.partnersList}>
      {partners.map((partner) => (
        <PartnerCard key={partner._id} partner={partner} />
      ))}
      <div className={styles.buttonWrapper}>
        <NavLink
          blank
          className={styles.buttonContainer}
          href="/contacts"
          withoutUnderline
        >
          <button className={styles.addPartnerButton} />
        </NavLink>
        <p className={styles.buttonLabel}>Стать партнёром</p>
      </div>
    </section>
  );
};

export default PartnersList;
