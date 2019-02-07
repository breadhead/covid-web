import * as React from 'react'
import { useCallback, useState } from 'react'

import Overlay from '@app/ui/molecules/Overlay'
import BurgerButton from '../../atoms/BurgerButton'
import Menu from './Menu'

const Container = () => {
  const [menuOpened, setOpened] = useState(false)

  const show = useCallback(() => setOpened(true), [])
  const hide = useCallback(() => setOpened(false), [])

  return (
    <>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <BurgerButton show={show} />
      <Menu hide={hide} isVisible={menuOpened} />
    </>
  )
}

export default Container
