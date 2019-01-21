import Input from '@app/ui/atoms/Input'
import * as React from 'react'
import * as styles from './SearchBar.css'

interface Props {
  value: string
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const SearchBar = ({ value, onChange }: Props) => (
  <div className={styles.SearchBarWrapper}>
    <Input
      placeholder="Поиск специалиста"
      className={styles.SearchBar}
      value={value}
      onChange={onChange}
      name="doctorsFilter"
    />
  </div>
)

export default SearchBar
