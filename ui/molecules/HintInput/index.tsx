import * as React from 'react'

import { AutoComplete } from 'antd'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import { OptionProps } from 'antd/lib/select'

import { toString } from 'lodash'

import './HintInput.css?CSSModulesDisable'

const { Option } = AutoComplete

interface OwnProps {
  name: string
  options: string[]
  className?: string
}

type Option = React.ReactElement<OptionProps>

export type Props = OwnProps & AutoCompleteProps

class HintInput extends React.Component<Props> {
  public state = {
    value: '',
  }

  public render() {
    const { name, className, options, ...rest } = this.props

    return (
      <AutoComplete
        id={name}
        dataSource={options}
        showSearch
        className="hintInput"
        onSearch={this.onSearch}
        filterOption={this.filterOptions}
        notFoundContent={null}
        {...rest}
      />
    )
  }

  private onSearch = (value: string) => this.setState({ value })

  private filterOptions = (input: string, option: Option) =>
    toString(option.props.children)
      .toLowerCase()
      .includes(input.toLowerCase())
}

export default HintInput
