import * as React from 'react'

import {
  EmergingControlTypes,
  EmergingFormElement,
  TextArea,
} from '@app/features/common/form'
import { Validator } from '@app/features/common/formHOCs/withFinalForm'
import { StylesType } from '@app/lib/config'
import { schema } from './schema'

interface Props {
  styles: StylesType
  validator: Validator
}

const Common = ({ styles, validator }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общая информация</h2>
    <p className={styles.label}>Есть ли у вас хронические заболевания?</p>
    <EmergingFormElement
      name="diseasePresence"
      validate={(value: boolean) => validator(value, schema.diseasePresence)}
      className={styles.emergeField}
      controlType={EmergingControlTypes.Radiogroup}
    >
      <TextArea
        validate={(value: string) => validator(value, schema.disease)}
        label="Какие у вас хронические заболевания?"
        name="disease"
      />
    </EmergingFormElement>
    <p className={styles.label}>
      Вы принимаете какие-нибудь лекарства на данный момент?
    </p>
    <EmergingFormElement
      name="medicationPresence"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Radiogroup}
      validate={(value: boolean) => validator(value, schema.medicationPresence)}
    >
      <TextArea
        label="Какие лекарства вы принимаете в данный момент?"
        name="medication"
        validate={(value: boolean) => validator(value, schema.medication)}
      />
    </EmergingFormElement>
    <p className={styles.label}>
      Болел ли кто-то из ваших родственников онкологическими заболеваниями?
    </p>
    <EmergingFormElement
      name="relativesPresence"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Radiogroup}
      validate={(value: boolean) => validator(value, schema.relativesPresence)}
    >
      <TextArea
        label="Расскажите кем вам приходится этот родственник и какие у него онкологическое заболевание"
        name="relative"
        validate={(value: boolean) => validator(value, schema.relative)}
      />
    </EmergingFormElement>
  </article>
)

export default Common
