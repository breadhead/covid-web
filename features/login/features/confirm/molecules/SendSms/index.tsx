import React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button from '@app/ui/atoms/Button'
import Icon, { IconColor, IconType } from '@app/ui/atoms/Icon'
import Input, { InputType } from '@app/ui/atoms/Input'

import * as styles from './SendSms.css'

const SendSms = () => (
  <>
    <Input
      name="number"
      type={InputType.Number}
      label="Номер вашего телефона"
      defaultValue="+7"
      wrapperClassName={styles.inputWrapper}
      required
    />
    <div className={styles.blockGettingCode}>
      <Button>Получить код</Button>
      <p className={styles.messageCodeSent} hidden={false}>
        <Icon type={IconType.CheckCircle} color={IconColor.Success} />
        {NON_BREAKING_SPACE}Код отправлен
      </p>
    </div>
  </>
)

export default SendSms
