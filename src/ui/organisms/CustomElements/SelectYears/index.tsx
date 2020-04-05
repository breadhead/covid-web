import * as React from 'react';

import Select from '@app/src/ui/Select';

import {getYears} from './years';

export interface Props {
  name: string;
  isMobile?: boolean;
  className?: string;
  placeholder?: string;
}

const YEARS_AMOUNT = 70;
const years = getYears(YEARS_AMOUNT);

const SelectYears = ({
  isMobile,
  className,
  name,
  placeholder,
  ...rest
}: Props) => (
  <Select
    placeholder={isMobile ? 'Год' : 'Выберите год'}
    options={years}
    name={name}
    {...rest}
    className={className}
  />
);

export default SelectYears;
