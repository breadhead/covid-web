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
  isMenuVisible: boolean
  isBurgerButtonVisible: boolean
  isOverlayVisible: boolean
}

const MOBILE_BREAKPOINT = 959

class Container extends React.Component<Props, State> {
  public state = {
    isBurgerButtonVisible: false,
    isMenuVisible: false,
    isOverlayVisible: false,
  }

  public componentDidMount() {
    this.toggleVisibility()
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.windowSize.width !== prevProps.windowSize.width) {
      this.toggleVisibility()
    }
  }

  public show = () => {
    this.setState({ isMenuVisible: true, isOverlayVisible: true })
  }

  public hide = () => {
    this.setState({ isMenuVisible: false, isOverlayVisible: false })
  }

  public toggleVisibility = () => {
    const { width } = this.props.windowSize

    const isMenuVisible = !!(width > MOBILE_BREAKPOINT)
    const isBurgerButtonVisible = !!(width < MOBILE_BREAKPOINT)

    this.setState({ isBurgerButtonVisible, isMenuVisible })
  }

  public render() {
    const {
      isMenuVisible,
      isBurgerButtonVisible,
      isOverlayVisible,
    } = this.state

    return (
      <>
        <Overlay isVisible={isOverlayVisible} onClick={this.hide} />
        <BurgerButton show={this.show} isVisible={isBurgerButtonVisible} />
        <Menu hide={this.hide} isVisible={isMenuVisible} />
      </>
    )
  }
}

export default withWindowSize(Container)
