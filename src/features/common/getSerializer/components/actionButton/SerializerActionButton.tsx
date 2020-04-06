import * as React from 'react';

export interface SerializerActionButtonProps {
  props: any;
}

export const SerializerActionButton = ({
  props,
}: SerializerActionButtonProps) => {
  return <button {...props.node} />;
};
