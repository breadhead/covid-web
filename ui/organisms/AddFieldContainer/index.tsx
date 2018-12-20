import * as React from 'react'
import * as styles from './AddFieldContainer.css'

import Button, { ButtonKind } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  children: React.ReactNode
  buttonClassName?: string
  buttonText?: string
}

interface Component {
  id: number
  content: React.ReactNode
}

interface State {
  clickCount: number
  components: Component[]
}

class AddFieldContainer extends React.Component<Props, State> {
  public state = {
    clickCount: 0,
    components: [{ id: 0, content: this.props.children }],
  }

  public render() {
    const { buttonClassName, buttonText } = this.props
    const { components } = this.state

    return (
      <>
        {components.map(component => (
          <React.Fragment key={component.id}>
            {component.content}
          </React.Fragment>
        ))}
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
    this.setState((state: { clickCount: number; components: Component[] }) => {
      const clickCount = ++state.clickCount
      return {
        clickCount,
        components: state.components.concat({
          id: clickCount,
          content: this.props.children,
        }),
      }
    })
  }
}

export default AddFieldContainer
