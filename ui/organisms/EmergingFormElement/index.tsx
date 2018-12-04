import * as React from 'react'

import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import * as styles from './EmergingFormElement.css'

import { RadioChangeEvent } from 'antd/lib/radio'

enum controlTypes {
  switch = 'switch',
  radiogroup = 'radiogroup',
}

const radioButtons = [
  {
    id: '1',
    value: 'Да',
  },
  {
    id: '2',
    value: 'Нет',
  },
]

interface Props {
  controlType: string
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

  public getControl(controlType: string) {
    switch (controlType) {
    case controlTypes.switch:
      return <Switch
          name="controlForEmergingElement"
          onChange={this.switchChangeHandler}
          defaultChecked={this.state.isVisible}
        />
    case controlTypes.radiogroup:
      return <RadioGroup
          name="controlForEmergingElement"
          type={RadioGroupType.Bool}
          buttons={radioButtons}
          onChange={this.radioGroupChangeHandler}
        />
    default:
      return null
    }
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

    const { controlType, children } = this.props
    const { isVisible } = this.state

    const currentControl = this.getControl(controlType)

    return (
      <React.Fragment>
        <div className={styles.EmergingFormControl} >
          {currentControl}
        </div>
        {currentControl
          &&
          <div
            className={styles.EmergingFormElement}
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
