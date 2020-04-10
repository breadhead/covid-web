import React, { useState } from 'react';
import { useMappedState } from 'redux-react-hook';
import Router from 'next/router';

import { selectPartners } from '@app/src/domain/reducers/partnerReducer/selectPartners';
import PartnerCard from '@app/src/features/landing/organisms/PartnerCard';
import { RouteType } from '@app/src/lib/routing/RouteType';

import PartnersRadioGroup from '../../molecules/PartnersRadioGroup';
import { PartnersType } from './config';
import * as styles from './PartnersList.css';
import PartnersGroupSelect from '../../molecules/PartnersGroupSelect';

interface Props {
  type?: PartnersType;
}

export const PartnersPageList = ({ type = PartnersType.All }: Props) => {
  const partners = useMappedState(selectPartners);

  const [list, setList] = useState(partners);
  const [value, setValue] = useState<PartnersType>(type);

  const onValueChange = (selectedValue: PartnersType) => {
    if (selectedValue === PartnersType.All) {
      setList(partners);
    } else {
      setList(partners.filter((partner) => partner.type === selectedValue));
    }

    setValue(selectedValue);

    Router.push(
      RouteType.landingPartners,
      { query: { type: `${selectedValue}` } },
      { shallow: true },
    );
  };

  return (
    <>
      <header className={styles.header}>
        <PartnersRadioGroup
          partners={partners}
          name="partners-radio-group"
          value={value}
          onChange={onValueChange}
          className={styles.radioGroup}
        />
        <PartnersGroupSelect
          partners={partners}
          value={value}
          onSelect={onValueChange}
          className={styles.select}
        />
      </header>
      <div className={styles.partnersPageList}>
        {list.map((partner) => (
          <PartnerCard key={partner._id} partner={partner} />
        ))}
      </div>
    </>
  );
};
