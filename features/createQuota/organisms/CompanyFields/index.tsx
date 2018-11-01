import * as React from 'react'

import Uploading from '@app/features/uploading/Uploading'
import Input from '@app/ui/molecules/Input'
import Switch from '@app/ui/molecules/Switch/Switch'
import TextArea from '@app/ui/molecules/TextАrea'
import { Field as FinalField } from 'react-final-form'

import * as styles from './CompanyFields.css'

const Company = () => {
  return (
 <React.Fragment>
      <div className={styles.Switch}>
      <Switch
        name="publicCompany"
        checkedChildren="Да"
        unCheckedChildren="Нет"
        label="Показывать жертвователя на сайте"
        defaultChecked
      />
    </div>
    <div className={styles.imageField}>
      <FinalField name="logo">
        {(fieldProps) => (
          <React.Fragment>
            <label htmlFor="logo">Загрузить логотип</label>
            <Uploading onUploaded={fieldProps.input.onChange}
          />
          </React.Fragment>
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
 </React.Fragment>
  )
}

export default Company
