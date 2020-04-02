import { RemoveSection } from './RemoveSection';

export interface FormContext {
  removeSectionFromState: RemoveSection;
  values: any;
  changeField: (name: string, value?: any) => void;
}
