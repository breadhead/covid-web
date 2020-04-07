import * as React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';

import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';

import s from './SerializerImage.css';
import { getSimpleSerialier } from '../../getSimpleSerializer';

interface SerializerImageProps {
  props: any;
}

export const SerializerImage = ({ props }: SerializerImageProps) => {
  const { image, text } = props.node;
  const simpleSerializer = getSimpleSerialier({});

  return (
    <div className={s.wrapper}>
      <img
        className={cx(s.image)}
        src={getImageSrc(image) as any}
        alt="Картинка"
      />

      {text && (
        <div className={s.text}>
          <BlockContent blocks={text} serializers={simpleSerializer} />
        </div>
      )}
    </div>
  );
};
