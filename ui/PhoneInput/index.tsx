import cx from 'classnames'

interface Props {
  className?: string
  name: string
}

const PhoneInput = ({ className, ...rest }: Props) => (
  <input {...rest} className={cx(className, 'ant-input')} type="tel" />
)

export default PhoneInput
