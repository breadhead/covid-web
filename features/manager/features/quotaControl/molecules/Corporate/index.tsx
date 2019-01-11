import Select from '@app/ui/atoms/Select'

import * as styles from './Corporate.css'

const options = [
  {
    key: '1',
    label: 'Проверка корпоративности',
  },
]

const Corporate = () => (
  <div className={styles.corporate}>
    <Select name="fdf" options={options} defaultValue={'1'} />
  </div>
)

export default Corporate
