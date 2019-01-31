import * as React from 'react'

import * as styles from './Donation.css'

import DonationWidget from '@app/features/main/donation'
import Info from '../Info'

const Donation = () => (
  <>
    <div id="donation" className={styles.donationWrapper}>
      <h2 className={styles.title}>Помочь проекту</h2>
      <div className={styles.content}>
        <div className={styles.widget}>
          <DonationWidget />
        </div>
        <Info />
      </div>
    </div>
  </>
)

export default Donation
