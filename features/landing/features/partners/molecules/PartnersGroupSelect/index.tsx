import * as React from 'react';
import cx from 'classnames';
import { Select as AntSelect } from 'antd';
import { SelectValue } from 'antd/lib/select';
import { useMappedState } from 'redux-react-hook';

import { selectPartnersForPartnerPage } from '@app/features/common/partnerReducer/selectPartners';

import { getCurrentPartnersOptions } from '../../organisms/PartnersList/config';
import * as styles from './PartnersGroupSelect.css';
import './PartnersGroupSelect.css?CSSModulesDisable';

const { Option } = AntSelect;

interface Props {
  onSelect: (value: SelectValue) => void;
  value: string;
  className?: string;
}

const PartnersGroupSelect = ({ onSelect, value, className }: Props) => {
  const partners = useMappedState(selectPartnersForPartnerPage);
  const options = getCurrentPartnersOptions(partners).map((option) => ({
    label: option.label,
    value: option.type,
  }));

  const onPartnersGroupSelect = (evt: SelectValue) => {
    onSelect(evt);
  };

  return (
    <AntSelect
      id="partners-select"
      onSelect={onPartnersGroupSelect}
      className={cx(styles.select, className)}
      defaultValue={options[1].value}
      value={value}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  );
};

export default PartnersGroupSelect;
