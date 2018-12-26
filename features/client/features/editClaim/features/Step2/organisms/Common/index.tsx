import * as React from 'react'

import {
  EmergingControlTypes,
  EmergingFormElement,
  TextArea,
} from '@app/features/common/form'

import { StylesType } from '@app/lib/config'
import { schema } from './schema'

interface Props {
  styles: StylesType
}

const Common = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общая информация</h2>
    <p className={styles.label}>Есть ли у вас хронические заболевания?</p>
    <EmergingFormElement
      name="diseasePresence"
      validate={schema.diseasePresence}
      className={styles.emergeField}
      controlType={EmergingControlTypes.Radiogroup}
    >
      <TextArea
        validate={schema.disease}
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
      validate={schema.medicationPresence}
    >
      <TextArea
        label="Какие лекарства вы принимаете в данный момент?"
        name="medication"
        validate={schema.medication}
      />
    </EmergingFormElement>
    <p className={styles.label}>
      Болел ли кто-то из ваших родственников онкологическими заболеваниями?
    </p>
    <EmergingFormElement
      name="relativesPresence"
      className={styles.emergeField}
      controlType={EmergingControlTypes.Radiogroup}
      validate={schema.relativesPresence}
    >
      <TextArea
        label="Расскажите кем вам приходится этот родственник и какие у него онкологическое заболевание"
        name="relative"
        validate={schema.relative}
      />
    </EmergingFormElement>
  </article>
)

export default Common
