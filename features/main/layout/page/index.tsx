import * as React from 'react'

import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="admin">
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )

}
export default Layout
