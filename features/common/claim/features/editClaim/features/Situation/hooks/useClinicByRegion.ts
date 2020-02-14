import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'

export const useClinicByRegion = (formContext: any, treatment: string) => {
  const currentRegion = !!formContext.values[`${treatment}`][0]
    ? formContext.values.surgicalTreatments[0].region
    : null

  const [regionClinics, setRegionClinics] = useState<string[]>([])
  const api = useApi()

  useEffect(
    () => {
      if (!!currentRegion) {
        api.searchClinicByRegion(currentRegion).then(setRegionClinics)
      }
    },
    [currentRegion],
  )

  return regionClinics
}
