import React, { useState, useCallback } from 'react';

import Overlay from '@app/src/ui/Overlay';
import BurgerButton from '@app/src/features/common/layout/organisms/Header/atoms/BurgerButton';
import { TransitionMenu } from '@app/src/features/common/layout/organisms/Header/organisms/Menu/TransitionMenu';

import { SystemNavigation } from '../navigation';

export const SystemMobileMenu = () => {
  const [menuOpened, setOpened] = useState(false);

  const show = useCallback(() => setOpened(true), []);
  const hide = useCallback(() => setOpened(false), []);
  return (
    <div>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <BurgerButton show={show} />
      <TransitionMenu isVisible={menuOpened}>
        <SystemNavigation hide={hide} />
      </TransitionMenu>
    </div>
  );
};