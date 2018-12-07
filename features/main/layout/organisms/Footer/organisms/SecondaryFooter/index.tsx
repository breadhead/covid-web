import * as React from 'react'
import * as styles from './SecondaryFooter.css'

import cx from 'classnames'

import BottomRow from '../PrimaryFooter/organisms/BottomRow'
import TopRow from './organisms/TopRow'

import { FooterTheme } from '../..'

interface Props {
  theme?: FooterTheme
}

const SecondaryFooter = ({ theme = FooterTheme.Default }: Props) => (
  <footer className={cx(styles.footer, styles[theme])}>
    <TopRow />
    <BottomRow className={styles.row} />
  </footer>
)

export default SecondaryFooter
