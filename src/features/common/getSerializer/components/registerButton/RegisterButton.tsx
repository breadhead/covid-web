import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import cx from 'classnames';

import { ActionBlock as UIActionBlock } from '@app/src/ui/actionBlock/ActionBlock';

import offsets from '../../editorOffsets.css';
import s from './RegisterButton.css';
import { getSimpleSerialier } from '../../getSimpleSerializer';

interface RegisterButtonProps {
  props: { node: { webinarId: string; title?: string; text?: any } };
}

export const RegisterButton = ({
  props: {
    node: { webinarId, title, text },
  },
}: RegisterButtonProps) => {
  const simpleSerializer = getSimpleSerialier({});
  return (
    <UIActionBlock
      className={offsets['s-editor-actionblock']}
      title={title}
      text={
        text && <BlockContent blocks={text} serializers={simpleSerializer} />
      }
      icon={<img loading="lazy" className={s.bottomOffset} src="/static/images/answers.png" />}
      buttonText="Записаться на вебинар"
      action={() => {
        console.log(webinarId);
      }}
    ></UIActionBlock>
  );
};
