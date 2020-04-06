import * as React from 'react';
import cx from 'classnames';

import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';

import s from './SerializerImage.css';

interface SerializerImageProps {
  props: any;
}

export const SerializerImage = ({ props }: SerializerImageProps) => {
  const { image, text } = props.node;

  return (
    <div className={s.wrapper}>
      <img
        className={cx(s.image)}
        src={getImageSrc(image) as any}
        alt="Картинка"
      />

      {/* TODO: add text */}
      {text && <div className={s.text}>text</div>}
    </div>
  );
};
