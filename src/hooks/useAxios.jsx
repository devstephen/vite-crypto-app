import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (params) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

  const fetchData = async (params) => {
    try {
      const result = await axios(params)
      setLoading(true)
      setResponse(result.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(params)
  }, [])

  return {
    response,
    loading,
    error,
  }
}

export default useAxios
