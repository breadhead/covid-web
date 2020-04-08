import BlockContent from '@sanity/block-content-to-react';
import cx from 'classnames';
import React from 'react';

import { Photo } from '@app/src/domain/models/sanity/Photo';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { ActionBlock as UIActionBlock } from '@app/src/ui/actionBlock/ActionBlock';

import { getSimpleSerialier } from '../../getSimpleSerializer';
import { SerializerActionButton } from '../actionButton/SerializerActionButton';
import s from './ActionBlock.css';
import offsets from '../../editorOffsets.css';

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
