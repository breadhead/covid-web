import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import * as styles from './Bubble.css';
import { bubbleText } from './text';

export const Bubble = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => {
        return prev === bubbleText.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setShow(true);

    const id = setInterval(() => {
      setShow(false);
    }, 4000);

    return () => clearInterval(id);
  }, [index]);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={show} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div key={index} className={styles.bubble}>
            <span className={styles.hint}>{bubbleText[index]}</span>
          </div>
        </div>
      )}
    </Transition>
  );
};
