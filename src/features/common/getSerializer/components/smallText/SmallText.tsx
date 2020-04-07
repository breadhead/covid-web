import React from 'react';
import cx from 'classnames';

import offsets from '../../editorOffsets.css';
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
  return (
    <span className={cx(s.smallText, offsets['s-editor-smalltext'])}>
      {text}
    </span>
  );
};
