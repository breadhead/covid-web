import * as React from 'react'
import * as styles from './Menu.css'

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

  public toggleVisibility = () => {
    this.setState((state: { isVisible: boolean }) => ({
      isVisible: !state.isVisible,
    }))
  }

  public render() {
    console.log('this.props', this.props.windowSize)
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

export default withWindowSize(Container)
