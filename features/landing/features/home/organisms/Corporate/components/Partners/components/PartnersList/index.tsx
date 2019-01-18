import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard from '@app/features/landing/organisms/PartnerCard'

import { partners } from './config'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

const PartnersList = () => (
  <section className={styles.partnersList}>
    {partners.map(partner => (
      <PartnerCard key={partner.id} card={partner} />
    ))}
    <div className={styles.buttonWrapper}>
      <NavLink href="/contacts" type={NavLinkType.Nav}>
        <button className={styles.addPartnerButton} />
      </NavLink>
      <p className={styles.buttonLabel}>
        Стать нашим
        <br />
        партнером
      </p>
    </div>
  </section>
)

export default PartnersList
