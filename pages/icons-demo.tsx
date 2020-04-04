import * as React from 'react';

import { IconsList } from '@app/src/ui/sprite';
import { Icon } from '@app/src/ui/icon';

const IconsDemo = () => {
  return (
    <div style={{ width: '100%' }}>
      {Object.values(IconsList).map((item) => (
        <div style={{ width: '400px', margin: '12px auto' }} key={item}>
          <p>{item}</p>
          <Icon name={item} />
        </div>
      ))}
    </div>
  );
};

export default IconsDemo;
