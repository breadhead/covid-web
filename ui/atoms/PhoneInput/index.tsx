interface Props {
  className?: string
  name: string
}

const PhoneInput = (props: Props) => (
  <input className="ant-input" {...props} type="tel" />
)

export default PhoneInput
