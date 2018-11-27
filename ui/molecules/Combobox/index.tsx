import { Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import './Combobox.css?CSSModulesDisable'

const FormItem = AntForm.Item
const Option = AntSelect.Option

interface Props {
  name: string
  options: Array<{
    id: string,
    value: string,
  }>
  defaultValue: string
  className?: string
  label?: string
  disabled?: boolean
}

const Combobox = ({
  name,
  className,
  label,
  options,
  defaultValue,
  disabled,
  ...rest
}: Props) => (
    <FinalField className={className} name={name}>
      {({ meta }) => (
        <FormItem
          validateStatus={meta.submitError && 'error'}
          help={meta.submitError}
        >
          {label && <label htmlFor={name}>{label}</label>}
          <AntSelect
            id={name}
            showSearch
            defaultValue={defaultValue}
            maxTagCount={6}
            notFoundContent="К сожалению, ничего не найдено"
            disabled={disabled}
            {...rest}
          >
            {options.map((option) => (
              <Option key={option.id} value={option.value}>{option.value}</Option>
            ))}
          </AntSelect>
        </FormItem>
      )}
    </FinalField>
  )


export default Combobox
