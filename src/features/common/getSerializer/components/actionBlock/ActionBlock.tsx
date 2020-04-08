import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

import { ActionBlock as UIActionBlock } from '@app/src/ui/actionBlock/ActionBlock';

import offsets from '../../editorOffsets.css';
import { getSimpleSerialier } from '../../getSimpleSerializer';
import s from './ActionBlock.css';

interface ActionBlockProps {
  props: {
    node: {
      title?: string;
      text?: any;
      button?: any;
    };
  };
}

export const ActionBlock = ({
  props: {
    node: { title, text, button },
  },
  props,
}: ActionBlockProps) => {
  const simpleSerializer = getSimpleSerialier({});
  return (
    <UIActionBlock
      className={offsets['s-editor-actionblock']}
      title={title}
      text={
        text && <BlockContent blocks={text} serializers={simpleSerializer} />
      }
      icon={<img className={s.bottomOffset} src="/static/images/answers.png" />}
      buttonText={button && button.text}
      href={button && button.link}
    ></UIActionBlock>
  );
};
