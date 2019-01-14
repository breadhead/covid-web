import { Content as QuotasListContent } from '@app/features/admin/features/quotasList'
import Form from '@app/features/common/form/components/Form'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import * as React from 'react'
import styles from './BindQuota.css'
import SelectQuotaType from './SelectQuotaType'

interface Props {
  onFormSubmit: (data: BindQuotaRequest) => Promise<void>
}

const QuotaType = ({ onFormSubmit }: Props) => {
  return (
    <section className={styles.popup}>
      <h1 className={styles.title}>Выберите тип квоты</h1>

      <Form onSubmit={onFormSubmit as any}>
        <QuotasListContent
          search={false}
          sorting={false}
          list={{
            component: SelectQuotaType,
            props: {
              className: styles.field,
              name: 'quotaId',
            },
          }}
        />

        <Button type={ButtonType.Submit} className={styles.button}>
          Сохранить
        </Button>
      </Form>
    </section>
  )
}

export default QuotaType
