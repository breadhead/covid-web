import * as React from 'react';

import { NON_BREAKING_SPACE, NON_BREAKING_HYPHEN } from '@app/src/lib/config';
import { NavLink } from '@app/src/ui/nav-link';
import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './SystemHero.css';
import { NavCards } from './components/nav-cards';
import PartnersList
  from "@front/features/landing/features/home/organisms/Corporate/components/Partners/components/PartnersList";
import TrustPartners
  from "@front/features/landing/features/home/organisms/Corporate/components/Partners/components/TrustPartners";

export const SystemHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Движение{NON_BREAKING_SPACE}против COVID{NON_BREAKING_HYPHEN}19
      </h1>

      <TrustPartners />
     

      <NavCards />
    </section>
  );
};
