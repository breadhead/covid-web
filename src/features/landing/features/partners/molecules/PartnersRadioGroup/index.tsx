import * as React from 'react';
import cx from 'classnames';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { useMappedState } from 'redux-react-hook';

import { selectPartnersForPartnerPage } from '@app/src/features/common/partnerReducer/selectPartners';

import { getCurrentPartnersOptions } from '../../organisms/PartnersList/config';
import '@app/ui/RadioGroup/ButtonStyle.css?CSSModulesDisable';

const RadioGroup = Radio.Group;

interface Props {
  onChange: (evt: string) => void;
  value: string;
  name: string;
  className?: string;
}

const PartnersRadioGroup = ({ name, onChange, value, className }: Props) => {
  const partners = useMappedState(selectPartnersForPartnerPage);
  const options = getCurrentPartnersOptions(partners).map((option) => ({
    label: option.label,
    value: option.type,
  }));

  const onRadioButtonChange = (evt: RadioChangeEvent) => {
    onChange(evt.target.value);
  };

  return (
    <div className={cx('radioButtonStyle__Button', className)}>
      <RadioGroup
        name={name}
        options={options}
        onChange={onRadioButtonChange}
        value={value}
      />
    </div>
  );
};

export default PartnersRadioGroup;
