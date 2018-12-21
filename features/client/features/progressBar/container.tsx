import * as React from 'react'

import { StepPointerModel, StepPointerType } from './molecule/StepPointer'
import { Props as ComponentProps } from './organisms/ProgressBar'
import stepNames from './steps'

interface Props {
  step: number
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

const defineDisabled = (index: number, current: number) => index > current

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => ({
  step,
}: Props) => {
  const current = step - 1

  const steps = stepNames.map(
    (name, index): StepPointerModel => ({
      title: name,
      type: defineType(index, current),
      disabled: defineDisabled(index, current),
    }),
  )

  return <WrappedComponent steps={steps} />
}

export default Container
