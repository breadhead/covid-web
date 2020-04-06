import React from 'react';

import s from './SmallText.css';

interface SmallTextProps {
  props: { text: string };
}

export const SmallText = ({ props: { text } }: SmallTextProps) => {
  return <span>{text}</span>;
};
