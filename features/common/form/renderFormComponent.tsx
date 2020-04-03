import PhoneInput from '@app/features/common/form/components/PhoneInput'
import RegionSelect from '@app/ui/regionSelect/organisms/RegionSelect'
import { REQUIRED_MESSAGE } from '@front/helpers/validationMessages'
import React from 'react'
import * as yup from 'yup';

import ButtonWithTooltip from '@app/features/common/form/components/ButtonWithTooltip'
import Checkbox from '@app/features/common/form/components/Checkbox'
import ComboSearch from '@app/features/common/form/components/ComboSearch'
import EmergingFormElement from '@app/features/common/form/components/EmergingFormElement'
import Input from '@app/features/common/form/components/Input'
import RadioButton from '@app/features/common/form/components/RadioButton'
import RadioGroup from '@app/features/common/form/components/RadioGroup'
import Select from '@app/features/common/form/components/Select'
import SelectMonths from '@app/features/common/form/components/SelectMonths'
import SelectYears from '@app/features/common/form/components/SelectYears'
import Switch from '@app/features/common/form/components/Switch'
import TextArea from '@app/features/common/form/components/TextArea'
import Toggle from '@app/features/common/form/components/Toggle'
import ValidationTooltip from '@app/features/common/form/components/ValidationTooltip'
import {
  FormComponentOptions,
  FormComponentType,
} from '@app/features/common/form/FormConstructor'
import Combobox from '@app/ui/Combobox'

const getFormComponent = (type: FormComponentType, props: any) => {
  switch (type) {
    case FormComponentType.ButtonWithTooltip:
      return <ButtonWithTooltip {...props} />
    case FormComponentType.Checkbox:
      return <Checkbox {...props} />
    case FormComponentType.ComboBox:
      return <Combobox {...props} />
    case FormComponentType.ComboSearch:
      return <ComboSearch {...props} />
    case FormComponentType.EmergingFormElement:
      return <EmergingFormElement {...props} />
    case FormComponentType.Input:
      return <Input {...props} />
    case FormComponentType.PhoneInput:
      return <PhoneInput {...props} />
    case FormComponentType.RadioButton:
      return <RadioButton {...props} />
    case FormComponentType.RegionSelect:
      return <RegionSelect {...props} />
    case FormComponentType.Select:
      return <Select {...props} />
    case FormComponentType.SelectMonths:
      return <SelectMonths {...props} />
    case FormComponentType.SelectYears:
      return <SelectYears {...props} />
    case FormComponentType.RadioGroup:
      return <RadioGroup {...props} />
    case FormComponentType.Switch:
      return <Switch {...props} />
    case FormComponentType.TextArea:
      return <TextArea {...props} />
    case FormComponentType.Toggle:
      return <Toggle {...props} />
    case FormComponentType.ValidationTooltip:
      return <ValidationTooltip {...props} />
    case FormComponentType.Label:
      return <label {...props}>{props.text}</label>
    default:
      return <></>
  }
}

export const renderFormComponent = (
  { type, required, label, props }: FormComponentOptions,
  key: any,
) => {

  if (required) {
    props.validate = (props.validate || yup.mixed()).required(REQUIRED_MESSAGE);
  }

  return (
    <React.Fragment key={key}>
      {label &&
        getFormComponent(FormComponentType.Label, {
          ...label.props,
          text: label.text,
          htmlFor: props ? props.name : '',
        })}
      {getFormComponent(type, props)}
    </React.Fragment>
  )
}
