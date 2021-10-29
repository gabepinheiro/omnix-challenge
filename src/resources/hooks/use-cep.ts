import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CEPProps, getCEP } from 'services/via-cep-api'

export function useCEP () {
  const [cep, setCep] = useState<CEPProps>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const { cep: cepNumber } = useParams<{ cep: string }>()

  useEffect(() => {
    async function fetchCEP () {
      const cep = await getCEP(cepNumber)

      if ('error' in cep) {
        setError(true)
        setLoading(false)
        return
      }

      setCep(cep)
      setLoading(false)
    }

    fetchCEP()
  }, [cepNumber])

  return {
    cep,
    error,
    loading,
  }
}
