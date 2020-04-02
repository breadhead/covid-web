import RegionSelect from '@app/features/client/features/regionSelect/organisms/RegionSelect'
import PhoneInput from '@app/features/common/form/components/PhoneInput'
import React from 'react'

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

export const getFormComponent = ({ type, options }: FormComponentOptions) => {
  switch (type) {
    case FormComponentType.ButtonWithTooltip:
      return <ButtonWithTooltip {...options} />
    case FormComponentType.Checkbox:
      return <Checkbox {...options} />
    case FormComponentType.ComboBox:
      return <Combobox {...options} />
    case FormComponentType.ComboSearch:
      return <ComboSearch {...options} />
    case FormComponentType.EmergingFormElement:
      return <EmergingFormElement {...options} />
    case FormComponentType.Input:
      return <Input {...options} />
    case FormComponentType.PhoneInput:
      return <PhoneInput {...options} />
    case FormComponentType.RadioButton:
      return <RadioButton {...options} />
    case FormComponentType.RegionSelect:
      return <RegionSelect {...options} />
    case FormComponentType.Select:
      return <Select {...options} />
    case FormComponentType.SelectMonths:
      return <SelectMonths {...options} />
    case FormComponentType.SelectYears:
      return <SelectYears {...options} />
    case FormComponentType.RadioGroup:
      return <RadioGroup {...options} />
    case FormComponentType.Switch:
      return <Switch {...options} />
    case FormComponentType.TextArea:
      return <TextArea {...options} />
    case FormComponentType.Toggle:
      return <Toggle {...options} />
    case FormComponentType.ValidationTooltip:
      return <ValidationTooltip {...options} />
    case FormComponentType.Label:
      return <label {...options}>options.text</label>
    default:
      return <></>
  }
}
