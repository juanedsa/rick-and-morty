import { useState, useEffect } from 'react'

function useApiData(url: string) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { data, isLoading }
}

export default useApiData
