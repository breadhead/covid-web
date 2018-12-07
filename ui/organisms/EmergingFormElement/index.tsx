import * as React from 'react'

import * as styles from './EmergingFormElement.css'

import { RadioChangeEvent } from 'antd/lib/radio'
import RadioGroupElement, { radioButtons } from './organisms/RadioGroupElement'
import SwitchElement from './organisms/SwitchElement'

enum controlTypes {
  switch = 'switch',
  radiogroup = 'radiogroup',
}

interface Props {
  controlType: string
  name: string
  defaultVisible?: boolean
  className?: string
  children?: React.ReactNode
}

class EmergingFormElement extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    defaultVisible: false,
  }

  public state = {
    isVisible: this.props.defaultVisible,
  }

  public switchChangeHandler = () => {
    this.setState((state: { isVisible: boolean }) => ({
      isVisible: !state.isVisible,
    }))
  }

  public radioGroupChangeHandler = (evt: RadioChangeEvent) => {
    const { value } = evt.target
    const isVisible = value === radioButtons[0].value
    this.setState({ isVisible })
  }

  public render() {

    const { controlType, children, name } = this.props
    const { isVisible } = this.state

    return (
      <React.Fragment>
        <div className={styles.EmergingFormControl} >
          {controlType === controlTypes.switch
            ? <SwitchElement name={name} onChange={this.switchChangeHandler} />
            : <RadioGroupElement name={name} onChange={this.radioGroupChangeHandler} />}
        </div>
        {isVisible
          && <div
            className={styles.EmergingContainer}
            hidden={!isVisible}
          >
            {children}
          </div>
        }
      </React.Fragment>
    )
  }
}

export default EmergingFormElement
