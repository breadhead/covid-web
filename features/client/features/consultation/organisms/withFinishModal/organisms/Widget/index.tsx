import * as React from 'react'
import * as styles from './Widget.css'

import DonationWidget from '@app/features/main/donation'

const Widget = () => (
  <div id="nenaprasno_donation" className={styles.widget}>
    <DonationWidget />
  </div>
)

export default Widget
