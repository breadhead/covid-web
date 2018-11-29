import * as React from 'react'

import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import * as styles from './EmergingFormElement.css'

enum controlTypes {
  switch = 'switch',
  radiogroup = 'radiogroup',
}

interface Props {
  controlType: string
  radioGroupButtons: Array<{
    id: string,
    value: string,
    text?: string,
  }>
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
          onChange={this.toggleVisibility}
          defaultChecked={this.state.isVisible}
        />
    case controlTypes.radiogroup:
      return <RadioGroup
          name="controlForEmergingElement"
          type="bool"
          buttons={this.props.radioGroupButtons}
          onChange={this.toggleVisibility}
        />
    default:
      return null
    }
  }

  public toggleVisibility = () => {
    this.setState((state: { isVisible: boolean }) => ({
      isVisible: !state.isVisible,
    }))
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
