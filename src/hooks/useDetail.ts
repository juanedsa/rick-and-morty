import { useState, useEffect } from 'react'

import { API } from '../constants/url-contants'
import { CharacterModel } from '../models/character.model'

import useApiData from './useApiData'

function useDetail(id: string) {
  const [detail, setDetail] = useState<CharacterModel>()

  const url = `${API}/character/${id}`

  const { data, isLoading } = useApiData(url)

  useEffect(() => {
    if (data) {
      setDetail(data)
    }
  }, [data])

  return { detail, isLoading }
}

export default useDetail
