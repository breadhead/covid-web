import React from 'react';

import s from './SmallText.css';

interface SmallTextProps {
  props: { node: { text: string } };
}

export const SmallText = ({
  props: {
    node: { text },
  },
  props,
}: SmallTextProps) => {
  return <span className={s.smallText}>{text}</span>;
};
