import { QuotaType } from '@app/models/Quota'
import Input from '@app/ui/molecules/Input'
import Select from '@app/ui/molecules/Select'
import TextArea from '@app/ui/molecules/TextАrea'
import { Button, Form as AntForm  } from 'antd'
import * as React from 'react'
import { Field as FinalField, Form as FinalForm } from 'react-final-form'

import Uploading from '@app/features/uploading/Uploading'
import * as styles from './Form.css'

const FormItem = AntForm.Item

const INVALID_CREDENTIALS_MESSAGE = 'Неверные данные'
interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
}

const QUOTA_TYPE = new Array()
for (const key in QuotaType) { //tslint:disable-line
  QUOTA_TYPE.push({title: QuotaType[key], value: key})
}

const Form = ({ onFormSubmit, error }: Props) => {
  return (
  <FinalForm
    onSubmit={onFormSubmit}
    render={(props) => (
      <AntForm
        onSubmit={props.handleSubmit}
        className={styles.Form}
        layout="vertical"
      >
        <h1 className={styles.title}>Новый тип квот</h1>
        <Input
          name="name"
          type="text"
          label="Название типа квот"
        />
        <Select
          name="category"
          label="Категория типа квот"
          defaultValue="Common"
          options={QUOTA_TYPE}
        />
        <Input
          name="companyName"
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
          name="publicCompany"
          type="checkbox"
          label="Показывать жертвователя на сайте"
        />
        <div className={styles.imageField}>
        <FinalField name="logo">
          {(fieldProps) => (
            <Uploading onUploaded={fieldProps.input.onChange} />
            )}
        </FinalField>
        </div>
        <Input
          name="companyLink"
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
  )}

export default Form
