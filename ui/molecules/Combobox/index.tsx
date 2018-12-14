import { Select as AntSelect } from 'antd'
import { LabeledValue, SelectProps } from 'antd/lib/select'
import * as React from 'react'

import './Combobox.css?CSSModulesDisable'

const { Option, OptGroup } = AntSelect

interface OwnProps {
  name: string
  hintForEmptyValue?: string
  hint?: string
  options: LabeledValue[]
}

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
    const { name, className, options, ...rest } = this.props

    const { currentHint } = this.state

    return (
      <AntSelect
        id={name}
        showSearch
        onInputKeyDown={this.onChange}
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
    )
  }

  private onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement
    const { hintForEmptyValue, hint } = this.props

    if (hintForEmptyValue && hint) {
      const currentHint = value.length > 0 ? hint : hintForEmptyValue

      this.setState({ currentHint })
    }
  }

  private filterOptions = (input: string, { props }: any) =>
    (props.children as any).toLowerCase().includes(input.toLowerCase())
}

export default Combobox
