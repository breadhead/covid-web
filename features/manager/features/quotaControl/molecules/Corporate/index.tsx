import Button from '@app/ui/atoms/Button'
import Select from '@app/ui/atoms/Select'

import * as styles from './Corporate.css'

const options = [
  {
    key: '1',
    label: 'Проверка корпоративности',
  },
]

interface Props {
  openChooseDoctor: () => void
}

const Corporate = ({ openChooseDoctor }: Props) => (
  <div className={styles.corporate}>
    <Select name="fdf" options={options} defaultValue={'1'} />
    <Button onClick={openChooseDoctor}>Выбрать доктора</Button>
  </div>
)

export default Corporate
