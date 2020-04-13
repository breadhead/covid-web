import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import * as styles from './Bubble.css';
import { bubbleText } from './text';

export const Bubble = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => {
        return prev === bubbleText.length - 1 ? 0 : prev + 1;
      });
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <SwitchTransition>
        <CSSTransition
          key={index}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          classNames="bubble"
        >
          <div className={cx(styles.bubble)}>
            <span>{bubbleText[index]}</span>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
