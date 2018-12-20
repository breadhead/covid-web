import { Select as AntSelect } from 'antd'
import { LabeledValue, OptionProps, SelectProps } from 'antd/lib/select'
import * as React from 'react'

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
      ...rest
    } = this.props

    const { currentHint } = this.state

    return (
      <div className={wrapperClassName}>
        {label && (
          <label className="label" htmlFor={name}>
            {label}
          </label>
        )}
        <AntSelect
          className={selectClassName}
          id={name}
          showSearch
          onSearch={this.onInputKeyDown}
          maxTagCount={6}
          notFoundContent={<div className="not-found">{NOT_FOUND_TEXT}</div>}
          filterOption={this.filterOptions}
          {...rest}
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
    this.optionToString(option)
      .toLowerCase()
      .includes(input.toLowerCase())

  // TODO: fix it
  private optionToString = ({ props }: Option): string =>
    (props.children &&
      typeof props.children === 'string' &&
      (props.children as string)) ||
    ''
}

export default Combobox
