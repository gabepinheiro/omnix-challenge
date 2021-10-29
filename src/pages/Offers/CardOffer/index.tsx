import { MouseEvent } from 'react'
import { WifiOutline as WifiIcon } from '@styled-icons/evaicons-outline'
import { Button } from 'ui/Button'

import { getCurrencyFormatted } from 'resources/utils/getCurrencyFormatted'

import * as S from './styles'

export type OfferProps = {
  id: number
  name: string
  velocity: number
  price: number
  isSelected:boolean
  onSelected: (id: number) => (e: MouseEvent<HTMLButtonElement>) => void
}

export function CardOffer ({
  id,
  name,
  velocity,
  price,
  isSelected,
  onSelected,
}: OfferProps) {
  return (
    <S.Wrapper
      id={String(id)}
      onClick={onSelected(id)}
      selected={isSelected}
    >
      <S.IconWrapper>
        <WifiIcon size={32} />
      </S.IconWrapper>
      <S.Title>{name}</S.Title>
      <S.Velocity>{velocity} Mega</S.Velocity>

      <S.Price>{getCurrencyFormatted(Number(price))}<span>/ mês</span></S.Price>

      <S.ButtonWrapper>
        <Button>Assine já</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
