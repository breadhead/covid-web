import React from 'react';
import cx from 'classnames';
import * as yup from 'yup';

import RegionSelect from '@app/src/ui/regionSelect/organisms/RegionSelect';
import PhoneInput from '@app/src/features/common/form/components/withFinalForm/PhoneInput';
import ButtonWithTooltip from '@app/src/features/common/form/components/withFinalForm/ButtonWithTooltip';
import Checkbox from '@app/src/features/common/form/components/withFinalForm/Checkbox';
import ComboSearch from '@app/src/features/common/form/components/withFinalForm/ComboSearch';
import EmergingFormElement from '@app/src/features/common/form/components/withFinalForm/EmergingFormElement';
import Input from '@app/src/features/common/form/components/withFinalForm/Input';
import RadioButton from '@app/src/features/common/form/components/withFinalForm/RadioButton';
import RadioGroup from '@app/src/features/common/form/components/withFinalForm/RadioGroup';
import Select from '@app/src/features/common/form/components/withFinalForm/Select';
import SelectMonths from '@app/src/features/common/form/components/withFinalForm/SelectMonths';
import SelectYears from '@app/src/features/common/form/components/withFinalForm/SelectYears';
import Switch from '@app/src/features/common/form/components/withFinalForm/Switch';
import TextArea from '@app/src/features/common/form/components/withFinalForm/TextArea';
import Toggle from '@app/src/features/common/form/components/withFinalForm/Toggle';
import ValidationTooltip from '@app/src/features/common/form/components/withFinalForm/ValidationTooltip';
import {FormComponentOptions, FormComponentType,} from '@app/src/features/common/form/FormConstructor';
import Combobox from '@app/src/ui/Combobox';

import {REQUIRED_MESSAGE} from '@front/helpers/validationMessages';

import styles from './commonStyles.css';

const getFormComponent = (type: FormComponentType, props: any) => {
  switch (type) {
    case FormComponentType.ButtonWithTooltip:
      return <ButtonWithTooltip {...props} />;
    case FormComponentType.Checkbox:
      return <Checkbox {...props} />;
    case FormComponentType.ComboBox:
      return <Combobox {...props} />;
    case FormComponentType.ComboSearch:
      return <ComboSearch {...props} />;
    case FormComponentType.EmergingFormElement:
      return <EmergingFormElement {...props} />;
    case FormComponentType.Input:
      return <Input {...props} />;
    case FormComponentType.PhoneInput:
      return <PhoneInput {...props} />;
    case FormComponentType.RadioButton:
      return <RadioButton {...props} />;
    case FormComponentType.RegionSelect:
      return <RegionSelect {...props} />;
    case FormComponentType.Select:
      return <Select {...props} />;
    case FormComponentType.SelectMonths:
      return <SelectMonths {...props} />;
    case FormComponentType.SelectYears:
      return <SelectYears {...props} />;
    case FormComponentType.RadioGroup:
      return <RadioGroup {...props} />;
    case FormComponentType.Switch:
      return <Switch {...props} />;
    case FormComponentType.TextArea:
      return <TextArea {...props} />;
    case FormComponentType.Toggle:
      return <Toggle {...props} />;
    case FormComponentType.ValidationTooltip:
      return <ValidationTooltip {...props} />;
    case FormComponentType.Label:
      const asterisk = props.required ? '*' : '';
      return <label {...props}>{`${props.text}${asterisk}`}</label>;
    default:
      return <></>;
  }
};

export const renderFormComponent = (
  { type, required, label, props }: FormComponentOptions,
  key: any,
) => {
  if (required) {
    props.validate = (props.validate || yup.mixed()).required(REQUIRED_MESSAGE);
  }

  debugger;

  return (
    <React.Fragment key={key}>
      {label &&
        getFormComponent(FormComponentType.Label, {
          className: cx(styles.label),
          ...label.props,
          text: label.text,
          htmlFor: props ? props.name : '',
          required: required,
        })}
      {getFormComponent(type, { className: styles.field, ...props })}
    </React.Fragment>
  );
};
