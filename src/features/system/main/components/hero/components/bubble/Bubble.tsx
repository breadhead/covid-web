import React, { useEffect, useState } from 'react';

import * as styles from './Bubble.css';
import { bubbleText } from './text';

export const Bubble = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => {
        return prev === bubbleText.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div key={index} className={styles.bubble}>
      <span className={styles.hint}>{bubbleText[index]}</span>
    </div>
  );
};
