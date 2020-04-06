import * as React from 'react';
import cx from 'classnames';

import s from './SerializerList.css';
import { SerializerLink } from '../link';

interface SerializerListItemProps {
  props: any;
}

export const SerializerListItemComponent = ({
  props,
}: SerializerListItemProps) => {
  const isLink = !!props.href;

  return isLink ? (
    <span className={cx(s.itemWithIconWrap)}>
      <SerializerLink href={props.href} blank={!!props.blank}>
        {props}
      </SerializerLink>
    </span>
  ) : (
    <span className={cx(s['list-item'], s.itemWithIconWrap)}>
      <li>{props}</li>
    </span>
  );
};

export const SerializerListItem = SerializerListItemComponent;
