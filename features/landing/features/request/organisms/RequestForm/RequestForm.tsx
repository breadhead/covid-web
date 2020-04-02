import {
  FormComponentType,
  FormConstructor,
} from '@app/features/common/form/FormConstructor'
import React, { useState, useEffect } from 'react'
import {
  Form,
  Input,
  RadioGroup,
  InputType,
  Checkbox,
} from '@app/features/common/form'
import * as styles from './RequestForm.css'
import routes from '@app/routes'

import cx from 'classnames'
import { Button, ButtonSize } from '@front/ui/button'
import { genderRadioGroup } from '@app/features/common/claim/features/newClaim/organisms/Patient/genderRadioGroup'
import RegionSelect from '@app/features/client/features/regionSelect'
import { Symptoms } from './components/symptoms'
import { targetList, deseasesList } from './config'

import { saveRequestFormData } from '../../reducer/actions'
import { useThunk } from '@app/src/hooks/useThunk'
import {
  saveRequestFormDraft,
  getRequestFormDraft,
  isFormRequestFinished,
} from './localStorage'
import { schema } from './schema'

const { Router } = routes

export const RequestForm = () => {
  const [checked, setCheked] = useState<string[]>([])
  const [initialFields, setInitialFields] = useState<any>(null)

  const dispatch = useThunk()

  useEffect(() => {
    const draft = getRequestFormDraft()
    setInitialFields(draft)
  }, [])

  const onFormSubmit = async (data: any) => {
    await dispatch(saveRequestFormData(data))
  }

  useEffect(() => {
    const isFormFinished = isFormRequestFinished()
    if (isFormFinished) {
      Router.pushRoute('/request/chat')
    }
  }, [])

  const formConfig = {
    steps: [
      {
        type: FormComponentType.RadioGroup,
        label: {
          text: 'Для кого вы ищете информацию?',
          props: {
            className: cx(styles.label, styles.field),
          },
        },
        props: {
          validate: schema.target,
          name: 'target',
          buttons: targetList,
        },
      },
      {
        type: FormComponentType.RegionSelect,
        props: {
          changeField: () => null,
          validate: schema.region,
          name: 'name',
          styles: styles,
          textRegion: 'Регион',
          textCountry: 'Страна, где проходили лечение',
          textSwitch: 'Вы проходили лечение в России?',
        },
      },
      {
        type: FormComponentType.RadioGroup,
        label: {
          text: 'Пол',
          props: {
            className: cx(styles.label, styles.field),
          },
        },
        props: {
          validate: schema.gender,
          name: 'gender',
          buttons: genderRadioGroup,
        },
      },
      {
        type: FormComponentType.Input,
        label: {
          text: 'Возраст (полных лет)',
          props: {
            className: cx(styles.label, styles.field),
          },
        },
        props: {
          className: styles.ageField,
          validate: schema.age,
          name: 'age',
          type: InputType.Number,
        },
      },
    ],
  }

  return (
    <div>
      <FormConstructor
        options={formConfig}
        onSubmit={onFormSubmit}
        saveDraft={saveRequestFormDraft()}
      >
        <Symptoms
          initialFields={!!initialFields && initialFields.symptoms}
          checked={checked}
          setCheked={setCheked}
        />

        <label htmlFor="deseases" className={cx(styles.label, styles.field)}>
          Сопутствующие заболевания
        </label>
        {deseasesList.map(it => {
          return (
            <Checkbox
              key={it.id}
              name={`deseases.${it.id}`}
              type="checkbox"
              className={styles.checkbox}
            >
              {it.value}
            </Checkbox>
          )
        })}
        <Button
          size={ButtonSize.ExtraLarge}
          className={cx(styles.button, styles.largeButton)}
          submit
        >
          Отправить
        </Button>
      </FormConstructor>
    </div>
  )
}
