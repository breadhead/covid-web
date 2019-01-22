import PhoneInputRu from '@breadhead/phone-input-ru'

interface Props {
  className?: string
  name: string
}

const PhoneInput = (props: Props) => (
  <PhoneInputRu className="ant-input" {...props} />
)

export default PhoneInput
