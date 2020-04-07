import BlockContent from '@sanity/block-content-to-react';
import React from 'react';

import { Photo } from '@app/src/domain/models/sanity/Photo';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';

import { getSimpleSerialier } from '../../getSimpleSerializer';
import { SerializerActionButton } from '../actionButton/SerializerActionButton';
import s from './ActionBlock.css';

interface ActionBlockProps {
  props: {
    node: {
      image?: Photo;
      title?: string;
      text?: any;
      button?: any;
    };
  };
}

export const ActionBlock = ({
  props: {
    node: { image, title, text, button },
  },
  props,
}: ActionBlockProps) => {
  console.log('props', props);
  const src = getImageSrc(image);

  const simpleSerializer = getSimpleSerialier({});

  return (
    <div>
      {src && <img className={s.image} src={src} alt={title} />}

      {title && <div className={s.title}>{title}</div>}

      {text && (
        <div className={s.text}>
          <BlockContent blocks={text} serializers={simpleSerializer} />
        </div>
      )}
      {button && (
        <SerializerActionButton props={button}></SerializerActionButton>
      )}
    </div>
  );
};
