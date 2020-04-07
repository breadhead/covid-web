import * as React from 'react';
import cx from 'classnames';

import s from './SerializerList.css';

interface SerializerListProps {
  props: {
    type: ListType;

    children: React.ReactNode;
  };
}

export const SerializerList = ({
  props: { type, children },
}: SerializerListProps) => {
  // TODO: pass links
  const ListComponent = (props) =>
    props.type === ListType.Bullet ? (
      <ul {...props}></ul>
    ) : (
      <ol {...props}></ol>
    );

  return (
    <ListComponent type={type} className={cx(s['list'], s[type])}>
      {children}
    </ListComponent>
  );
};

export enum ListType {
  Bullet = 'bullet',
  Number = 'number',
}
