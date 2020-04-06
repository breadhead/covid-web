import { SelectValue } from 'antd/lib/select';
import React, { useState } from 'react';
import { useMappedState } from 'redux-react-hook';

import { selectPartners } from '@app/src/domain/reducers/partnerReducer/selectPartners';
import PartnerCard from '@app/src/features/landing/organisms/PartnerCard';
import routes from '@app/routes';

import PartnersGroupSelect from '../../molecules/PartnersGroupSelect';
import PartnersRadioGroup from '../../molecules/PartnersRadioGroup';
import { PartnersType } from './config';
import * as styles from './PartnersList.css';

const { Router } = routes;

interface Props {
  type?: string;
}

const DEFAULT_VALUE = PartnersType.InfrastructurePartner;

const PartnersList = ({ type = DEFAULT_VALUE }: Props) => {
  const partners = useMappedState(selectPartners).filter(
    (partner) => partner.type === type,
  );

  const [list, setList] = useState(partners);
  const [value, setValue] = useState<string>(type);

  const onValueChange = (value: string | SelectValue) => {
    setList(partners.filter((partner) => partner.type === value));
    setValue(value as string);
    console.log('value change');
    Router.pushRoute(`/partners?${value}`);
  };

  return (
    <>
      <header className={styles.header}>
        <PartnersRadioGroup
          name="partners-radio-group"
          value={value}
          onChange={onValueChange}
          className={styles.radioGroup}
        />
        <PartnersGroupSelect
          value={value}
          onSelect={onValueChange}
          className={styles.select}
        />
      </header>
      <div className={styles.partnersList}>
        {list.map((partner) => (
          <PartnerCard
            key={partner._id}
            partner={partner}
            className={styles.partnerCard}
          />
        ))}
      </div>
    </>
  );
};

export default PartnersList;
