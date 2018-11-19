import * as React from 'react'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <div className="admin">
      {children}
    </div>
  )

}
export default Layout
