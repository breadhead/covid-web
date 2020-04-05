import { canUseDOM } from '@app/src/lib/helpers/canUseDOM';

interface Window {
  [key: string]: {
    push: (name?: string) => void;
  };
}

export const GTM_ID = 'GTM-MJ3WR2P';
export const YANDEX_METRIKA_ID = '52214086';

export const DATA_LAYER_NAME = 'dataLayer';
export const dataLayer =
  canUseDOM && ((window as unknown) as Window)[DATA_LAYER_NAME];

export const hitYM = (url: string) => {
  ym(YANDEX_METRIKA_ID, 'hit', `https://ask.nenaprasno.ru/${url}`);
};
