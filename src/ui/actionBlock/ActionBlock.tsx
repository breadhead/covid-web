import React from 'react';
import cx from 'classnames';

import { pushRoute } from '@app/src/lib/routing/pushRoute';

import s from './ActionBlock.css';
import { Button, ButtonSize } from '../button';

interface ActionBlockProps {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  buttonText: string;
  action?: () => void;
  href?: string;
  className?: string;
}

export const ActionBlock = ({
  title,
  text,
  icon,
  buttonText,
  action,
  href,
  className,
}: ActionBlockProps) => {
  return (
    <div className={cx(s.wrapper, className)}>
      {title && <div className={s.title}>{title}</div>}
      {text && <div className={s.text}>{text}</div>}

      <Button
        onClick={() => {
          if (action) {
            action();
          } else if (href) {
            pushRoute(href);
          }
        }}
        className={s.button}
        size={ButtonSize.Medium}
      >
        {buttonText}
      </Button>

      {icon && <div className={s.iconWrapper}>{icon}</div>}
    </div>
  );
};
