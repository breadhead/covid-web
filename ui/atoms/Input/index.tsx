import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import * as React from 'react'

import './AntInput.css?CSSModulesDisable'
import styles from './Input.css'

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Phone = 'tel',
}

export type Props = {
  name: string,
  type?: InputType,
  label?: string,
  defaultValue?: string,
  wrapperClassName?: string,
} & InputProps

const Input = ({ name, type, label, wrapperClassName, ...rest }: Props) =>
  <div className={wrapperClassName}>
    {label && <label className={styles.label} htmlFor={name}>{label}</label>}
    <AntInput
      id={name}
      type={type}
      {...rest}
    />
  </div>

export default Input
