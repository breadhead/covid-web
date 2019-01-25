import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import Overlay from '@app/ui/molecules/Overlay'
import BurgerButton from '../../atoms/BurgerButton'
import Menu from './Menu'

interface Props {
  windowSize: WindowSize
}
export interface State {
  menuOpened: boolean
}

class Container extends React.Component<Props, State> {
  public state = {
    menuOpened: false,
  }

  public show = () => {
    this.setState({ menuOpened: true })
  }

  public hide = () => {
    this.setState({ menuOpened: false })
  }

  public render() {
    const { menuOpened: menuOpened } = this.state

    return (
      <>
        <Overlay isVisible={menuOpened} onClick={this.hide} />
        <BurgerButton show={this.show} />
        <Menu hide={this.hide} isVisible={menuOpened} />
      </>
    )
  }
}

export default withWindowSize(Container)
