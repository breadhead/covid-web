import React from 'react';
import { FORM_ERROR } from 'final-form';

import {
  saveFormDraft,
  getFormDraft,
  resetFormDraft,
} from '@front/features/common/form/localStorage';

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
  Number = 'number',
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
  children?: FormComponentOptions[];
  title?: string;
  level?: number;
  className?: string;
}

interface FormOptions {
  steps: FormComponentOptions[];
}

interface Props {
  name: string;
  options: FormOptions;
  onSubmit: (data: any) => Promise<any>;
  saveDraft?: (data: any) => any;
  getDraft?: () => any;
  resetDraft?: () => any;
  initialValues?: any;
  className?: string;
  children: (context: FormContext) => React.ReactNode;
  resetAfterSubmit?: boolean;
  badge?: React.ReactNode;
}

export const FormConstructor = ({
  name,
  options,
  onSubmit,
  saveDraft,
  getDraft,
  resetDraft,
  initialValues,
  className,
  children,
  resetAfterSubmit = true,
  badge,
}: Props) => {
  const saveDraftWithDefault = saveDraft || saveFormDraft(name);
  const getDraftWithDefault = getDraft || getFormDraft(name);
  const resetDraftWithDefault = resetDraft || resetFormDraft(name);

  const submitHandler = async (values: any) => {
    try {
      await onSubmit(values);
      resetDraftWithDefault();
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
        saveDebounced={saveDraftWithDefault}
        saveOnBlur={saveDraftWithDefault}
        initialValues={getDraftWithDefault() || initialValues}
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
