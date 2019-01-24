import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { getQuery } from '@app/features/common/browserQuery'
import { State } from '@app/lib/store'

import { StepPointerModel, StepPointerType } from './molecule/StepPointer'
import { Props as ComponentProps } from './organisms/ProgressBar'
import stepNames from './steps'

interface Props {
  step: number
  query?: any
}

const defineType = (index: number, current: number) => {
  if (index < current) {
    return StepPointerType.Success
  }
  if (index === current) {
    return StepPointerType.Full
  }

  return StepPointerType.Empty
}

const defineHref = (index: number, id?: string): undefined | string => {
  if (!id) {
    return undefined
  }

  return [
    `/client/new-claim/${id}`,
    `/client/claim/${id}/situation`,
    `/client/claim/${id}/questions`,
  ][index]
}

const defineDisabled = (index: number, current: number) => index > current

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => ({
  step,
  query,
}: Props) => {
  const current = step - 1

  const id: string | undefined = query && query.id

  const steps = stepNames.map(
    (name, index): StepPointerModel => {
      const href = defineHref(index, id)
      const onClick = href ? () => Router.push(href) : () => null

      return {
        title: name,
        type: defineType(index, current),
        disabled: defineDisabled(index, current),
        onClick,
      }
    },
  )

  return <WrappedComponent steps={steps} />
}

const mapState = (state: State) => ({
  query: getQuery(state),
})

export default compose(
  connect(mapState),
  Container,
)
