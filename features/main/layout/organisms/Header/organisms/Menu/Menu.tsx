import * as React from 'react'
import * as styles from './Menu.css'

import Transition from 'react-transition-group/Transition'
import Navigation from '../Navigation'

interface AnimationStyles {
  [key: string]: string
  exiting: string
  entering: string
  entered: string
}

const ANIMATION_STYLES: AnimationStyles = {
  exiting: styles.animExiting,
  entering: styles.animEntering,
  entered: styles.animEntered,
}

interface Props {
  isVisible: boolean
  hide: () => void
  signOut: () => void
  isMobile?: boolean
  children?: React.ReactNode
  showLoginButton: boolean
}

const Menu = ({
  isVisible,
  hide,
  signOut,
  isMobile,
  children,
  showLoginButton,
}: Props) => (
  <Transition in={isVisible} timeout={{ enter: 0, exit: 250 }} unmountOnExit>
    {(status: string) => (
      <>
        <Navigation
          signOut={signOut}
          className={ANIMATION_STYLES[status]}
          hide={hide}
          showLoginButton={showLoginButton}
        />
        {isMobile && children}
      </>
    )}
  </Transition>
)

export default Menu
