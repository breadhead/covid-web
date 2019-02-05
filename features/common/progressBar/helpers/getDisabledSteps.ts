import { StepPointerType } from '../molecule/StepPointer'

export const getDisabledSteps = (stepNames: string[]) =>
  stepNames.map(step => ({
    title: step,
    type: StepPointerType.Empty,
    disabled: true,
  }))
