import * as React from 'react';

import { SerializerBlock } from './components/block';
import { SerializerLink } from './components/link';

interface SerializerTypesProps {
  block?: (props: any) => any;
}

interface SerializerMarksProps {
  em?: (props: any) => any;
}

interface SerializerProps {
  types?: SerializerTypesProps;
  marks?: SerializerMarksProps;
}

export const getSimpleSerialier = ({ types, marks }: SerializerProps) => {
  const serializers = {
    types: {
      block: (props: any) => {
        if (!!types && !!types.block) {
          return types.block(props);
        }

        return <SerializerBlock props={props} />;
      },
    },

    marks: {
      link: ({ children, mark }: any) => {
        const { href, options } = mark;

        const blank = !!options && options === 'blank';

        return (
          <SerializerLink href={href} blank={blank}>
            {children}
          </SerializerLink>
        );
      },
    },
  };

  return serializers;
};
