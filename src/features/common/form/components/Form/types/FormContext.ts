import { RemoveSection } from './RemoveSection';

export interface FormContext {
  removeSectionFromState: RemoveSection;
  values: any;
  submitting?: boolean;
  changeField: (name: string, value?: any) => void;
}
