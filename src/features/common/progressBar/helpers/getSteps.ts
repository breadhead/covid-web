import {getClientSteps} from './getClientSteps';
import {getDisabledSteps} from './getDisabledSteps';
import {getManagerSteps} from './getManagerSteps';

export enum ProgressBarKind {
  Client = 'Client',
  Disabled = 'Disabled',
  Manager = 'Manager',
}

const getStepsFactory = (kind: ProgressBarKind) =>
  ({
    [ProgressBarKind.Client]: getClientSteps,
    [ProgressBarKind.Disabled]: getDisabledSteps,
    [ProgressBarKind.Manager]: getManagerSteps,
  }[kind]);

export { getStepsFactory };
