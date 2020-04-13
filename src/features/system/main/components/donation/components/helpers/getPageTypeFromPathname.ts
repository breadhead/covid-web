import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

const mapRouteToPageType = {
  landing: PageType.Ask,
};

export const getPageTypeFromRoute = (route: string) => {
  if (!route) {
    return PageType.Ask;
  }

  return mapRouteToPageType[route.replace('/', '')];
};
