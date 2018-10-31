import { Quota } from '@app/models/Quota/Quota'
import * as React from 'react'
import * as yup from 'yup'

export interface SubmitValues { amount: number }

interface Props {
  income: (amount: number, quotaId: string) => Promise<Quota>
  quotaId: string
  onFormSubmit: (submitValues: SubmitValues) => void
}

const schema = yup.object().shape({
  amount: yup.mixed()
    .notOneOf([NaN, 0], 'Обязательное поле')
    .required('Обязательное поле'),
})

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        {...this.props}
        onFormSubmit={this.onFormSubmit}
      />
    }

    private onFormSubmit = (values: SubmitValues) => {
      try {
        // schema.validateSync(values)
        const amount = Number(values.amount)
        schema.validateSync({ amount })
        return this.props.income(amount, this.props.quotaId)
      } catch (props) {
        return { [props.path]: props.message }
      }
    }
  }
}

export default Container
