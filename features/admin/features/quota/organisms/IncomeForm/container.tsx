import * as React from 'react'
import * as yup from 'yup'

import { push } from '@app/features/admin/features/toast'
import { Quota } from '@app/models/Quota/Quota'

import { IncomeFormProps, SubmitValues } from './Form'

interface ContainerProps {
  income: (amount: number, quotaId: string) => Promise<Quota>
  quotaId: string
}

const schema = yup.object().shape({
  amount: yup
    .mixed()
    .notOneOf([NaN, 0], 'Обязательное поле')
    .required('Обязательное поле'),
})

const Container = (WrappedComponent: React.ComponentType<IncomeFormProps>) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      return <WrappedComponent onFormSubmit={this.onFormSubmit} />
    }

    private onFormSubmit = async (values: SubmitValues) => {
      try {
        const amount = Number(values.amount)
        schema.validateSync({ amount })
        await this.props.income(amount, this.props.quotaId)
        push({ message: 'Квота успешно обновлена', duration: 2000 })
      } catch (props) {
        return { [props.path]: props.message }
      }
    }
  }
}

export default Container
