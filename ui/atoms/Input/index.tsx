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
  wrapperClassName?: string
  onChange: <T>(event: React.ChangeEvent<T> | any) => void
}

export type Props = OwnProps & InputProps

const Input = ({
  name,
  type,
  label,
  error,
  wrapperClassName,
  ...rest
}: Props) => (
  <div className={wrapperClassName}>
    {label && (
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    )}
    <AntInput
      className={cx(styles.input, error && styles.error)}
      id={name}
      type={type}
      {...rest}
    />
  </div>
)

export default Input
