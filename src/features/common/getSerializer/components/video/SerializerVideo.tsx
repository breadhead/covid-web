import * as React from 'react';
import getYouTubeId from 'get-youtube-id';
import cx from 'classnames';

import offsets from '../../editorOffsets.css';
import s from './SerializerVideo.css';

interface SerializerVideoProps {
  props: any;
}

export const SerializerVideo = ({ props }: SerializerVideoProps) => {
  const { url } = props.node;

  const id = getYouTubeId(url);
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <iframe
      className={cx(
        s.video,
        offsets.imageSideOffset,
        offsets['s-editor-customimage'],
      )}
      title="YouyTube preview"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
