import * as React from 'react'

import * as styles from './Theme.css'

import Digest from './components/Digest'
import Footer from './components/Footer'
import Info from './components/Info'

import { Data } from './components/Info/config'

interface Props {
  onChatButtonClick: () => void
}

const Theme = ({ onChatButtonClick }: Props) => (
  <section className={styles.theme}>
    <Digest onChatButtonClick={onChatButtonClick} styles={styles} />
    <Info data={Data} styles={styles} />
    <Footer />
  </section>
)

export default Theme
