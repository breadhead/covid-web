import * as React from 'react';

import * as styles from './Overlay.css';

export interface Props {
  onClick: () => void;
  isVisible: boolean;
}

const Overlay = ({ onClick, isVisible }: Props) =>
  isVisible ? <div onClick={onClick} className={styles.overlay} /> : null;

export default Overlay;
