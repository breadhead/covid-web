import React from 'react';
import cx from 'classnames';

import offsets from '../../editorOffsets.css';
import s from './RegisterButton.css';

interface RegisterButtonProps {
  props: { webinarId: string; title: string };
}

export const RegisterButton = ({}: RegisterButtonProps) => {
  return (
    <button className={cx(s.registerButton, offsets['s-editor-action-block'])}>
      записаться на вебинар
    </button>
  );
};
