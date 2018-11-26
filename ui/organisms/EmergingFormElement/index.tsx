import { Form as AntForm, Switch as AntSwitch } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import * as styles from './EmergingFormElement.css'

interface Props {
  type: 'switch' | 'radiogroup',
  className?: string,
  children?: React.ReactNode,
}

class EmergingFormElement extends React.Component {

  constructor(props: Props) {
    super(props)
    this.state = {
      isFormElementHidden: false,
      boolRadioButtons: [
        {
          id: '1',
          value: 'Да',
        },
        {
          id: '2',
          value: 'Нет',
        },
      ],
    }
    this.toggleTrigger = this.toggleTrigger.bind(this)
  }

  public defineType(type) {
    switch (type) {
    case 'switch':
      return <Switch
          name="controlForEmergingElement"
          onChange={this.toggleTrigger}
          defaultChecked
        />
      break
    case 'radiogroup':
      return <RadioGroup
        name="controlForEmergingElement"
        type="controls"
        buttons={this.state.boolRadioButtons}
        onClick={this.toggleTrigger}
      />
      break
    }
  }

  public toggleTrigger(event) {
    this.setState({
      isFormElementHidden: !this.state.isFormElementHidden,
    })
  }

  public render() {
    return (
      <React.Fragment>
        <div className={styles.EmergingFormControl}>
          {this.defineType(this.props.type)}
        </div>
        <div
          className={styles.EmergingFormElement}
          hidden={this.state.isFormElementHidden}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default EmergingFormElement
