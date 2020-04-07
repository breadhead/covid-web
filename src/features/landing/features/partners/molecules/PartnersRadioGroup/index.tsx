import * as React from 'react';
import cx from 'classnames';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import { Partner } from '@app/src/domain/models/common/Partner';

import { getCurrentPartnersOptions } from '../../organisms/PartnersList/config';

import '@app/src/ui/RadioGroup/ButtonStyle.css?CSSModulesDisable';

const RadioGroup = Radio.Group;

interface Props {
  partners: Partner[];
  onChange: (evt: any) => void;
  value: string;
  name: string;
  className?: string;
}

const PartnersRadioGroup = ({
  name,
  partners,
  onChange,
  value,
  className,
}: Props) => {
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
