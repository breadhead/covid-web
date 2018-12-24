import * as React from 'react'

import * as styles from './Page.css'

import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'

import Header from '../organisms/Header'

interface Props {
  children: React.ReactNode
  footerType?: FooterType
  footerTheme?: FooterTheme
}

class Layout extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    footerType: FooterType.Primary,
    footerTheme: FooterTheme.Default,
  }

  public render() {
    const { children, footerType, footerTheme } = this.props

    return (
      <React.Fragment>
        <Header />
        <main className={styles.Main}>{children}</main>
        <Footer type={footerType} theme={footerTheme} />
      </React.Fragment>
    )
  }
}

export default Layout
