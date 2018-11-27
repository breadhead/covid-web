import { Form as AntForm, Switch as AntSwitch } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import * as styles from './EmergingFormElement.css'

enum controlTypes {
  switch = 'switch',
  radiogroup = 'radiogroup',
}

interface Props {
  radioGroupButtons: Array< {
    id: string,
    value: string,
    text ?: string,
  } >
  controlType: string,
  defaultVisible: boolean,
  className?: string,
  children?: React.ReactNode,
}

class EmergingFormElement extends React.Component<Props> {

  public state = {
    isVisible: this.props.defaultVisible,
  }

  public getControlType(controlType) {
    switch (controlType) {
    case controlTypes.switch:
      return <Switch
            name="controlForEmergingElement"
            onChange={this.toggleVisibility}
            defaultChecked={this.state.isVisible}
          />
      break
    case controlTypes.radiogroup:
      return <RadioGroup
          name="controlForEmergingElement"
          type="controls"
          buttons={this.props.radioGroupButtons}
          onClick={this.toggleRadioGroup}
          defaultValue={
            this.state.isVisible
            ? this.props.radioGroupButtons[0].value
            : this.props.radioGroupButtons[1].value
          }
        />
      break
    default:
      return null
      break
    }
  }

  public toggleVisibility = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }))
  }

  public toggleRadioGroup = (e) => {
    const radioButton = e.target.parentElement.parentElement
    radioButton.classList[1] !== 'ant-radio-wrapper-checked'
      ? this.toggleVisibility()
      : null
  }

  public render() {
    return (
        <React.Fragment>
          <div className={styles.EmergingFormControl} >
            {this.getControlType(this.props.controlType)}
          </div>
          {this.getControlType(this.props.controlType)
            &&
            <div
              className={styles.EmergingFormElement}
              hidden={!this.state.isVisible}
            >
              {this.props.children}
            </div>
          }
        </React.Fragment>
    )
  }
}

export default EmergingFormElement
