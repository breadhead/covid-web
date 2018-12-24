import { Input as AntInput } from 'antd'
import { InputProps } from 'antd/lib/input'
import cx from 'classnames'
import * as React from 'react'

import './AntInput.css?CSSModulesDisable'
import styles from './Input.css'

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Phone = 'tel',
  Password = 'password',
}

interface OwnProps {
  error?: string
  name: string
  type?: InputType
  label?: string
  defaultValue?: string
  className?: string
}

export type Props = OwnProps & InputProps

const Input = ({ name, type, label, error, className, ...rest }: Props) => (
  <div className={className}>
    {label && (
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    )}
    <AntInput
      id={name}
      type={type}
      className={cx(styles.input, error && styles.error)}
      {...rest}
    />
  </div>
)

export default Input
