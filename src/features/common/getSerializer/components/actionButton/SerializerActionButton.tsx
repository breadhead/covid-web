import * as React from 'react';

import { Button, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';

import { LinkOptionsType } from '../../config';

export interface SerializerActionButtonProps {
  props: {
    link?: string;
    options?: LinkOptionsType;
    text?: string;
  };
}

export const SerializerActionButton = ({
  props: { link, options, text },
}: SerializerActionButtonProps) => {
  return (
    <NavLink href={link || ''}>
      <Button size={ButtonSize.Medium}>{text}</Button>
    </NavLink>
  );
};
