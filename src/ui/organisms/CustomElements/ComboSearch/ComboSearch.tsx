import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import {
  HintInput,
  HintInputTypes,
  ComplexOptions,
} from '@app/ui/HintInput/HintInput';
import { useApi } from '@app/src/lib/api/useApi';

export enum ComboSearchType {
  Doctor = 'Doctor',
  Clinic = 'Clinic',
}

export interface Props {
  name: string;
  type: ComboSearchType;
  defaultItems?: string[] | ComplexOptions[];
  optionsType?: HintInputTypes;
  className?: string;
  region?: string;
}

export const ComboSearch = ({
  name,
  className,
  type,
  optionsType,
  defaultItems = [],
  region = '',
  ...rest
}: Props) => {
  const [items, setItems] = useState<string[] | ComplexOptions[]>(defaultItems);
  const api = useApi();

  const onSearch = (query: string) => {
    switch (type) {
      case ComboSearchType.Doctor:
        api.searchDoctor(query).then(setItems);
        break;
      case ComboSearchType.Clinic:
        api.searchClinicByRegion(region, query).then(setItems);
        break;
      default:
        break;
    }
  };

  const delayedQuery = debounce((q: string) => onSearch(q), 1000);

  useEffect(() => {
    const value = (rest as any).value || '';

    if (value.length > 2) {
      delayedQuery(value);
    }
  }, [(rest as any).value]);

  useEffect(() => {
    setItems(defaultItems);
  }, [defaultItems[0]]);

  const options = items.length === 0 ? defaultItems : items;

  return (
    <HintInput
      name={name}
      className={className}
      options={options}
      type={optionsType}
      {...rest}
    />
  );
};
