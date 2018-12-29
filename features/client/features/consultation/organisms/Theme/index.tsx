import * as React from 'react'

import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'

import * as styles from './Theme.css'

import Digest from './components/Digest'
import Footer from './components/Footer'
import Info from './components/Info'

interface Props {
  shortClaim: ShortClaim
  situationClaim: SituationClaim
}

const Theme = ({ shortClaim, situationClaim }: Props) => (
  <section className={styles.theme}>
    <Digest styles={styles} {...shortClaim} />
    <Info styles={styles} claim={situationClaim} />
    <Footer />
  </section>
)

export default Theme
