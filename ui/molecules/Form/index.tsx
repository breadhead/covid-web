import { Form as AntForm } from 'antd'
import React, { ReactNode } from 'react'
import { FormRenderProps } from 'react-final-form'

interface OwnProps {
  children: ReactNode
}

type Props = OwnProps & FormRenderProps

const Form = ({ children, handleSubmit }: Props) => (
  <AntForm onSubmit={handleSubmit} layout="vertical">
    {children}
  </AntForm>
)

export default Form
