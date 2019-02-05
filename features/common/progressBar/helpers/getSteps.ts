import { ProgressBarKind } from '../container'
import { getClientSteps } from './getClientSteps'
import { getDisabledSteps } from './getDisabledSteps'
import { getManagerSteps } from './getManagerSteps'

const getStepsFactory = (kind: ProgressBarKind) =>
  ({
    [ProgressBarKind.Client]: getClientSteps,
    [ProgressBarKind.Disabled]: getDisabledSteps,
    [ProgressBarKind.Manager]: getManagerSteps,
  }[kind])

export { getStepsFactory }
