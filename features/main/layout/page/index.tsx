import * as React from 'react'

import Footer, { FooterTheme, FooterType } from '../organisms/Footer'
import Header, { HeaderTheme, HeaderType } from '../organisms/Header'

interface Props {
  children: React.ReactNode
  headerType?: HeaderType
  headerTheme?: HeaderTheme
  footerType?: FooterType
  footerTheme?: FooterTheme
}

class Layout extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    headerType: HeaderType.primary,
    headerTheme: HeaderTheme.default,
    footerType: FooterType.primary,
    footerTheme: FooterTheme.default,
  }

  public render() {
    const { children, headerType, headerTheme, footerType, footerTheme } = this.props

    return (
      <React.Fragment>
        <Header
          type={headerType}
          theme={headerTheme}
        />
        <main style={{ minHeight: '50vh', textAlign: 'center' }}>
          {children}
        </main>
        <Footer
          type={footerType}
          theme={footerTheme}
        />
      </React.Fragment>
    )
  }
}

export default Layout
