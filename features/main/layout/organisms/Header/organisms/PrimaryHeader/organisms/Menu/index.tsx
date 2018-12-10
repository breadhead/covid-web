import * as React from 'react'
import * as styles from './Menu.css'

import BurgerButton from '../../atoms/BurgerButton'
import Menu from './Menu'

export interface State {
  isVisible: boolean
}

class Container extends React.Component<{}, State> {
  public state = {
    isVisible: false,
  }

  public toggleVisibility = () => {
    this.setState((state: { isVisible: boolean }) => ({
      isVisible: !state.isVisible,
    }))
  }

  public render() {
    return (
      <>
        <BurgerButton
          onClick={this.toggleVisibility}
          isVisible={!this.state.isVisible}
        />
        <Menu isVisible={this.state.isVisible} />
      </>
    )
  }
}

export default Container
