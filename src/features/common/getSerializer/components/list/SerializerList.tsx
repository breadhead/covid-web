import * as React from 'react';

import s from './SerializerList.css';

interface SerializerListProps {
  children: any;
}

export const SerializerList = ({ children }: SerializerListProps) => {
  return <ul className={s['list']}>{children}</ul>;
};
