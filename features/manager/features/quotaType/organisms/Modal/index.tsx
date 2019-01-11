import { Content as QuotasListContent } from '@app/features/admin/features/quotasList'
import { getQuotas } from '@app/features/admin/features/quotasList/selectors'
import { Select } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import { State } from '@app/lib/store'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import hash from 'object-hash'
import * as React from 'react'
import { connect } from 'react-redux'
import styles from './QuotaType.css'

// TODO: fix types
const SelectQuotaType = ({ quotas = [{}], ...rest }: any) => {
  const mappedQuotas = quotas.map((quota: any) => ({
    key: quota.id,
    label: quota.name,
  }))
  return <Select key={hash(quotas)} {...rest} options={mappedQuotas} />
}

const QuotaType = () => {
  return (
    <section className={styles.popup}>
      <h1 className={styles.title}>Выберите тип квоты</h1>

      <Form onSubmit={() => undefined}>
        <QuotasListContent
          search={false}
          sorting={false}
          list={{
            component: SelectQuotaType,
            props: {
              className: styles.field,
              name: 'target',
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

const mapState = (state: State) => ({
  quotas: getQuotas(state),
})

export default connect(mapState)(QuotaType)
