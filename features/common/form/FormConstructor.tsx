import React from 'react';
import { Form } from './';

export enum FormComponentType {

}

export interface FormComponentOptions {
  title: string
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

export const FormConstructor = ({ options, onSubmit, saveDraft, initialValues, className }: Props) => {

  return(
    <Form
      onSubmit={onSubmit}
      saveDebounced={saveDraft}
      saveOnBlur={saveDraft}
      initialValues={initialValues}
      className={className}
    >

    </Form>
   );
}