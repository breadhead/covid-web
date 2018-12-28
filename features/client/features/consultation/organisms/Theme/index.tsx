import * as React from 'react'

import { ShortClaim } from '@app/models/Claim/ShortClaim'

import * as styles from './Theme.css'

import Digest from './components/Digest'
import Footer from './components/Footer'
import Info from './components/Info'

import { Data } from './components/Info/config'

interface Props {
  shortClaim: ShortClaim
}

const Theme = ({ shortClaim }: Props) => (
  <section className={styles.theme}>
    <Digest styles={styles} {...shortClaim} />
    <Info data={Data} styles={styles} />
    <Footer />
  </section>
)

export default Theme
