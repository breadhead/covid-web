import * as React from 'react'
import * as styles from './ClaimForm.css'
import './ClaimForm.css'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'
import Button from '@app/ui/molecules/Button'
import Input from '@app/ui/molecules/Input'
import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const statementRadioGroup = [
  { id: '1', value: 'Да' },
  { id: '2', value: 'Нет' },
]

const genderRadioGroup = [
  { id: '1', value: 'Мужской' },
  { id: '2', value: 'Женский' },
]

const ClaimForm = () => {
  return (
    <section className={styles.ClaimForm}>
      <FinalForm
        onSubmit={() => undefined}
        render={() => (
          <AntForm>
            <article className={styles.article}>
              <h2 className={styles.title}>Кратко о теме консультации</h2>
              <p className={styles.label}>Для кого эта консультация</p>
              <select name="1" id="1">Выберите консультируемого</select>
              <p className={styles.label}>Тема вашего вопроса</p>
              <select name="2" id="2">Выберите тему</select>
              <p className={styles.label}>У вас есть установленный врачом онкологический диагноз?</p>
              <RadioGroup name="bool" type="bool" buttons={statementRadioGroup} />
              <p className={styles.label}>
                Вы консультируетесь по корпоративной программе от своего работодателя?{NON_BREAKING_SPACE}
              <NavLink href="#">Узнать больше о программе</NavLink>
              </p>
              <Switch name="corp" />
            </article>

            <article className={styles.article}>
              <h2 className={styles.title}>Контактные данные</h2>
              <p className={styles.label}>Как к вам обращаться?
                <span className={styles.sectondaryText}> Вы можете не указывать свою фамилию, если не хотите</span>
              </p>
              <Input name="name" type="text" />
              <p className={styles.label}>Регион вашего проживания</p>
              <select name="3" id="3">Выберите регион</select>
              <p className={styles.label}>Возраст (полных лет)</p>
              <Input name="age" type="number" />
              <p className={styles.label}>Пол</p>
              <RadioGroup name="bool" type="bool" buttons={genderRadioGroup} />
              <p className={styles.label}>Электронная почта.
                <span className={styles.sectondaryText}> Будем присылать вам уведомления о ходе консультации.</span>
              </p>
              <Input name="email" type="email" placeholder="konstantinopolsky@gmail.com" />
              <p className={styles.label}>Контактный телефон.
              <span className={styles.sectondaryText}>
                  Необязательно, но так нам будет проще и быстрее связаться с вами.
              </span>
              </p>
              <Input name="tel" type="tel" placeholder="+7" />
            </article>

            <article className={styles.article}>
              <Button size="l" type="submit" className={styles.button}>Продолжить</Button>
            </article>
          </AntForm>
        )}
      />
    </section>
  )
}

export default ClaimForm
