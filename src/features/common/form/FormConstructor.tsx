import React from 'react';

import { renderFormComponent } from './renderFormComponent';
import { Form } from '.';

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
}

interface LabelOptions {
  text: string;
  props?: any;
}

export interface FormComponentOptions {
  props?: any;
  type: FormComponentType;
  required?: boolean;
  label?: LabelOptions;
  condition?: (values: any[]) => boolean;
}

interface FormOptions {
  steps: FormComponentOptions[];
}

interface Props {
  options: FormOptions;
  onSubmit: (data: any) => any;
  saveDraft: (data: any) => any;
  initialValues?: any;
  className?: string;
  children?: React.ReactNode;
}

export const FormConstructor = ({
  options,
  onSubmit,
  saveDraft,
  initialValues,
  className,
  children,
}: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      saveDebounced={saveDraft}
      saveOnBlur={saveDraft}
      initialValues={initialValues}
      className={className}
    >
      {({ values }) => (
        <>
          {options.steps
            .filter(({ condition }) => !condition || condition(values))
            .map((step, i) => renderFormComponent(step, i))}
          {children}
        </>
      )}
    </Form>
  );
};
