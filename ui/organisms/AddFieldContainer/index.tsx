import { range } from 'lodash'
import * as React from 'react'
import * as styles from './AddFieldContainer.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  children: (count: number[]) => React.ReactNode
  buttonClassName?: string
  buttonText?: string
  initialCount?: number
}

interface State {
  count: number[]
}

const INITIAL_COUNT = 1

class AddFieldContainer extends React.Component<Props, State> {
  public state = {
    // if initialCount is passed as a prop, we use it instead of defaults
    count: range(this.props.initialCount || INITIAL_COUNT),
  }

  public render() {
    const { buttonClassName, buttonText, children } = this.props
    const { count } = this.state

    return (
      <article>
        <article className={styles.fields}>{children(count)}</article>
        <Button
          onClick={this.onClick}
          className={buttonClassName}
          kind={ButtonKind.Extra}
        >
          <IconCustom className={styles.icon} name="24x24_plus" />
          {buttonText}
        </Button>
      </article>
    )
  }

  private onClick = () => {
    this.setState((state: State) => ({
      count: range(state.count.length + 1),
    }))
  }
}

export default AddFieldContainer
