import { useState, useEffect } from 'react'

import { API } from '../constants/url-contants'

import useApiData from './useApiData'

function useCharacters(page: number) {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState<InfoModel>({ prev: '', next: '' })

  const url = `${API}/character/?page=${page}`

  const { data, isLoading, error } = useApiData(url)

  useEffect(() => {
    if (data) {
      const { results } = data
      const { info } = data

      setCharacters(results)
      setInfo(info)
    }
  }, [data])

  return { characters, info, isLoading, error }
}

export default useCharacters
