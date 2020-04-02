import React from 'react';
import { head } from 'lodash';

import { DateInterface } from '@app/lib/helpers/validateDates';

import ValidationTooltip from '../ValidationTooltip';
import { validationCb } from './validationCb';

interface Props {
  paths: DateInterface[];
}

const DateValidationTooltip = ({ paths }: Props) => (
  <ValidationTooltip
    name={`${head(paths)}.dateError`}
    validateOnBlur={false}
    validateCb={validationCb(paths)}
  />
);

export default DateValidationTooltip;
