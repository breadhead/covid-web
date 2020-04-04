import * as React from 'react';

import { regions } from '@app/src/ui/regionSelect/organisms/RegionSelect/regions';
import { Schema } from '@app/src/features/common/formHOCs/withFinalForm';
import { StylesType } from '@app/src/lib/config';

interface LocalState {
  clientInRussia: boolean;
}

interface ContainerProps {
  validate?: Schema;
  region?: string;
  styles: StylesType;
  name: string;
  textRegion: string;
  textCountry: string;
  textSwitch: string;
  changeField: (name: string, value?: any) => void;
}

export interface Props extends ContainerProps {
  clientInRussia?: boolean;
  onChangeInRussia: (value?: boolean) => void;
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class ContaineredComponent extends React.Component<
    ContainerProps,
    LocalState
  > {
    public state = this.getInitialState() as LocalState;
    public render() {
      return (
        <WrappedComponent
          clientInRussia={this.state.clientInRussia}
          onChangeInRussia={this.onChangeInRussia}
          {...this.props}
        />
      );
    }

    private getInitialState(): LocalState {
      return {
        clientInRussia: this.props.region
          ? regions.includes(this.props.region)
          : true,
      };
    }

    private onChangeInRussia = (value = true) => {
      this.setState({ clientInRussia: value });
      this.props.changeField(this.props.name, undefined);
    };
  };
};

export default Container;
