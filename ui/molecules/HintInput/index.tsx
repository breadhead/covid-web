import * as React from 'react'

import { Select as AntSelect } from 'antd'
import { LabeledValue, OptionProps, SelectProps } from 'antd/lib/select'

import { toString } from 'lodash'

import './HintInput.css?CSSModulesDisable'

const { Option, OptGroup } = AntSelect

interface OwnProps {
  name: string
  options: LabeledValue[]
  className?: string
}

type Option = React.ReactElement<OptionProps>

export type Props = OwnProps & SelectProps

class HintInput extends React.Component<Props> {
  public state = {
    value: '',
  }

  public render() {
    const { name, className, options, ...rest } = this.props
    const { value } = this.state

    const optionsGroup =
      value.length > 0 ? (
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
        dropdownClassName="hintInput"
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
    toString(option.props.children)
      .toLowerCase()
      .includes(input.toLowerCase())
}

export default HintInput
