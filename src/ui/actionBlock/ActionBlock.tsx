import React from 'react';

import s from './ActionBlock.css';
import { Button, ButtonSize } from '../button';

interface ActionBlockProps {
  title?: string;
  text?: string;
  icon?: React.ReactNode;
  buttonText: string;
  action: () => void;
}

export const ActionBlock = ({
  title,
  text,
  icon,
  buttonText,
  action,
}: ActionBlockProps) => {
  return (
    <div className={s.wrapper}>
      {title && <div className={s.title}>{title}</div>}
      {text && <div className={s.text}>{text}</div>}

      <Button className={s.button} size={ButtonSize.ExtraLarge} submit>
        {buttonText}
      </Button>

      <div className={s.iconWrapper}>{icon}</div>
    </div>
  );
};
