import {RemoveSection} from './RemoveSection';

export interface FormContext {
  removeSectionFromState: RemoveSection;
  values: any;
  submitting?: boolean;
  submitSucceeded?: boolean;
  hasValidationErrors?: boolean;
  submitError?: any;
  submitFailed?: boolean;
  changeField: (name: string, value?: any) => void;
}
