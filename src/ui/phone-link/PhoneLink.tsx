import React from 'react';

import { clearPhoneForLink } from './clearPhoneForLink';
import { preparePhoneForTypography } from './preparePhoneForTypography';

interface Props {
  children: string;
  label?: string;
}

export const PhoneLink = ({ children, label }: Props) => {
  const link = clearPhoneForLink(children);
  const text = preparePhoneForTypography(children);

  return (
    <a
      href={`tel:${link}`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
