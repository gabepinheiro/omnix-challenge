import { WifiOutline as WifiIcon } from '@styled-icons/evaicons-outline'
import { Button } from 'ui/Button'

import * as S from './styles'

export type CardOfferProps = {
  velocity: string
  price: string
}

export function CardOffer ({ velocity, price }: CardOfferProps) {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <WifiIcon size={32} />
      </S.IconWrapper>
      <S.Title>{velocity} Mega</S.Title>

      <S.Price>{price}</S.Price>

      <S.ButtonWrapper>
        <Button>Assine já</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
