import * as React from 'react';

import PartnersList
    from '@app/src/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList';

import {PageType} from '@front/features/landing/features/partners/organisms/PartnersList/config';

interface PartnersProps {}

export const Partners = ({}: PartnersProps) => {
  return (
    <div>
      <h2 className="gl-sectionTitle">Партнеры</h2>
      <PartnersList pageType={PageType.Hospitals} />
    </div>
  );
};
