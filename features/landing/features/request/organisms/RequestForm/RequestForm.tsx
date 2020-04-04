import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import {
  Form,
  Input,
  RadioGroup,
  InputType,
  Checkbox,
} from '@app/features/common/form';
import routes from '@app/routes';
import RegionSelect from '@app/ui/regionSelect';
import { useThunk } from '@app/src/hooks/useThunk';
import { genderRadioGroup } from '@app/src/helpers/genderRadioGroup';

import { Button, ButtonSize } from '@app/ui/button';

import * as styles from './RequestForm.css';
import { Symptoms } from './components/symptoms';
import { targetList, deseasesList } from './config';
import { saveRequestFormData } from '../../reducer/actions';
import {
  saveRequestFormDraft,
  getRequestFormDraft,
  isFormRequestFinished,
} from './localStorage';
import { schema } from './schema';

const { Router } = routes;

export const RequestForm = () => {
  const [checked, setCheked] = useState<string[]>([]);
  const [initialFields, setInitialFields] = useState<any>(null);

  const dispatch = useThunk();

  useEffect(() => {
    const draft = getRequestFormDraft();
    setInitialFields(draft);
  }, []);

  const onFormSubmit = async (data: any) => {
    await dispatch(saveRequestFormData(data));
  };

  useEffect(() => {
    const isFormFinished = isFormRequestFinished();
    if (isFormFinished) {
      Router.pushRoute('/request/chat');
    }
  }, []);

  return (
    <Form
      onSubmit={onFormSubmit as any}
      initialValues={initialFields}
      className={styles.form}
      saveDebounced={saveRequestFormDraft()}
      saveOnBlur={saveRequestFormDraft()}
    >
      {() => {
        return (
          <>
            <label htmlFor="target" className={cx(styles.label, styles.field)}>
              Для кого вы ищете информацию?
            </label>
            <RadioGroup
              validate={schema.target}
              name="target"
              buttons={targetList}
            />
            <RegionSelect
              changeField={() => null}
              validate={schema.region}
              name={`region`}
              styles={styles}
              textRegion="Регион"
              textCountry="Страна, где проходили лечение"
              textSwitch="Вы проходили лечение в России?"
            />
            <label htmlFor="gender" className={cx(styles.label, styles.field)}>
              Пол
            </label>
            <RadioGroup
              validate={schema.gender}
              name="gender"
              buttons={genderRadioGroup}
            />

            <label
              htmlFor="personalData.age"
              className={cx(styles.label, styles.field)}
            >
              Возраст (полных лет)
            </label>
            <Input
              className={styles.ageField}
              validate={schema.age}
              name="age"
              type={InputType.Number}
            />

            <Symptoms
              initialFields={!!initialFields && initialFields.symptoms}
              checked={checked}
              setCheked={setCheked}
            />

            <label
              htmlFor="deseases"
              className={cx(styles.label, styles.field)}
            >
              Сопутствующие заболевания
            </label>
            {deseasesList.map((it) => {
              return (
                <Checkbox
                  key={it.id}
                  name={`deseases.${it.id}`}
                  type="checkbox"
                  className={styles.checkbox}
                >
                  {it.value}
                </Checkbox>
              );
            })}
            <Button
              size={ButtonSize.ExtraLarge}
              className={cx(styles.button, styles.largeButton)}
              submit
            >
              Отправить
            </Button>
          </>
        );
      }}
    </Form>
  );
};
