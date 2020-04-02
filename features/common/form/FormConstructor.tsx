import { getFormComponent } from '@app/features/common/form/getFormComponent'
import React from 'react'
import { Form } from './'

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

export interface FormComponentOptions {
  title: string
  name: string
  options?: string[]
  type: FormComponentType
  className?: string
}

interface FormOptions {
  steps: FormComponentOptions[]
}

interface Props {
  options: FormOptions
  onSubmit: (data: any) => any
  saveDraft: (data: any) => any
  initialValues?: any
  className?: string
}

export const FormConstructor = ({
  options,
  onSubmit,
  saveDraft,
  initialValues,
  className,
}: Props) => {
  return (
    <Form
      onSubmit={onSubmit}
      saveDebounced={saveDraft}
      saveOnBlur={saveDraft}
      initialValues={initialValues}
      className={className}
    >
      {options.steps.map(getFormComponent)}
    </Form>
  )
}
