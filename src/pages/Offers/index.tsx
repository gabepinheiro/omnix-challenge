import { Container } from 'ui/Container'
import { Button } from 'ui/Button'
import { CardOffer } from './CardOffer'
import * as S from './styles'

import { useHistory } from 'react-router-dom'
import { useCEP } from 'resources/hooks/use-cep'
import { useOffers } from 'resources/hooks/use-offers'

export function Offers () {
  const { cep, error, loading } = useCEP()
  const { offers, onSelected } = useOffers()

  const history = useHistory()

  const handleClick = () => history.push('/')

  const address = `${cep?.logradouro}, ${cep?.bairro}, ${cep?.localidade}, ${cep?.uf}`

  return (
    <S.Wrapper>
      <Container>
        {loading && <S.Title>Loading...</S.Title>}
        {error && <S.Title>CEP não encontrado</S.Title>}
        {!!cep && (
          <>
            <S.Title>Endereço</S.Title>
            <S.SubTitle>{address}</S.SubTitle>

            <S.SectionOffers>
              <S.ListOffers>
                {offers?.map(({ id, name, ...rest }) => (
                  <S.ItemOffer key={`${id}-${name}`}>
                    <CardOffer id={id} name={name} {...rest} onSelected={onSelected} />
                  </S.ItemOffer>
                ))}
              </S.ListOffers>
            </S.SectionOffers>
          </>
        )}
        <S.ButtonWrapper>
          <Button onClick={handleClick}>Ops, errei meu cep!</Button>
        </S.ButtonWrapper>
      </Container>
    </S.Wrapper>
  )
}
