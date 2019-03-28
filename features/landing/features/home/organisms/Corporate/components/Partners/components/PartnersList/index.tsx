import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard from '@app/features/landing/organisms/PartnerCard'

import { partners } from '@app/features/landing/features/partners/organisms/PartnersList/config'
import { NavLinkTargetType } from '@app/src/ui/nav-link/NavLinkTargetType'
import { NavLinkType } from '@app/src/ui/nav-link/NavLinkType'
import { NavLink } from '@front/ui/nav-link'

const PartnersList = () => (
  <section className={styles.partnersList}>
    {partners.map(partner => (
      <PartnerCard key={partner.id} card={partner} />
    ))}
    <div className={styles.buttonWrapper}>
      <NavLink
        target={NavLinkTargetType.Blank}
        className={styles.buttonContainer}
        href="/contacts"
        type={NavLinkType.Nav}
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

export default PartnersList
