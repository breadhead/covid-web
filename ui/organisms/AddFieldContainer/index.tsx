import { range } from 'lodash'
import * as React from 'react'
import * as styles from './AddFieldContainer.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  children: (count: number[]) => React.ReactNode
  buttonClassName?: string
  buttonText?: string
}

interface State {
  count: number[]
}

class AddFieldContainer extends React.Component<Props, State> {
  public state = {
    count: range(1),
  }

  public render() {
    const { buttonClassName, buttonText, children } = this.props
    const { count } = this.state
    return (
      <>
        {children(count)}
        <Button
          onClick={this.onClick}
          className={buttonClassName}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          {buttonText}
        </Button>
      </>
    )
  }

  private onClick = () => {
    this.setState((state: State) => ({
      count: range(state.count.length + 1),
    }))
  }
}

export default AddFieldContainer
