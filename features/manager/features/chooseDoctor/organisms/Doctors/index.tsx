import { Doctor } from '@app/models/Doctor'
import * as React from 'react'
import SearchBar from '../../molecules/SearchBar'
import Form, { FormFields } from '../Form'
import * as styles from './Doctors.css'

interface Props {
  doctors: Doctor[]
  onSubmit: (fields: FormFields) => void
  filter: string
  onFilterChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

const Doctors = ({ filter, onFilterChange, doctors, onSubmit }: Props) => (
  <div className={styles.Doctors}>
    <h2 className={styles.Title}>Выберите специалиста</h2>
    <SearchBar value={filter} onChange={onFilterChange} />
    <Form doctors={doctors} onSubmit={onSubmit} />
  </div>
)

export default Doctors
