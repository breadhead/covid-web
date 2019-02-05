import { getQuery } from '@app/features/common/browserQuery'
import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getStepsFactory } from './helpers/getSteps'
import { Props as ComponentProps } from './organisms/ProgressBar'
import stepNames from './steps'

export enum ProgressBarKind {
  Client = 'Client',
  Disabled = 'Disabled',
}

interface Props {
  step: number
  query?: any
  stepNames: string[]
  kind: ProgressBarKind
}

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => ({
  step,
  query,
  kind,
  ...rest
}: Props) => {
  const current = step - 1
  const id = query && query.id
  const steps = getStepsFactory(kind)(stepNames, id, current)

  return <WrappedComponent steps={steps} {...rest} />
}

const mapState = (state: State) => ({
  query: getQuery(state),
})

// TODO: fix types
export default compose<any, any>(
  connect(mapState),
  Container,
)
