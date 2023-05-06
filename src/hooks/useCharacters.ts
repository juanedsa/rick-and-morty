import { useState, useEffect } from 'react'

import { API } from '../constants/url-contants'

import useApiData from './useApiData'

function useCharacters(page: number, name: string) {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState<InfoModel>({ prev: '', next: '', pages: 0 })

  const url = `${API}/character/?page=${page}&name=${name}`

  const { data, isLoading } = useApiData(url)

  useEffect(() => {
    if (data) {
      const { results } = data
      const { info } = data

      setCharacters(results)
      setInfo(info)
    }
  }, [data])

  return { characters, info, isLoading }
}

export default useCharacters
