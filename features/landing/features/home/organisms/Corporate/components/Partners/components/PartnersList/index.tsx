import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard from '@app/features/landing/organisms/PartnerCard'

import { NavLink } from '@front/ui/nav-link'

import { useMappedState } from 'redux-react-hook'
import { selectPartnersForMainPage } from '@app/features/common/partnerReducer/selectPartners'

const PartnersList = () => {
  const partners = useMappedState(selectPartnersForMainPage)

  return (
    <section className={styles.partnersList}>
      {partners.map(partner => (
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
        <p className={styles.buttonLabel}>
          Стать нашим
          <br />
          партнёром
        </p>
      </div>
    </section>
  )
}

export default PartnersList
