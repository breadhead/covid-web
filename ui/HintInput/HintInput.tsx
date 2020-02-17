import * as React from 'react'

import { AutoComplete } from 'antd'
import { AutoCompleteProps } from 'antd/lib/auto-complete'
import { OptionProps } from 'antd/lib/select'

import { toString } from 'lodash'

import './HintInput.css?CSSModulesDisable'
import { mapComplexOptions } from './helpers/mapComplexOptions';

const { Option } = AutoComplete


export interface ComplexOptions {
  title: string,
  children: string[]
}

enum HintInputTypes {
  Simple = 'Simple',
  Complex = 'Complex'
}

interface OwnProps {
  name: string
  options: string[] | ComplexOptions[]
  className?: string
  type?: HintInputTypes
}

type Option = React.ReactElement<OptionProps>

export type Props = OwnProps & AutoCompleteProps


// const dataSource = [
//   {
//     title: 'Libraries',
//     children: ['AntDesign', 'AntDesign UI'],
//   },
//   {
//     title: 'Solutions',
//     children: ['Саратовская областная поликлиника', 'Челябинский метеорит'],
//   }
// ];


export class HintInput extends React.Component<Props> {
  public state = {
    value: '',
  }

  public render() {
    const { name, className, options, type = HintInputTypes.Simple, ...rest } = this.props


    let currentOptions

    switch (type) {
      case HintInputTypes.Simple:
        currentOptions = options
        break;
      case HintInputTypes.Complex:
        currentOptions = mapComplexOptions(options as ComplexOptions[])
        break;
      default:
        currentOptions = options
        break;
    }

    return (
      <AutoComplete
        id={name}
        dataSource={currentOptions as any}
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

