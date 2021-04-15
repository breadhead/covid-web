import React, { useMemo } from 'react';
import { Omit } from 'utility-types';

type Props = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'ref'
>;

const ServerImage = ({ src, ...rest }: Props) => {
  const path = useMemo(
    () => (src && src.startsWith('http') ? src : `//${src}`),
    [src],
  );

  return <img loading="lazy" src={path} {...rest} />;
};

export default ServerImage;
