import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Container } from 'ui/Container'
import { Button } from 'ui/Button'
import { CardOffer } from './CardOffer'

import * as S from './styles'

import { offersMock } from './mock'
import { CEPProps, getCEP } from 'services/via-cep-api'

export function Offers () {
  const [cep, setCep] = useState<CEPProps>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const history = useHistory()
  const { cep: cepNumber } = useParams<{cep: string}>()

  useEffect(() => {
    async function fetchCEP () {
      const cep = await getCEP(cepNumber)

      if (cep instanceof Error) {
        setError(true)
        setLoading(false)
        return
      }

      setCep(cep)
      setLoading(false)
    }

    fetchCEP()
  }, [cepNumber])

  const handleClick = () => history.push('/')

  const address =
   `${cep?.logradouro}, ${cep?.bairro}, ${cep?.localidade}, ${cep?.uf}`

  return (
    <S.Wrapper>
      <Container>
        {loading && <S.Title>Loading...</S.Title>}
        {error && <S.Title>CEP não encontrado</S.Title>}
        {!!cep &&
          <>
            <S.Title>Endereço</S.Title>
            <S.SubTitle>{address}</S.SubTitle>

            <S.SectionOffers>
              <S.ListOffers>
                {offersMock.map(({ velocity, price }, id) => (
                  <S.ItemOffer key={`${id}-${velocity}`}>
                    <CardOffer velocity={velocity} price={price} />
                  </S.ItemOffer>
                ))}
              </S.ListOffers>
            </S.SectionOffers>
          </>}
        <S.ButtonWrapper>
          <Button onClick={handleClick}>Ops, errei meu cep!</Button>
        </S.ButtonWrapper>
      </Container>
    </S.Wrapper>
  )
}
