import { useHistory } from 'react-router-dom'
import { Container } from 'ui/Container'
import { Button } from 'ui/Button'
import { CardOffer } from './CardOffer'

import * as S from './styles'

import { offersMock } from './mock'

export function Offers () {
  const history = useHistory()

  const handleClick = () => history.push('/')

  return (
    <S.Wrapper>
      <Container>
        <S.Title>Endereço</S.Title>
        <S.SubTitle>Rua Fulano de Tal, 1000, São Paulo</S.SubTitle>

        <S.SectionOffers>
          <S.ListOffers>
            {offersMock.map(({ velocity, price }, id) => (
              <S.ItemOffer key={`${id}-${velocity}`}>
                <CardOffer velocity={velocity} price={price} />
              </S.ItemOffer>
            ))}
          </S.ListOffers>
        </S.SectionOffers>

        <S.ButtonWrapper>
          <Button onClick={handleClick}>Ops, errei meu cep!</Button>
        </S.ButtonWrapper>
      </Container>
    </S.Wrapper>
  )
}
