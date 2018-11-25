import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import Button from '@app/ui/molecules/Button'
import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import { Recoverable } from 'repl'
import * as styles from './EmergingFormElement.css'

interface Props {
  type: 'button' | 'switcher',
  className?: string
  children?: React.ReactNode
}

class EmergingFormElement extends React.Component {

  public testBoolRadioButtons: [
    {
      id: '1',
      value: 'da',
    },
    {
      id: '2',
      value: 'niet',
    },
  ]

  constructor(props: Props) {
    super(props)
    this.state = {
      isTestFormElementVisible: false,
      triggerPosition: 0,
    }
    this.toggleElement = this.toggleElement.bind(this)
  }

  public switchType(type) {
    switch (type) {
    case 'button':
      return <Button
        onClick={this.toggleElement}
      >
        Нажми меня
      </Button>
      break
    case 'switcher':
      return <Switch onChange={this.toggleElement} />
      break
    case 'radiogroup':
      return <RadioGroup name="bool" type="bool" buttons={this.testBoolRadioButtons} />
      break
    default:
      return null
    }
  }

  public toggleElement(event) {
    this.setState({
      isTestFormElementVisible: !this.state.isTestFormElementVisible,
      triggerPosition: event.target.offsetLeft + (event.target.offsetWidth / 2),
    })
    // console.log(event.target.offsetWidth)
  }

  public render() {
    return (
      <React.Fragment>
        {
          this.switchType(this.props.type)
        }
        {
          <div
            className={styles.EmergingFormElement}
            hidden={this.state.isTestFormElementVisible}
          >
            <div
              className={styles.TriggerPointer}
              style={{
                left: this.state.triggerPosition
                  ? this.state.triggerPosition - 16
                  : 0
                + 'px',
              }}/>
            {this.props.children}
          </div>
        }
      </React.Fragment>
    )
  }
}

export default EmergingFormElement
