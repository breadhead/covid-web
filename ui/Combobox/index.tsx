import * as React from 'react'

import { Select as AntSelect } from 'antd'
import { LabeledValue, OptionProps, SelectProps } from 'antd/lib/select'

import { toString } from 'lodash'

import './Combobox.css?CSSModulesDisable'

const { Option, OptGroup } = AntSelect

interface OwnProps {
  name: string
  options: LabeledValue[]
  hintForEmptyValue?: string
  hint?: string
  value?: string
  label?: string
  wrapperClassName?: string
  selectClassName?: string
  error?: string
}

type Option = React.ReactElement<OptionProps>

export type Props = OwnProps & SelectProps

const NOT_FOUND_TEXT = 'К сожалению, ничего не найдено'

class Combobox extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    hintForEmptyValue: '',
    hint: '',
  }

  public state = {
    currentHint: this.props.hintForEmptyValue,
  }

  public render() {
    const {
      name,
      wrapperClassName,
      selectClassName,
      options,
      label,
      error,
      value,
      ...rest
    } = this.props

    const { currentHint } = this.state

    const currentValue = `${value}`.length > 0 ? `${value}` : undefined
    return (
      <div className={wrapperClassName}>
        {label && (
          <label className="label" htmlFor={name}>
            {label}
          </label>
        )}
        <AntSelect
          id={name}
          showSearch
          onSearch={this.onInputKeyDown}
          maxTagCount={6}
          notFoundContent={<div className="not-found">{NOT_FOUND_TEXT}</div>}
          filterOption={this.filterOptions}
          value={currentValue}
          {...rest}
          className={error && 'error'}
        >
          <OptGroup label={currentHint}>
            {options.map(option => (
              <Option key={option.key} value={option.key}>
                {option.label}
              </Option>
            ))}
          </OptGroup>
        </AntSelect>
      </div>
    )
  }

  private onInputKeyDown = (value: string) => {
    const { hintForEmptyValue, hint } = this.props

    if (hintForEmptyValue && hint) {
      const currentHint = value.length > 0 ? hint : hintForEmptyValue

      this.setState({ currentHint })
    }
  }

  private filterOptions = (input: string, option: Option) =>
    toString(option.props.children)
      .toLowerCase()
      .includes(input.toLowerCase())
}

export default Combobox
