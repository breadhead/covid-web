import Input from '@app/ui/molecules/Input'
import TextArea from '@app/ui/molecules/TextАrea'
import { Button, Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import * as styles from './Form.css'

const FormItem = AntForm.Item

const INVALID_CREDENTIALS_MESSAGE = 'Неверные данные'
interface Props {
  onFormSubmit: () => Promise<any>,
  error: boolean | string
}

const onSubmit = (evt: any) => {
  evt.stopPropagation()
  evt.preventDefault()
  console.log(evt.target)
}

const Form = ({ onFormSubmit, error }: Props) => (
  <FinalForm
    onSubmit={onSubmit}
    render={(props) => (
      <AntForm
        // onSubmit={props.handleSubmit}
        onSubmit={onSubmit}
        className={styles.Form}
        layout="vertical"
      >
        <h1 className={styles.title}>Новый тип квот</h1>
        <Input
          name="name"
          type="text"
          label="Название типа квот"
        />
        <Input // нужно сделать селект
          name="categiry"
          type="text"
          label="Категория типа квот"
        />
        <Input
          name="donor"
          type="text"
          label="Жертвователь"
        />
        <TextArea
          name="comment"
          label="Комментарий к типу квот"
        />
        <Input
          name="count"
          type="text"
          label="Количество квот"
        />
        <Input
          name="show-donor"
          type="checkbox"
          label="Показывать жертвователя на сайте"
        />

        <Input
          name="logotype"
          type="file"
          label="Загрузить логотип"
        />
        <Input
          name="donor-site"
          type="text"
          placeholder="Ссылка на сайт жертвователя"
        />
        <TextArea
          name="logotype-comment"
          placeholder="Публичное пояснение возле логотипа
          (Например, «Средства на консультацию предоставлены Фондом профилактики рака»)"
          rows={3}
        />
        <FormItem validateStatus={error ? 'error' : undefined}
          help={error && INVALID_CREDENTIALS_MESSAGE}  >
          <Button
            type="primary"
            htmlType="submit"
          >
            Создать
            </Button>
        </FormItem>
      </AntForm>
    )}
  />
)
export default Form
