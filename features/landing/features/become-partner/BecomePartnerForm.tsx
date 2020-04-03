import React from 'react';
import cx from 'classnames';

import { saveFormToAirtable } from '@app/features/common/airtableReducer/actions';
import { FormConstructor } from '@app/features/common/form/FormConstructor';
import * as commonStyles from '@app/features/common/form/commonStyles.css';

import { useThunk } from '@front/hooks/useThunk';
import { ButtonSize, Button } from '@front/ui/button';

import { formConfig } from './formConfig';

interface Props {
  theme?: string;
}

export const BecomePartnerForm = ({ theme }: Props) => {
  const dispatch = useThunk();

  const onSubmit = async (data: any) => {
    await dispatch(saveFormToAirtable('partner', data));
  };

  return (
    <FormConstructor
      options={formConfig}
      onSubmit={onSubmit}
      initialValues={{ theme }}
    >
      <Button
        size={ButtonSize.ExtraLarge}
        className={cx(commonStyles.button, commonStyles.largeButton)}
        submit
      >
        Отправить
      </Button>
    </FormConstructor>
  );
};
