import React from 'react';

import { Photo } from '@app/src/domain/models/sanity/Photo';
import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';

import s from './ActionBlock.css';
import {
  SerializerActionButtonProps,
  SerializerActionButton,
} from '../actionButton/SerializerActionButton';

interface ActionBlockProps {
  props: {
    image?: Photo;
    title?: string;
    text?: any;
    button?: SerializerActionButtonProps;
  };
}

export const ActionBlock = ({
  props: { image, title, text, button },
}: ActionBlockProps) => {
  const src = getImageSrc(image);

  return (
    <div>
      {src && <img className={s.image} src={src} alt={title} />}

      {title && <div className={s.title}>{title}</div>}
      {/* TODO: add text */}
      {text && <div className={s.text}>text</div>}
      {button && (
        <SerializerActionButton props={button}></SerializerActionButton>
      )}
    </div>
  );
};
