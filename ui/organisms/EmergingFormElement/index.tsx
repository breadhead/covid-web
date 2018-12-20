import { RadioChangeEvent } from 'antd/lib/radio'
import * as React from 'react'

import * as styles from './EmergingFormElement.css'
import RadioGroupElement, { radioButtons } from './RadioGroupElement'
import SwitchElement from './SwitchElement'

enum controlTypes {
  switch = 'switch',
  radiogroup = 'radiogroup',
}

export interface Props {
  controlType: string
  name: string
  defaultVisible?: boolean
  className?: string
  children?: React.ReactNode
  value?: boolean
  onChange?: (value: boolean) => void
}

interface State {
  isVisible: boolean
}

class EmergingFormElement extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    defaultVisible: false,
  }

  public state = {
    isVisible: this.props.defaultVisible,
  } as State

  public switchChangeHandler = () => {
    const { onChange } = this.props

    this.setState(
      state => ({ isVisible: !state.isVisible }),
      () => onChange && onChange(this.state.isVisible),
    )
  }

  public radioGroupChangeHandler = (evt: RadioChangeEvent) => {
    const { onChange } = this.props
    const { value } = evt.target
    const isVisible = value === radioButtons[0].value
    this.setState(
      { isVisible },
      () => onChange && onChange(this.state.isVisible),
    )
  }

  public render() {
    const { controlType, children, name } = this.props
    const { isVisible } = this.state

    return (
      <React.Fragment>
        <div className={styles.EmergingFormControl}>
          {controlType === controlTypes.switch ? (
            <SwitchElement name={name} onChange={this.switchChangeHandler} />
          ) : (
            <RadioGroupElement
              name={name}
              onChange={this.radioGroupChangeHandler}
            />
          )}
        </div>
        {isVisible && (
          <div className={styles.EmergingContainer} hidden={!isVisible}>
            {children}
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default EmergingFormElement
