import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/features/common/form/FormConstructor';
import * as commonStyles from '@app/features/common/form/commonStyles.css';

import { ButtonSize, Button } from '@front/ui/button';

import { formConfig } from './formConfig';

interface Props {
  theme?: string
}

export const BecomePartnerForm = ({ theme }: Props) => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormConstructor
      options={formConfig}
      onSubmit={onSubmit}
      saveDraft={() => {}}
      initialValues={ ({ theme }) }
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
