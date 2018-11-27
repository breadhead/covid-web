import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Combobox.css?CSSModulesDisable'

const FormItem = AntForm.Item
const { Option, OptGroup } = AntSelect

interface Props {
  name: string
  options: Array<{
    id: string,
    value: string,
  }>
  defaultValue?: string
  className?: string
  initialLabelValue?: string,
  inputLabelValue?: string,
  disabled?: boolean
}

const NOT_FOUND_TEXT = 'К сожалению, ничего не найдено'

class Combobox extends React.Component<Props> {

  public static defaultProps: Partial<Props> = {
    initialLabelValue: '',
    inputLabelValue: '',
  }

  public state = {
    label: this.props.initialLabelValue,
  }

  public onChange = (evt: any) => {
    if (this.props.initialLabelValue && this.props.inputLabelValue) {

      const { initialLabelValue, inputLabelValue } = this.props

      evt.target.value.length > 0
        ? this.setState({ label: inputLabelValue })
        : this.setState({ label: initialLabelValue })
    }
  }

  public render() {
    const { name, className, initialLabelValue, inputLabelValue, options, defaultValue, disabled, ...rest } = this.props

    return (
      <FinalField className={className} name={name}>
        {({ meta }) => (
          <FormItem
            validateStatus={meta.submitError && 'error'}
            help={meta.submitError}
          >
            <AntSelect
              id={name}
              showSearch
              defaultValue={defaultValue}
              onInputKeyDown={this.onChange}
              maxTagCount={6}
              notFoundContent={<div className="not-found">{NOT_FOUND_TEXT}</div>}
              disabled={disabled}
              {...rest}
            >
              <OptGroup label={this.state.label}>
                {options.map((option: { id: string, value: string }) => (
                  <Option key={option.id} value={option.value}>{option.value}</Option>
                ))}
              </OptGroup>
            </AntSelect>
          </FormItem>
        )}
      </FinalField>
    )
  }
}

export default Combobox
