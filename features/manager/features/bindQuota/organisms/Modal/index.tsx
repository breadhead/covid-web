import { Content as QuotasListContent } from '@app/features/admin/features/quotasList'
import Form from '@app/features/common/form/components/Form'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'
import { Button } from '@front/ui/button'
import * as React from 'react'
import styles from './BindQuota.css'
import SelectQuotaType from './SelectQuotaType'

interface Props {
  onFormSubmit: (data: BindQuotaRequest) => Promise<void>
  quotaId: string
}

const QuotaType = ({ onFormSubmit, quotaId }: Props) => {
  return (
    <section className={styles.popup}>
      <h1 className={styles.title}>Выберите тип квоты</h1>

      <Form onSubmit={onFormSubmit as any} initialValues={{ quotaId }}>
        {() => (
          <>
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

            <Button submit className={styles.button}>
              Сохранить
            </Button>
          </>
        )}
      </Form>
    </section>
  )
}

export default QuotaType
