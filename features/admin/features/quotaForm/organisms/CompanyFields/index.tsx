import * as React from 'react'

import Input from '@app/features/common/form/Input'
import FormFileInput from '@app/features/common/uploader/FormFileInput'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextArea'

import * as styles from './CompanyFields.css'

const Company = () => {
  return (
    <React.Fragment>
      <div className={styles.Switch}>
        <Switch
          name="publicCompany"
          label="Показывать жертвователя на сайте"
          defaultChecked={false}
        />
      </div>
      <FormFileInput name="companyLogo" />
      <Input name="companyLink" placeholder="Ссылка на сайт жертвователя" />
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
