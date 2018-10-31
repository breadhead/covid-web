import { push } from '@app/features/toast'
import { Quota } from '@app/models/Quota/Quota'
import * as React from 'react'
import * as yup from 'yup'

export interface SubmitValues { amount?: number }

interface Props {
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>
}
interface ParentProps {
  income: (amount: number, quotaId: string) => Promise<Quota>
  quotaId: string
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>
}

const schema = yup.object().shape({
  amount: yup.mixed()
    .notOneOf([NaN, 0], 'Обязательное поле')
    .required('Обязательное поле'),
})

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<ParentProps> {
    public render() {
      const { income, ...rest } = this.props
      return <WrappedComponent
        {...rest}
        onFormSubmit={this.onFormSubmit}
      />
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
