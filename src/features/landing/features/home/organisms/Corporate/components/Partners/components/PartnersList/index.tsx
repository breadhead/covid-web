import * as React from 'react';
import { useMappedState } from 'redux-react-hook';
import cx from 'classnames';

import PartnerCard from '@app/src/features/landing/organisms/PartnerCard';
import { selectPartners } from '@app/src/domain/reducers/partnerReducer/selectPartners';
import { NavLink } from '@app/src/ui/nav-link';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

import * as styles from './PartnersList.css';

interface Props {
  pageType: PageType;
  link?: string;
  title?: string;
  className?: string;
}

const PartnersList = ({
  pageType,
  title,
  link = '/contacts',
  className,
}: Props) => {
  console.log('link:', link);
  const partners = useMappedState(selectPartners).filter((partner) => {
    return partner.pageToShow.includes(pageType);
  });

  return partners.length > 0 ? (
    <div className={className}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <section className={cx(styles.partnersList)}>
        {partners.map((partner) => (
          <PartnerCard key={partner._id} partner={partner} />
        ))}
        <div className={styles.buttonWrapper}>
          <NavLink
            blank
            className={styles.buttonContainer}
            href={link}
            withoutUnderline
          >
            <button className={styles.addPartnerButton} />
          </NavLink>
          <p className={styles.buttonLabel}>Стать партнёром</p>
        </div>
      </section>
    </div>
  ) : null;
};

export default PartnersList;
