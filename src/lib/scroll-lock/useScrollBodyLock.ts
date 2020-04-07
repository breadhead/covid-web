import { isMobile } from 'is-mobile';

import { canUseDOM } from '../helpers/canUseDOM';

let ScrollTop = 0;

export const useScrollBodyLock = () => {
  const lock = () => {
    if (!canUseDOM) return;

    document.body.style.overflow = 'hidden';
    document.body.style['-webkit-overflow-scrolling'] = 'touch';

    if (isMobile()) {
      const container = document.getElementById('__next');
      if (container) {
        ScrollTop = container.scrollTop;
      }
    }
  };

  const unlock = () => {
    console.log('unlock');

    if (!canUseDOM) return;

    document.body.style.overflow = 'auto';
    document.body.style['-webkit-overflow-scrolling'] = 'auto';

    if (isMobile()) {
      const container = document.getElementById('__next');
      if (container) {
        container.scrollTop = ScrollTop;
      }
    }
  };

  return { lock, unlock };
};

export function setDocumentPropertyVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
