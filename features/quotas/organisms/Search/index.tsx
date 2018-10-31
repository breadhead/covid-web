import { Input } from 'antd'
import { debounce } from 'lodash'
import * as React from 'react'

interface Props {
  value?: string
  onChange: (value: string) => void
}

interface State {
  currentValue?: string
}

export default class Search extends React.Component<Props, State> {

  public state = { } as State

  private debouncedOnChange = debounce(this.props.onChange, 500)

  public render() {
    const { currentValue } = this.state

    return <Input value={currentValue} onChange={this.handleChange} placeholder="Поиск" />
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    this.setState(
      { currentValue: value },
      () => this.debouncedOnChange(value),
    )
  }

}
