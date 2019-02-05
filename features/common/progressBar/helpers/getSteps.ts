import { ProgressBarKind } from '../container'
import { getClientSteps } from './getClientSteps'
import { getDisabledSteps } from './getDisabledSteps'

const getStepsFactory = (kind: ProgressBarKind) =>
  ({
    [ProgressBarKind.Client]: getClientSteps,
    [ProgressBarKind.Disabled]: getDisabledSteps,
  }[kind])

export { getStepsFactory }
