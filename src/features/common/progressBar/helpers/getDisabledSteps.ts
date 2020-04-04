import { StepPointerType } from '../molecule/StepPointer';
import { clientSteps } from '../steps';

export const getDisabledSteps = () =>
  clientSteps.map((step) => ({
    title: step,
    type: StepPointerType.Empty,
    disabled: true,
  }));
