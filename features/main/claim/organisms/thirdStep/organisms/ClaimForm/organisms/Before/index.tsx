import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const Before = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Перед лечением</h2>
    <Checkbox className={styles.checkbox} name="before-target">
      <span className={styles.checkboxLabel}>Какая цель данного лечения?</span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-ready">
      <span className={styles.checkboxLabel}>
        Что необходимо сделать, чтобы быть готовым к лечению?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-period">
      <span className={styles.checkboxLabel}>
        Как долго будет проходить лечение?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-sideeffects">
      <span className={styles.checkboxLabel}>
        Какие риски и побочные эффекты данного лечения? <br />
        Есть ли возможность их снизить?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-everydaylife">
      <span className={styles.checkboxLabel}>
        Как данное лечение может отразиться на повседневной жизни?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-chance">
      <span className={styles.checkboxLabel}>
        Каковы шансы, что опухоль может вернуться (рецидив) при данном типе
        лечения?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-noeffect">
      <span className={styles.checkboxLabel}>
        Что делать, если лечение не даст эффекта или возникнет рецидив?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-children">
      <span className={styles.checkboxLabel}>
        Смогу ли я иметь детей после данного лечения? <br />
        Смогу ли я заниматься сексом после этого лечения?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-futurechildren">
      <span className={styles.checkboxLabel}>
        Что необходимо сделать, если я хочу иметь детей в будущем?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-symptoms">
      <span className={styles.checkboxLabel}>
        О каких симптомах или побочных эффектах мне нужно знать прямо сейчас?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-restrictions">
      <span className={styles.checkboxLabel}>
        Какие существуют ограничения в обыденной жизни?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="before-diet">
      <span className={styles.checkboxLabel}>
        Необходимо ли изменить свой рацион питания?
      </span>
    </Checkbox>
  </article>
)

export default Before
