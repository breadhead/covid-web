import * as React from 'react'
import styles from './Page.css'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <div className="admin">
      <main className={styles.Main}>
        {children}
      </main>
    </div>
  )

}
export default Layout
