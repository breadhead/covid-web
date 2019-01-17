import * as React from 'react'
import Doctors from '../Doctors'

const ChooseDoctor = ({ doctors, filter, onFilterChange }) => (
  <div>
    <Doctors
      doctors={doctors}
      filter={filter}
      onFilterChange={onFilterChange}
    />
  </div>
)

export default ChooseDoctor
