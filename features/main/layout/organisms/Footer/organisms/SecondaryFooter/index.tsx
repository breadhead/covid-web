import * as React from 'react'
import * as styles from './SecondaryFooter.css'

import cx from 'classnames'

import BottomRow from '../PrimaryFooter/organisms/BottomRow'
import TopRow from './organisms/TopRow'

interface Props {
  theme?: 'default' | 'white'
}

const SecondaryFooter = ({ theme = 'default' }: Props) =>
  <footer className={theme === 'default' ? styles.footer : cx(styles.footer, styles.white)}>
    <TopRow />
    <BottomRow className={styles.row} />
  </footer>

export default SecondaryFooter
