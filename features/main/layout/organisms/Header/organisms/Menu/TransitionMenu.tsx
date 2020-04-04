import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';

import * as styles from './Menu.css';

interface AnimationStyles {
  [key: string]: string;
  exiting: string;
  entering: string;
  entered: string;
}

const ANIMATION_STYLES: AnimationStyles = {
  exiting: styles.animExiting,
  entering: styles.animEntering,
  entered: styles.animEntered,
};

interface Props {
  isVisible: boolean;
  children?: React.ReactNode;
}

export const TransitionMenu = ({ isVisible, children }: Props) => (
  <Transition in={isVisible} timeout={{ enter: 0, exit: 250 }} unmountOnExit>
    {(status: string) => (
      <>
        <div className={cx(styles.menuWrapper, ANIMATION_STYLES[status])}>
          {children}
        </div>
      </>
    )}
  </Transition>
);
