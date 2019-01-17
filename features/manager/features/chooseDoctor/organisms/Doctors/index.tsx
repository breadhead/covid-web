import Input from '@app/ui/atoms/Input'
import * as React from 'react'
import List from '../List'

const Doctors = ({ filter, onFilterChange, doctors, onSubmit }) => (
  <div>
    <Input value={filter} onChange={onFilterChange} name="doctorsFilter" />
    <List doctors={doctors} onSubmit={onSubmit} />
  </div>
)

export default Doctors
