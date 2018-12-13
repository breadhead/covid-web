import * as React from 'react'

import PrimaryFooter from './PrimaryFooter'
import SecondaryFooter from './SecondaryFooter'

import styles from './Footer.css'
import FooterTheme from './FooterTheme'
import FooterType from './FooterType'

interface Props {
  type?: FooterType
  theme?: FooterTheme
}

const Footer = ({
  type = FooterType.Primary,
  theme = FooterTheme.Default,
}: Props) => {
  const componentsMap = {
    Primary: <PrimaryFooter />,
    Secondary: <SecondaryFooter theme={theme} />,
  }

  return <section className={styles.footer}>{componentsMap[type]}</section>
}

export default Footer

export { FooterTheme, FooterType }
