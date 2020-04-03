import { FormContext } from './FormContext';

export interface OwnProps {
  className?: string;
  resetAfterSubmit?: boolean;
  forceSubmitOnEnter?: boolean;
  preventDefault?: boolean;
  scrollToInvalid?: boolean;
  saveDebounced?: (fields: any) => Promise<any>;
  debounce?: number;
  saveOnBlur?: (fields: any) => Promise<any>;
  children: (formContext: FormContext) => React.ReactNode;
}
