import { Select as AntSelect } from 'antd'
import { LabeledValue, OptionProps, SelectProps } from 'antd/lib/select'
import cx from 'classnames'
import * as React from 'react'

import './HintInput.css?CSSModulesDisable'

const { Option, OptGroup } = AntSelect

interface OwnProps {
  name: string
  hintForEmptyValue?: string
  hint?: string
  options: LabeledValue[]
  value?: string
}

type Option = React.ReactElement<OptionProps>

export type Props = OwnProps & SelectProps

class HintInput extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    hintForEmptyValue: '',
    hint: '',
  }

  public state = {
    currentHint: this.props.hintForEmptyValue,
    value: '',
  }

  public render() {
    const { name, className, options, ...rest } = this.props

    const optionsGroup =
      this.state.value.length > 0 ? (
        <OptGroup>
          {options.map(option => (
            <Option className="option" key={option.key} value={option.key}>
              {option.label}
            </Option>
          ))}
        </OptGroup>
      ) : null

    return (
      <AntSelect
        id={name}
        showArrow={false}
        showSearch
        dropdownClassName={cx(
          'hintInput',
          !(this.state.value.length > 0) && 'hidden',
        )}
        onSearch={this.onSearch}
        maxTagCount={6}
        filterOption={this.filterOptions}
        notFoundContent={null}
        {...rest}
      >
        {optionsGroup}
      </AntSelect>
    )
  }

  private onSearch = (value: string) => this.setState({ value })

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

export default HintInput
