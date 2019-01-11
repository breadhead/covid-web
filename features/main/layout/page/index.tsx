import * as React from 'react'

import * as styles from './Page.css'

import cx from 'classnames'

import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'
import Header from '../organisms/Header'

interface Props {
  children: React.ReactNode
  footerType?: FooterType
  footerTheme?: FooterTheme
  className?: string
}

class Layout extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    footerType: FooterType.Primary,
    footerTheme: FooterTheme.Default,
  }

  public render() {
    const { children, footerType, footerTheme, className } = this.props

    return (
      <React.Fragment>
        <Header />
        <main className={cx(styles.Main, className)}>{children}</main>
        <Footer type={footerType} theme={footerTheme} />
      </React.Fragment>
    )
  }
}

export default Layout
