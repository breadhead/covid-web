import * as React from 'react';
import { Button, ButtonSize } from '@app/src/ui/button';
import Input from '@app/ui/Input';
import * as s from './ClientStory.css'
import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config';
export interface ClientStoryProps {

}

export const ClientStory: React.SFC<ClientStoryProps> = () => {
  return <div className={s.container}>
    <p className={s.text}>
      Мы будем благодарны, если вы{NON_BREAKING_SPACE}поделитесь своей историей с{NON_BREAKING_SPACE}донорами и{NON_BREAKING_SPACE}подписчиками Фонда.{SPACE}
      Это поможет людям лучше понять, как работает проект, и{NON_BREAKING_SPACE}поддержать его развитие.</p>
    <p className={s.text}>Нажмите «Хочу поделиться историей» и{NON_BREAKING_SPACE}с{NON_BREAKING_SPACE}вами свяжется сотрудник Фонда для краткого интервью.
    </p>
    <Input className={s.input} label="Контактый номер телефона" name="story-number" />
    <br />
    <Button className={s.button} size={ButtonSize.ExtraLarge}>Хочу поделиться историей</Button>
  </div>
}

