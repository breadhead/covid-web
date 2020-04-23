import React from 'react';
import { FORM_ERROR } from 'final-form';

import { renderFormComponent } from './renderFormComponent';
import { Form } from '.';
import { FormContext } from './components/Form';

export enum FormComponentType {
  ButtonWithTooltip = 'buttonWithTooltip',
  Checkbox = 'checkbox',
  ComboBox = 'comboBox',
  ComboSearch = 'comboSearch',
  EmergingFormElement = 'emergingFormElement',
  Input = 'input',
  PhoneInput = 'phoneInput',
  RadioButton = 'radioButton',
  RadioGroup = 'radioGroup',
  RegionSelect = 'regionSelect',
  Select = 'select',
  SelectMonths = 'selectMonths',
  SelectYears = 'selectYears',
  Switch = 'switch',
  TextArea = 'textArea',
  Toggle = 'toggle',
  ValidationTooltip = 'validationTooltip',
  Label = 'label',
  FieldGroup = 'fieldGroup',
}

interface LabelOptions {
  text: string;
  props?: any;
}

export interface FormComponentOptions {
  props?: any;
  type: FormComponentType;
  hidden?: boolean;
  required?: boolean;
  label?: LabelOptions;
  condition?: (values: any[]) => boolean;
  children?: FormComponentOptions[],
  title?: string,
  level?: number,
  className?: string,
}

interface FormOptions {
  steps: FormComponentOptions[];
}

interface Props {
  options: FormOptions;
  onSubmit: (data: any) => Promise<any>;
  saveDraft: (data: any) => any;
  initialValues?: any;
  className?: string;
  children: (context: FormContext) => React.ReactNode;
  resetAfterSubmit?: boolean;
  badge?: React.ReactNode;
}

export const FormConstructor = ({
  options,
  onSubmit,
  saveDraft,
  initialValues,
  className,
  children,
  resetAfterSubmit,
  badge,
}: Props) => {
  const submitHandler = async (values: any) => {
    try {
      await onSubmit(values);
    } catch (error) {
      return { [FORM_ERROR]: 'error' };
    }
  };

  return (
    <>
      {badge}
      <Form
        resetAfterSubmit={resetAfterSubmit}
        onSubmit={submitHandler as any}
        saveDebounced={saveDraft}
        saveOnBlur={saveDraft}
        initialValues={initialValues}
        className={className}
      >
        {(formContext) => (
          <>
            {options.steps
              .filter(
                ({ condition }) => !condition || condition(formContext.values),
              )
              .map((step, i) => renderFormComponent(step, i))}
            {children(formContext)}
          </>
        )}
      </Form>
    </>
  );
};
