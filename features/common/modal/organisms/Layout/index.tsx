import * as React from 'react'
import CloseButton from './atoms/CloseButton'

interface Props {
  children: React.ReactNode
  closePopup: () => void
}
const Layout = ({ children, closePopup }: Props) =>
  <>
    <CloseButton onClick={closePopup} />
    {children}
  </>

export default Layout
