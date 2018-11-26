import { Form as AntForm, Switch as AntSwitch } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import * as styles from './EmergingFormElement.css'

interface Props {
  controlType: 'switch' | 'radiogroup',
  className?: string,
  children?: React.ReactNode,
  defaultVisible?: boolean,
  radioGroupButtons?: Array< {
    id: string,
    value: string,
    text ?: string,
  } >
}

class EmergingFormElement extends React.Component {

  public state = {
    isVisible: this.props.defaultVisible,
  }

  public getControlType(controlType) {
    switch (controlType) {
    case 'switch':
      return <Switch
            name="controlForEmergingElement"
            onChange={this.toggleTrigger}
            defaultChecked={this.state.isVisible}
          />
      break
    case 'radiogroup':
      return <RadioGroup
          name="controlForEmergingElement"
          type="controls"
          buttons={this.props.radioGroupButtons}
          onClick={this.toggleTrigger}
        />
      break
    default:
      return null
      break
    }
  }

  public toggleTrigger = () =>
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }))

  public render() {
    return (
      <React.Fragment>
        <div className={styles.EmergingFormControl}>
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
