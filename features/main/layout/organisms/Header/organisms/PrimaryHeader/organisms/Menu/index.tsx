import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
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
    this.setState({ isVisible: !!(this.props.windowSize.width > 767) })
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.windowSize.width !== prevProps.windowSize.width) {
      this.setState({ isVisible: !!(this.props.windowSize.width > 767) })
    }
  }

  public show = () => {
    this.setState({ isVisible: true })
  }

  public hide = () => {
    this.setState({ isVisible: false })
  }

  public render() {
    return (
      <>
        <BurgerButton
          show={this.show}
          hide={this.hide}
          isMenuVisible={this.state.isVisible}
        />
        <Menu isVisible={this.state.isVisible} />
      </>
    )
  }
}

export default withWindowSize(Container)
