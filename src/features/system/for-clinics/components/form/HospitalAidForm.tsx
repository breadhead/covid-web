import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { ButtonSize, Button } from '@app/src/ui/button';

import { formConfig } from './formConfig';

export const HospitalAidForm = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormConstructor
      options={formConfig}
      onSubmit={onSubmit}
      saveDraft={console.log}
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
