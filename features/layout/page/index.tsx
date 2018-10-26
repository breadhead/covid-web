import Header from '@app/features/header/organisms/Header'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <div className="admin">
      <Header />
      <main>
        {children}
      </main>
    </div>
  )

}
export default Layout
