import { saveFormToAirtable } from '@app/features/common/airtableReducer/actions'
import { useThunk } from '@front/hooks/useThunk'
import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/features/common/form/FormConstructor';
import * as commonStyles from '@app/features/common/form/commonStyles.css';

import { ButtonSize, Button } from '@front/ui/button';

import { formConfig } from './formConfig';

export const HospitalAidForm = () => {
  const dispatch = useThunk();

  const onSubmit = async (data: any) => {
    await dispatch(saveFormToAirtable('hospital-aid', data));
  };

  return (
    <FormConstructor
      options={formConfig}
      onSubmit={onSubmit}
      saveDraft={() => {}}
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
