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
  isVisible: boolean
}

class Container extends React.Component<Props, State> {
  public state = {
    isVisible: false,
  }

  public componentDidMount() {
    const { width } = this.props.windowSize
    const isVisible = !!(width > 959)

    this.setState({ isVisible })
  }

  public componentDidUpdate(prevProps: Props) {
    const { width } = this.props.windowSize

    if (width !== prevProps.windowSize.width) {
      this.setState({ isVisible: !!(width > 959) })
    }
  }

  public show = () => {
    this.setState({ isVisible: true })
  }

  public hide = () => {
    this.setState({ isVisible: false })
  }

  public render() {
    const { isVisible } = this.state
    return (
      <>
        <Overlay isVisible={isVisible} onClick={this.hide} />
        <BurgerButton show={this.show} isMenuVisible={isVisible} />
        <Menu hide={this.hide} isVisible={isVisible} />
      </>
    )
  }
}

export default withWindowSize(Container)
