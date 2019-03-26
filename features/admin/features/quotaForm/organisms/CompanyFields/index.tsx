import * as React from 'react'

import { Input, InputType, TextArea, Toggle } from '@app/features/common/form'
import FormFileInput from '@app/features/common/uploader/FormFileInput'

import * as styles from './CompanyFields.css'

const Company = () => {
  return (
    <React.Fragment>
      <div className={styles.Switch}>
        <Toggle name="publicCompany" label="Показывать жертвователя на сайте" />
      </div>
      <FormFileInput name="companyLogo" />
      <Input
        type={InputType.Url}
        name="companyLink"
        placeholder="Ссылка на сайт жертвователя"
      />
      <TextArea
        name="companyComment"
        placeholder="Публичное пояснение возле логотипа
      (Например, «Средства на консультацию предоставлены Фондом профилактики рака»)"
        rows={3}
      />
    </React.Fragment>
  )
}

export default Company
