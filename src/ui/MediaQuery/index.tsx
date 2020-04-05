import React from 'react';
import cx from 'classnames';

import * as styles from './MediaQuery.css';

export enum Query {
  FromSmall = 'FromSmall',
  FromMedium = 'FromMedium',
  FromMediumSecondDown = 'FromMediumSecondDown',
  FromLarge = 'FromLarge',
  FromExtraLarge = 'FromExtraLarge',
  ToSmall = 'ToSmall',
  ToMedium = 'ToMedium',
  ToMediumSecondDown = 'MediumSecondDown',
  ToLarge = 'ToLarge',
  ToExtraLarge = 'ToExtraLarge',
}
interface Props {
  children: React.ReactNode;
  query: Query;
  className?: string;
}

const MediaQuery = ({ children, query, className }: Props) => (
  <div className={cx(styles[query], className)}>{children}</div>
);

export default MediaQuery;
