import { range } from 'lodash';
import { size } from 'lodash';
import * as React from 'react';

import { Button, ButtonKind } from '@app/ui/button';
import { Icon } from '@app/ui/icon';
import { IconsList } from '@app/ui/sprite';

import * as styles from './AddFieldContainer.css';

type RemoveSection = (changeState: () => void) => void;
interface Props {
  children: (count: number[], removeSection: RemoveSection) => React.ReactNode;
  buttonClassName?: string;
  buttonText?: string;
  initialCount?: number;
}

interface State {
  count: number[];
}

const INITIAL_COUNT = 1;

class AddFieldContainer extends React.Component<Props, State> {
  public state = {
    // if initialCount is passed as a prop, we use it instead of defaults
    count: range(this.props.initialCount || INITIAL_COUNT),
  };

  public render() {
    const { buttonClassName, buttonText, children } = this.props;
    const { count } = this.state;

    return (
      <div>
        <div className={styles.fields}>
          {children(count, this.removeSection)}
        </div>
        <Button
          onClick={this.onClick}
          className={buttonClassName}
          kind={ButtonKind.Extra}
        >
          <Icon className={styles.icon} name={IconsList.Plus} />
          {buttonText}
        </Button>
      </div>
    );
  }

  private onClick = () => {
    this.changeCount(1);
  };

  private removeSection: RemoveSection = (changeState) => {
    changeState();
    this.changeCount(-1);
  };

  private changeCount = (quantity: number) => {
    this.setState((state: State) => ({
      count: range(size(state.count) + quantity),
    }));
  };
}

export default AddFieldContainer;
export { default as SectionHeader } from './SectionHeader';
export { default as SectionDivider } from './SectionDivider';
