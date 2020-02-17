import { ComplexOptions } from '../HintInput';
import { AutoComplete } from 'antd'
const { Option, OptGroup } = AutoComplete


export const mapComplexOptions = (options: ComplexOptions[]) => {
  return options
    .map(group => (
      <OptGroup key={group.title} label={group.title} >
        {
          group.children.map(opt => (
            <Option key={opt} value={opt} >
              {opt}
            </Option>
          ))
        }
      </OptGroup>
    ));
}