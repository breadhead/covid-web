import Clock from '@app/ui/atoms/Clock'
import Counter from '@app/ui/atoms/Counter'

interface Props {
  lastUpdate: number
  light: boolean
}

export default ({ lastUpdate, light }: Props) => (
  <div>
    <Clock lastUpdate={lastUpdate} light={light} />
    <Counter />
  </div>
)
