import { useEffect, useState } from 'react';
import { Story } from '@app/models/Story';
import { useApi } from '@app/lib/api/useApi';

export const useStoriesContent = () => {
  const [stories, setStories] = useState<Story[] | undefined>(undefined)

  const api = useApi()

  useEffect(() => {
    const fetch = async () => {
      await api.fetchStories().then(setStories)
    }
    fetch()
  }, [])

  return stories
}