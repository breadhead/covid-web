import * as React from 'react'
import { Button, ButtonSize } from '@app/src/ui/button'
import Input from '@app/ui/Input'
import * as s from './ClientStory.css'
import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import { useState, useCallback } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { StoryEnum } from '@app/models/Story/StoryEnum'

export interface ClientStoryProps {
  claimId: string
  phone: string
}

export const ClientStory: React.SFC<ClientStoryProps> = ({
  claimId,
  phone,
}) => {
  const [value, setValue] = useState(phone)
  const [sended, setSended] = useState(false)

  const api = useApi()

  const updateInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [],
  )

  const submit = async () => {
    await api.addStoryPhone({ claimId, phone: value, status: StoryEnum.New })
    setSended(true)
  }

  return (
    <div className={s.container}>
      {!sended ? (
        <>
          <p className={s.text}>
            Мы будем благодарны, если вы{NON_BREAKING_SPACE}поделитесь своей
            историей с{NON_BREAKING_SPACE}донорами и{NON_BREAKING_SPACE}
            подписчиками Фонда.{SPACE}
            Это поможет людям лучше понять, как работает проект, и
            {NON_BREAKING_SPACE}поддержать его развитие.
          </p>
          <p className={s.text}>
            Нажмите «Хочу поделиться историей» и{NON_BREAKING_SPACE}с
            {NON_BREAKING_SPACE}вами свяжется сотрудник Фонда для краткого
            интервью.
          </p>
          <Input
            onChange={updateInputValue}
            value={value}
            className={s.input}
            label="Контактый номер телефона"
            name="story-number"
          />
          <br />
          <Button
            onClick={submit}
            className={s.button}
            size={ButtonSize.ExtraLarge}
          >
            Хочу поделиться историей
          </Button>
        </>
      ) : (
        <p className={s.button}>
          Спасибо! С{NON_BREAKING_SPACE}вами свяжется сотрудник Фонда для
          краткого интервью.
        </p>
      )}
    </div>
  )
}