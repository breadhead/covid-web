import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard from '../PartnerCard'

import { partners } from './config'

const PartnersList = () => (
  <section className={styles.partnersList}>
    {partners.map(partner => (
      <PartnerCard key={partner.id} card={partner} />
    ))}
    <div className={styles.buttonWrapper}>
      <button className={styles.addPartnerButton} />
      <p className={styles.buttonLabel}>
        Стать нашим
        <br />
        партнером
      </p>
    </div>
  </section>
)

export default PartnersList
