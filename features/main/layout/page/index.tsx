import * as React from 'react'

import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

interface Props {
  children: React.ReactNode
  headerType?: 'primary' | 'secondary'
  headerTheme?: 'default' | 'white'
  footerType?: 'primary' | 'secondary'
  footerTheme?: 'default' | 'white'
}

class Layout extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    headerType: 'primary',
    headerTheme: 'default',
    footerType: 'primary',
    footerTheme: 'default',
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
