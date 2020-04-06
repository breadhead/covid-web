import React from 'react';

import s from './RegisterButton.css';

interface RegisterButtonProps {
  props: { webinarId: string; title: string };
}

export const RegisterButton = ({}: RegisterButtonProps) => {
  return <button>записаться на вебинар</button>;
};
