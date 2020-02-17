import { useApi } from '@app/lib/api/useApi';
import { useState, useEffect } from 'react';
import { getValueFromFormContext } from '../helpers/getValueFromFormContext';

export const useClinicByRegion = (formContext: any, treatment: string) => {
  const api = useApi()

  const currentRegion = getValueFromFormContext(formContext, treatment, 'region')
  const currentClinicValue = getValueFromFormContext(formContext, treatment, 'clinic')

  const [regionClinics, setRegionClinics] = useState<string[]>([])

  useEffect(
    () => {
      if (!!currentRegion) {
        api.searchClinicByRegion(currentRegion, currentClinicValue).then(setRegionClinics)
      }
    },
    [currentRegion, currentClinicValue],
  )

  return regionClinics
}
