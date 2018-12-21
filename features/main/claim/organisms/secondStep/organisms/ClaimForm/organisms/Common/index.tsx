import * as React from 'react'

import TextArea from '@app/ui/atoms/TextArea'
import EmergingFormElement, {
  ControlTypes,
} from '@app/ui/organisms/EmergingFormElement'

interface Props {
  styles: any
}

const Common = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общая информация</h2>
    <p className={styles.label}>Есть ли у вас хронические заболевания?</p>
    <EmergingFormElement
      className={styles.emergeField}
      controlType={ControlTypes.Radiogroup}
    >
      <TextArea label="Какие у вас хронические заболевания?" name="disease" />
    </EmergingFormElement>
    <p className={styles.label}>
      Вы принимаете какие-нибудь лекарства на данный момент?
    </p>
    <EmergingFormElement
      className={styles.emergeField}
      controlType={ControlTypes.Radiogroup}
    >
      <TextArea
        label="Какие лекарства вы принимаете в данный момент?"
        name="medication"
      />
    </EmergingFormElement>
    <p className={styles.label}>
      Болел ли кто-то из ваших родственников онкологическими заболеваниями?
    </p>
    <EmergingFormElement
      className={styles.emergeField}
      controlType={ControlTypes.Radiogroup}
    >
      <TextArea
        label="Расскажите кем вам приходится этот родственник и какие у него онкологическое заболевание"
        name="relative"
      />
    </EmergingFormElement>
  </article>
)

export default Common
