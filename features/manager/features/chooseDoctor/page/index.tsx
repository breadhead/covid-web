import { Doctor } from '@app/models/Users/Doctor'
import * as React from 'react'
import SearchBar from '../molecules/SearchBar'
import Form, { FormFields } from '../organisms/Form'
import * as styles from './Page.css'

interface Props {
  doctors: Doctor[]
  onSubmit: (fields: FormFields) => void
  filter: string
  onFilterChange: (e: React.SyntheticEvent<HTMLInputElement>) => void
  initialValues: Partial<FormFields>
  chooseDoctorError: false | string
}

const Doctors = ({
  filter,
  onFilterChange,
  doctors,
  onSubmit,
  initialValues,
  chooseDoctorError,
}: Props) => (
  <div className={styles.Doctors}>
    <h2 className={styles.Title}>Выберите специалиста</h2>
    <SearchBar value={filter} onChange={onFilterChange} />
    <Form
      chooseDoctorError={chooseDoctorError}
      initialValues={initialValues}
      doctors={doctors}
      onSubmit={onSubmit}
    />
  </div>
)

export default Doctors
