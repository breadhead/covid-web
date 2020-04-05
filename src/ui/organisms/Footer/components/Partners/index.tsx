import cx from 'classnames';
import * as React from 'react';

import {footerProjects} from './footerProjects';
import styles from './Partners.css';

interface Props {
  className?: string;
}

const Partners = ({ className }: Props) => (
  <div className={cx(styles.middle, className)}>
    {footerProjects.map(({ id, text, logo, href }) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={id}
        href={href}
        className={styles.partner}
      >
        <p className={styles.text}>{text}</p>
        <img className={styles.logo} src={logo} alt={text} />
      </a>
    ))}
  </div>
);

export default Partners;
