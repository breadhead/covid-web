import { Button as AntButton, Form as AntForm } from 'antd'
import cx from 'classnames'
import * as React from 'react'
import { Field as FinalField } from 'react-final-form'
import './Button.css?CSSModulesDisable'

const FormItem = AntForm.Item

const defaultClassNames = {
  wrapperClassName: '',
  buttonClassName: '',
}

interface Props {
  type?: 'button' | 'submit',
  classNames?: {
    wrapperClassName?: string,
    buttonClassName?: string,
  }
  label?: string,
  size?: 's' | 'm' | 'l' | 'xl',
  disabled?: true
  kind?: 'primary' | 'secondary' | 'extra'
}

const Button = ({
  type = 'button',
  classNames = defaultClassNames,
  label,
  size = 'm',
  kind = 'primary',
  ...rest
}: Props) =>
  <FinalField name="" type={type}>
    {({ input, meta }) => (
      <FormItem
        className={classNames.wrapperClassName}
        validateStatus={meta.submitError && 'error'}
        help={meta.submitError}
      >
        {label && <label>{label}</label>}
        <AntButton
          className={cx(`ant-btn-${size} ant-btn-${kind}`, classNames.buttonClassName)}
          htmlType={type}
          {...input}
          {...rest}
        />

      </FormItem>
    )}
  </FinalField>

export default Button
