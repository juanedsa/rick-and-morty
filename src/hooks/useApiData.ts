import { useState, useEffect } from 'react'

function useApiData(url: string) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        // let data = await fetch(url).then((res) => res.json());

        const response = await fetch(url);
        const data = await response.json();

        console.log('data', data)



        setData(data)
        setLoading(false)
      } catch (error: any) {
        console.log('error', error)
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useApiData
