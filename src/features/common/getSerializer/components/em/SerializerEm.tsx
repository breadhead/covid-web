import * as React from 'react';

interface SerializerEmProps {
  props: any;
}

export const SerializerEm = ({ props }: SerializerEmProps) => {
  return <p>{props.children}</p>;
};
