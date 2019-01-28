import { regions } from '@app/features/client/features/newClaim/organisms/Contacts/regions'
import { StylesType } from '@app/lib/config'
import * as React from 'react'

interface LocalState {
  clientInRussia: boolean
}

interface ContainerProps {
  region?: string
  styles: StylesType
  name: string
  textRegion: string
  textCountry: string
  textSwitch: string
}

export interface Props extends ContainerProps {
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<ContainerProps, LocalState> {
    public state = this.getInitialState() as LocalState

    public render() {
      return (
        <WrappedComponent
          clientInRussia={this.state.clientInRussia}
          onChangeInRussia={this.onChangeInRussia}
          {...this.props}
        />
      )
    }

    private getInitialState(): LocalState {
      return {
        clientInRussia: this.props.region
          ? regions.includes(this.props.region)
          : true,
      }
    }

    private onChangeInRussia = (value: boolean) =>
      this.setState({ clientInRussia: value })
  }
}

export default Container
