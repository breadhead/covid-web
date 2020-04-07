import * as React from 'react';

import s from './SerializerList.css';

interface SerializerListItemProps {
  props: any;
}

export const SerializerListItemComponent = ({
  props,
}: SerializerListItemProps) => {
  return <li className={s['list-item']}>{props?.children}</li>;
};

export const SerializerListItem = SerializerListItemComponent;
