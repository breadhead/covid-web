export const getTableData = (doctors: any[]) => {
  return (
    doctors &&
    doctors.map(doctor => ({
      key: doctor.name,
      ...doctor,
    }))
  )
}
