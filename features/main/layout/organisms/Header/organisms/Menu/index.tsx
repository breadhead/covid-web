import * as React from 'react'
import { useCallback, useState } from 'react'

import Overlay from '@app/ui//Overlay'
import BurgerButton from '../../atoms/BurgerButton'
import Menu from './Menu'

interface Props {
  signOut: () => void
  showLoginButton: boolean
}

const Container = ({ signOut, showLoginButton }: Props) => {
  const [menuOpened, setOpened] = useState(false)

  const show = useCallback(() => setOpened(true), [])
  const hide = useCallback(() => setOpened(false), [])

  return (
    <>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <BurgerButton show={show} />
      <Menu
        showLoginButton={showLoginButton}
        signOut={signOut}
        hide={hide}
        isVisible={menuOpened}
      />
    </>
  )
}

export default Container
