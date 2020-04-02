import { RadioChangeEvent } from 'antd/lib/radio';
import cx from 'classnames';
import * as React from 'react';

import { Toggle } from '@front/ui/toggle';

import * as styles from './EmergingFormElement.css';
import RadioGroupElement, { radioButtons } from './RadioGroupElement';

export enum ControlTypes {
  Switch = 'Switch',
  Radiogroup = 'Radiogroup',
}

export interface Props {
  controlType: string;
  name: string;
  defaultVisible?: boolean;
  defaultValue?: string;
  className?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (value?: boolean) => void;
}

interface State {
  isVisible: boolean;
}

class EmergingFormElement extends React.Component<Props, State> {
  public static getDerivedStateFromProps(props: Props, state: State) {
    if (props.value !== undefined) {
      return {
        ...state,
        isVisible: props.value,
      };
    }

    return state;
  }

  public state = {
    isVisible: this.props.defaultVisible,
  } as State;

  public switchChangeHandler = () => {
    const { onChange } = this.props;

    const isVisible = !this.state.isVisible;

    this.setState({ isVisible }, () => onChange && onChange(isVisible));
  };

  public radioGroupChangeHandler = (evt: RadioChangeEvent) => {
    const { onChange } = this.props;
    const { value } = evt.target;
    const isVisible = value === radioButtons[0].value;
    this.setState({ isVisible }, () => onChange && onChange(isVisible));
  };

  public render() {
    const {
      controlType,
      children,
      name,
      className,
      defaultVisible,
      ...rest
    } = this.props;
    const { isVisible } = this.state;

    return (
      <React.Fragment>
        <div className={cx(styles.EmergingFormControl, className)}>
          {controlType === ControlTypes.Switch ? (
            <Toggle
              {...rest}
              name={name}
              onChange={this.switchChangeHandler}
              value={this.state.isVisible}
            />
          ) : (
            <RadioGroupElement
              {...rest}
              name={name}
              onChange={this.radioGroupChangeHandler}
              defaultChecked={defaultVisible}
            />
          )}
        </div>
        {isVisible && (
          <div
            className={cx(styles.EmergingContainer, className)}
            hidden={!isVisible}
          >
            {children}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default EmergingFormElement;
