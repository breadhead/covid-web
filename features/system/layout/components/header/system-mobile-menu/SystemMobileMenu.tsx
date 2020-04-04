import React, { useState, useCallback } from 'react';

import Overlay from '@app/ui/Overlay';
import BurgerButton from '@app/features/main/layout/organisms/Header/atoms/BurgerButton';

// interface SystemMobileMenuProps {}

export const SystemMobileMenu = () => {
  const [menuOpened, setOpened] = useState(false);

  const show = useCallback(() => setOpened(true), []);
  const hide = useCallback(() => setOpened(false), []);
  return (
    <div>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <BurgerButton show={show} />
      menu t=items menu t=items menu t=items menu t=items menu t=items menu
      t=items menu t=items menu t=items menu t=items menu t=items menu t=items
      menu t=items menu t=items menu t=items menu t=items menu t=items menu
      t=items menu t=items
      {/* <Menu
        showLoginButton={showLoginButton}
        signOut={signOut}
        hide={hide}
        isVisible={menuOpened}
      /> */}
    </div>
  );
};
